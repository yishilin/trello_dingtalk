function Handler(action, view_root, dingtalk_tokens) {
    this.view_root = view_root;
    this.action = action;
    this.dingtalk_tokens = dingtalk_tokens;
    this.translationKey = filter(action);
    
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
                let send2dingtalk = require('./sender.js');
                send2dingtalk(dingMsgJson, this.dingtalk_tokens);
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
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
    };


    function filter (action) {
        d = new Date(action.date);
        action.date = (new Date(d.toISOString())).toLocaleString();

        if ('action_added_a_due_date' == action.display.translationKey) {
            d = new Date(action.data.card.due);
            action.data.card.due = d.toISOString().slice(0,10);
        } 

        if ('action_changed_a_due_date' == action.display.translationKey) {
            d = new Date(action.data.card.due);
            action.data.card.due = d.toISOString().slice(0,10);

            d = new Date(action.data.old.due);
            action.data.old.due = d.toISOString().slice(0,10);
        }

        if ('action_add_attachment_to_card' == action.display.translationKey) {
            if (action.data.attachment.previewUrl) {
                return "action_add_attachment_to_card_image"
            } else {
                return "action_add_attachment_to_card_file"
            }
        }
        return action.display.translationKey;
    }
}

module.exports = Handler;
