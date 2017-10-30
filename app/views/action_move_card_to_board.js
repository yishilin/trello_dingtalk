//From Personal to Test
let action =
{ id: '59f68aa82792b9470e709ed3',
  idMemberCreator: '5949c3408602f237c1611a36',
  data:
   { list: { name: 'Backlog', id: '59ba221c65c7c5ef917c9d01' },
     boardSource: { id: '59cda17e5e214193f67d5e43' },
     board:
      { shortLink: 'aglQ3REw',
        name: 'Test',
        id: '59ba2211902ef869403d072e' },
     card:
      { shortLink: 'VYXJQA0F',
        idShort: 17,
        name: '雷氏红烧肉做法',
        id: '59d4b9add8e25500009d5a7f' } },
  type: 'moveCardToBoard',
  date: '2017-10-30T02:12:56.477Z',
  display:
   { translationKey: 'action_move_card_to_board',
     entities:
      { board:
         { type: 'board',
           id: '59cda17e5e214193f67d5e43',
           text: 'Personal',
           shortLink: 'GxThQYdd' },
        card:
         { type: 'card',
           id: '59d4b9add8e25500009d5a7f',
           shortLink: 'VYXJQA0F',
           text: '雷氏红烧肉做法' },
        memberCreator:
         { type: 'member',
           id: '5949c3408602f237c1611a36',
           username: 'needfaster',
           text: 'Rick' } } },
  memberCreator:
   { id: '5949c3408602f237c1611a36',
     avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
     fullName: 'Rick',
     initials: 'R',
     username: 'needfaster' } }


module.exports = {
    "msgtype": "markdown",
    "markdown": {
        "title": "{{action.memberCreator.fullName}} 移入卡片到 {{action.data.board.name}}",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 将卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 移入到 [{{action.data.board.name}} / {{action.data.list.name}}]\n" + 
            "> ###### 卡片原来位置：[{{action.display.entities.board.text}}] Board \n\n\n" +
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
