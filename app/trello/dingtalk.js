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
    this.asyncsend_notification = function( dingMsgJson, 
            trello_agentId_in_dingtalk = '134010859'){

        let userid_list  = get_dinguserids_by(dingMsgJson.at.atMobiles);
        if (userid_list === undefined || userid_list.length == 0) {
            return;
        }

        msgcontent = JSON.stringify(dingMsgJson.markdown);
        userid_list = encodeURIComponent(userid_list.join(','));

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

    //return: ['014216536726090327'],
    function get_dinguserids_by(target_mobiles) {
        /* 
         * TODO
         API = new DingtalkAPI(config);
         API.api.userList({department_id: 40641196}, function(err, res) {
            ding_users_in_dep = res.userlist.map(function(x) { return {
                "mobile": x.mobile,
                "name": x.name,
                "userid": x.userid 
            }; }); 
        })
        */
        
        ding_users_in_dep = [ 
          { mobile: '15101155482', name: '柯钢', userid: 'kegang' },
          { mobile: '18600427612', name: '张雅峰', userid: 'zhangyfk' },
          { mobile: '18910562597', name: '赵刚刚', userid: 'zhaogg' },
          { mobile: '18910562544',
            name: '赵苗苗',
            userid: '066933530335872533' },
          { mobile: '15010283641',
            name: '张春艳',
            userid: '112210682324246286' },
          { mobile: '15801672342',
            name: '俞丽丽',
            userid: '015315424320289534' },
          { mobile: '13301189821',
            name: '易石林',
            userid: '014216536726090327' },
          { mobile: '18656959808',
            name: '王任翔',
            userid: '010405294529084932' },
          { mobile: '13681587146',
            name: '宋方华',
            userid: '066933222523349632' },
          { mobile: '18910562723',
            name: '穆琳琳',
            userid: '066864444431033126' },
          { mobile: '15801150718', name: '吕炎', userid: '0669406738696089' },
          { mobile: '18910562760',
            name: '刘木春',
            userid: '066866092821041173' },
          { mobile: '18801488690', name: '李帅', userid: 'lishuaic' },
          { mobile: '18656959890', name: '梁亮', userid: '0669553801849485' },
          { mobile: '15840211528', name: '何萍', userid: '0669400050663384' },
          { mobile: '13683279203',
            name: '郭晓伟',
            userid: '085820564636486361' },
          { mobile: '13693537625',
            name: '陈娟',
            userid: '11221336221215703' } ]
    
        ts = ding_users_in_dep.filter(function(x){ return target_mobiles.indexOf(x.mobile) > -1 });
        ding_userids = ts.map(function(x) { return x.userid; }); 
        return ding_userids; 
    }
    

}

module.exports = DingtalkAPI;
