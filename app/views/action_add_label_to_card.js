let action = 
{ id: '59c8bab5de80a7a7dc9ed69d',
  idMemberCreator: '5949c3408602f237c1611a36',
  data:
   { label: { color: 'green', name: '中国', id: '59ba22126c4e8a17ae668fbd' },
     board:
      { shortLink: 'aglQ3REw',
        name: '测试',
        id: '59ba2211902ef869403d072e' },
     card:
      { shortLink: 'oL7jN9Xg',
        idShort: 3,
        name: 'IT 门户',
        id: '59c09cf1ce432a9b2febcbaa' },
     text: '中国',
     value: 'green' },
  type: 'addLabelToCard',
  date: '2017-09-25T08:13:41.942Z',
  memberCreator:
   { id: '5949c3408602f237c1611a36',
     avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
     fullName: 'Rick',
     initials: 'R',
     username: 'needfaster' },
  display:
   { translationKey: 'action_add_label_to_card',
     entities:
      { label: { type: 'label', color: 'green', text: '中国' },
        card:
         { type: 'card',
           id: '59c09cf1ce432a9b2febcbaa',
           shortLink: 'oL7jN9Xg',
           text: 'IT 门户' },
        memberCreator:
         { type: 'member',
           id: '5949c3408602f237c1611a36',
           username: 'needfaster',
           text: 'Rick' } } } }


module.exports = 
{
    "msgtype": "markdown",
     "markdown": {
         "title":"{{action.memberCreator.fullName}} 添加标签",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 添加标签:\n\n" +
                 "> 标签: {{action.data.label.color}}/{{action.data.label.name}}\n" +
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
