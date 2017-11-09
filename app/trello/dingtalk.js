var API = require('dingtalk-node');

function DingtalkAPI(config) {
    this.tokenCreateTime = null;
    this.token = null;
    this.tokenExpireTime = 7200 * 1000;

    this.api = new API({
        domain: 'https://oapi.dingtalk.com',
        cid: config.DINGTALK_CorpID,
        secret: config.DINGTALK_CorpSecret,
        redirect_uri: config.DINGTALK_redirect_uri
    });

    this.getToken = function() {
        let deferred = Promise.defer();

        if (this.token && this.tokenCreateTime && 
                    (Date.now() - this.tokenCreateTime < this.tokenExpireTime)) {
            deferred.resolve(this.token);
            return deferred.promise;
        } else {
            place_holder = this;
            this.api.getToken(function(err, json) {
                if (err) {
                    place_holder.token = null;
                } else {
                    place_holder.token = json.access_token
                    place_holder.tokenCreateTime = Date.now();
                }
                deferred.resolve(place_holder.token);
            })
        }
        return deferred.promise;
    }

    //const TRELLO_AgentID_IN_DINGTALK = '134010859';
    //userid_list: dingtalk user id array
    this.asyncsend_notification = function(
            msgcontent, 
            userid_list = ['014216536726090327'],
            trello_agentId_in_dingtalk = '134010859'){

        console.log("1===================");
        console.log(msgcontent);
        console.log("-------");
        console.log(userid_list);
        console.log("2===================");

        if (userid_list === undefined || userid_list.length == 0) {
            return;
        }

        msgcontent = JSON.stringify(msgcontent);
        var userid_list = encodeURIComponent(userid_list.join(','));

        this.getToken().then(function(access_token){ 
            var qs = require("querystring");
            var http = require("https");
            
            var options = {
              "method": "POST",
              "hostname": "eco.taobao.com",
              "port": null,
              "path": "/router/rest",
              "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "charset": "utf-8",
                "cache-control": "no-cache"
              }
            };
            
            var req = http.request(options, function (res) {
              var chunks = [];
            
              res.on("data", function (chunk) {
                chunks.push(chunk);
              });
            
              res.on("end", function () {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
              });
            });
            
            req.write(qs.stringify({ format: 'json',
              method: 'dingtalk.corp.message.corpconversation.asyncsend',
              partner_id: 'apidoc',
              session: access_token,
              timestamp: get_timestamp(),
              v: '2.0',
              agent_id: trello_agentId_in_dingtalk,
              msgcontent: msgcontent,
              msgtype: 'markdown',
              to_all_user: 'false',
              userid_list: userid_list}));
            req.end();
        });
    }


    //yyyy-MM-dd HH:mm:ss，时区为GMT+8
    //https://open-doc.dingtalk.com/docs/doc.htm?treeId=385&articleId=28915&docType=2
    function get_timestamp(){
        Number.prototype.padLeft = function(base,chr){
            var len = (String(base || 10).length - String(this).length)+1;
            return len > 0? new Array(len).join(chr || '0')+this : this;
        }
        
        var d = new Date(),
            timestamp_fmt = [d.getFullYear(), (d.getMonth()+1).padLeft(),
                       d.getDate().padLeft()].join('-') +' ' +
                      [d.getHours().padLeft(),
                       d.getMinutes().padLeft(),
                       d.getSeconds().padLeft()].join(':');
    
        return timestamp_fmt;
    } 

}

module.exports = DingtalkAPI;
