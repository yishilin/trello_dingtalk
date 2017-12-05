function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    } 
    return a;
}



function Handler(action, view_root, dingtalk_tokens) {
    this.translationKey = filter(action);
    this.view_root = view_root;
    this.action = action;
    this.dingtalk_tokens = dingtalk_tokens;


    function process_msg_for_at(dingMsgJson, trelloIds, action, members) {
        let at_trellonames = get_at_trellonames_in_comments(action); 
        let all_names = arrayUnique(members.concat(at_trellonames));
        let action_memberCreator_username = action.memberCreator.username;
    
        //remove the member who created the action
        let final_names = all_names.filter(function(x){ return x != action_memberCreator_username});

        //remove the member who did not have the phone mapped in dingtalk
        let mobiles = final_names.filter(function(x){return trelloIds.hasOwnProperty(x); }).
            map(function(x) { return trelloIds[x];}); 

        mobiles = arrayUnique(mobiles);

        let at = {
            "atMobiles": mobiles, 
            "isAtAll": false
        }
        dingMsgJson["at"] = at;

        let at_text_tail = mobiles.map(function(x){return " @" + x;}).toString();

        markdown = dingMsgJson['markdown'];
        markdown['text'] = markdown['text'] + "\n\n" + at_text_tail; 
    }

    function get_card_member_phones(card_id){
        let deferred = Promise.defer();

        var members = null; 
        var Trello = require("node-trello");
        var t = new Trello(process.AppConfig.TRELLO_API_KEY, process.AppConfig.TRELLO_API_TOKEN);
         
        t.get("/1/cards/" + card_id + "/members", function(err, members) {
            if (err) {
                //throw err; //the card may not exist yet (i.e deleted)
              members = [];
            } else {
              members = members.map(function(x) { return x['username']; }); 
            }
            deferred.resolve(members);
        });
        return deferred.promise;
    }


    function get_at_trellonames_in_comments(action) {
        if('action_comment_on_card' == action.display.translationKey)
            text = action.data.text; 
        else
            text = '';

        let at_trellonames = [];
        if(text) {
            let t = text.match(/@\w+/g);
            if (t) { 
                at_trellonames = t.map(function(s) {return s.substr(1)}); 
            }
        } 

        return at_trellonames;
    }    


    this.handle = function() {
        let fs = require('fs');
        let path = this.view_root + this.translationKey + '.js';
        if (fs.existsSync(path)) {
            let jsonObj = require(path)
            if (jsonObj) {
                let jsonStr = JSON.stringify(jsonObj);
                let render = require('json-templater/string');
                let msg_str = render(jsonStr, {action: escapeJson(this.action)});
                let dingMsgJson = JSON.parse(msg_str);

                //first call trello api get the members of the card, then map it to dingtalk phone
                //then send message to tinktalk phone
                let dingtalk_tokens = this.dingtalk_tokens; 
                let action = this.action;
                var trelloIds = process.AppConfig.TRELLOID_MAP_DINGTALKID; 

                get_card_member_phones(this.action.data.card.id).then(function (members) { 
                    process_msg_for_at(dingMsgJson, trelloIds, action, members); 
                    let send2dingtalk = require('./sender.js');
                    send2dingtalk(dingMsgJson, dingtalk_tokens);
                });
            }
        } else {
            console.log("ERROR: Trello type " + this.translationKey + "\'s template not exists: " + path);
        }
    };

    
    //Json could not have the \r\n which need to escape
    function escapeJson(obj) {
        let tf = typeof(obj);
        if (tf == "boolean" || tf == 'number' || tf == "undefined" || tf == 'function') return obj;
        if (tf == "string") return escape(obj);

        let newObj = {};  //then the object
        for(k in obj) {
            newObj[k] = escapeJson(obj[k]);
        }
        return newObj;
    }

    function escape(str) {
      return str
        .replace(/[\\]/g, '\\\\')
        .replace(/[\"]/g, '\\\"')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n> ')
        .replace(/[\r]/g, '\\r> ')
        .replace(/[\t]/g, '\\t');
    };



    function filter (action) {
        d = new Date(action.date);
        action.date = (new Date(d.toISOString())).toLocaleString();

        switch (action.display.translationKey) {
            case 'action_added_a_due_date':
                d = new Date(action.data.card.due);
                action.data.card.due = d.toISOString().slice(0,10);
                break;

            case 'action_changed_a_due_date':
                d = new Date(action.data.card.due);
                action.data.card.due = d.toISOString().slice(0,10);

                d = new Date(action.data.old.due);
                action.data.old.due = d.toISOString().slice(0,10);
                break;

            case 'action_removed_a_due_date':
                d = new Date(action.data.old.due);
                action.data.old.due = d.toISOString().slice(0,10);
                break; 

            case 'action_add_attachment_to_card':
                if (action.data.attachment.previewUrl) {
                    action.display.translationKey = "action_add_attachment_to_card_image"
                } else {
                    action.display.translationKey = "action_add_attachment_to_card_file"
                }
                break; 
        }

        return action.display.translationKey;
    }
}

module.exports = Handler;
