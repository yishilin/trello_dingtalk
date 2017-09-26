let action = 
{ id: '59c9abc3b2ef6710815c02d5',
  idMemberCreator: '5949c3408602f237c1611a36',
  data:
   { list: { name: 'Start', id: '59ba221c65c7c5ef917c9d01' },
     board:
      { shortLink: 'aglQ3REw',
        name: '测试',
        id: '59ba2211902ef869403d072e' },
     card:
      { shortLink: '6ciHEM9w',
        idShort: 12,
        name: '唐朝好男人',
        id: '59c99e8cadb09bdd40ebe254',
        due: null },
     old: { due: '2017-09-27T01:21:44.717Z' } },
  type: 'updateCard',
  date: '2017-09-26T01:22:11.831Z',
  memberCreator:
   { id: '5949c3408602f237c1611a36',
     avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
     fullName: 'Rick',
     initials: 'R',
     username: 'needfaster' },
  display:
   { translationKey: 'action_removed_a_due_date',
     entities:
      { card:
         { type: 'card',
           due: null,
           id: '59c99e8cadb09bdd40ebe254',
           shortLink: '6ciHEM9w',
           text: '唐朝好男人' },
        memberCreator:
         { type: 'member',
           id: '5949c3408602f237c1611a36',
           username: 'needfaster',
           text: 'Rick' } } } }


module.exports = 
{
    "msgtype": "markdown",
     "markdown": {
         "title":"{{action.memberCreator.fullName}} 删除截止日期",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 删除了截止日期:\n" +
                 "> 原截止日期：{{action.data.old.due}} \n\n" +
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
