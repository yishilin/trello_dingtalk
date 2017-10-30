//From Test to Personal
let action =
{ id: '59f68d8a252bfdeae64806d8',
  idMemberCreator: '5949c3408602f237c1611a36',
  data:
   { member: { name: 'Rick', id: '5949c3408602f237c1611a36' },
     list: { name: 'Backlog', id: '59ba221c65c7c5ef917c9d01' },
     boardTarget: { id: '59cda17e5e214193f67d5e43' },
     board:
      { shortLink: 'aglQ3REw',
        name: 'Test',
        id: '59ba2211902ef869403d072e' },
     card: { name: '雷氏红烧肉做法', id: '59d4b9add8e25500009d5a7f' } },
  type: 'moveCardFromBoard',
  date: '2017-10-30T02:25:14.936Z',
  display:
   { translationKey: 'action_move_card_from_board',
     entities:
      { board:
         { type: 'board',
           id: '59cda17e5e214193f67d5e43',
           text: 'Personal',
           shortLink: 'GxThQYdd' },
        card: { type: 'card', id: '59d4b9add8e25500009d5a7f', text: '雷氏红烧肉做法' },
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
        "title": "{{action.memberCreator.fullName}} 从 {{action.data.board.name}} 移出卡片",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 将卡片 [{{action.data.card.name}}](https://trello.com/c/{{action.data.card.id}}) 从 [{{action.data.board.name}} / {{action.data.list.name}}] 移出\n" + 
            "> ###### 卡片新位置：[{{action.display.entities.board.text}}] Board\n\n\n" +
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
