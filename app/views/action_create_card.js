let action = {
    id: '59c4b0fcd1284f424ed8ff53',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        list: {
            name: 'Start',
            id: '59ba221c65c7c5ef917c9d01'
        },
        card: {
            shortLink: 'a95F7d0i',
            idShort: 11,
            name: '添加',
            id: '59c4b0fcd1284f424ed8ff52'
        }
    },
    type: 'createCard',
    date: '2017-09-22T06:43:08.818Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_create_card',
        entities: {
            card: {
                type: 'card',
                id: '59c4b0fcd1284f424ed8ff52',
                shortLink: 'a95F7d0i',
                text: '添加'
            },
            list: {
                type: 'list',
                id: '59ba221c65c7c5ef917c9d01',
                text: 'Start'
            },
            memberCreator: {
                type: 'member',
                id: '5949c3408602f237c1611a36',
                username: 'needfaster',
                text: 'Rick'
            }
        }
    }
}


module.exports = 
{
    "msgtype": "markdown",
     "markdown": {
         "title":"{{action.memberCreator.fullName}} 创建卡片",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 创建了卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) \n\n" +
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
