/* 
钉钉开放平台 - 文档中心: https://open-doc.dingtalk.com/docs/doc.htm?treeId=257&articleId=105735&docType=1

{
    "msgtype": "markdown",
     "markdown": {
         "title":"<%= action.type %>",
         "text": "#### 杭州天气 @156xxxx8827\n" +
                 "> 9度，西北风1级，空气良89，相对温度73%\n\n" +
                 "> ![screenshot](http://image.jpg)\n"  +
                 "> ###### 10点20分发布 [天气](http://www.thinkpage.cn/) \n"
     },
    "at": {
        "atMobiles": [
            "156xxxx8827", 
            "189xxxx8325"
        ], 
        "isAtAll": false
    }
}
*/

let action =
{
  "id": "55762ba23457e0e95181e793",
  "idMemberCreator": "50e853a3a98492ed05002257",
  "data": {
    "board": {
      "shortLink": "vfdBxuwr",
      "name": "idéias",
      "id": "5387e0a7e10724f99ecd0766"
    },
    "card": {
      "shortLink": "SeJdnhN9",
      "idShort": 261,
      "name": "instructions -",
      "id": "55130bdb964da5dac6c3eab3"
    },
    "attachment": {
      "url": "https://gw.alicdn.com/tfs/TB16Y40SVXXXXXSXXXXXXXXXXXX-390-80.png",
      "name": "sprites.svg.undefined",
      "id": "55762ba23457e0e95181e792"
    }
  },
  "type": "addAttachmentToCard",
  "date": "2015-06-08T23:56:18.620Z",
  "memberCreator": {
    "id": "50e853a3a98492ed05002257",
    "avatarHash": "d2f9f8c8995019e2d3fda00f45d939b8",
    "fullName": "Giovanni Parra",
    "initials": "GP",
    "username": "fiatjaf"
  }
};

module.exports = 
{
    "msgtype": "markdown",
     "markdown": {
         "title":"{{action.memberCreator.fullName}} 添加附件",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 添加图片附件：\n" +
                 "> [{{action.data.attachment.name}}]({{action.data.attachment.url}}\n\n" +
                 "> ![screenshot]({{action.data.attachment.url}})\n"  +
                 "> ###### {{action.date}} \n"
     },
    "at": {
        "atMobiles": [
            "156xxxx8827", 
            "189xxxx8325"
        ], 
        "isAtAll": false
    }
}
