let action = {
    id: '59c4b08b6063c1c413358843',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        list: {
            name: 'Done!',
            id: '59ba222f8e1642a902f2324b'
        },
        card: {
            shortLink: 'Lc5n3U4v',
            idShort: 1,
            id: '59ba223e702cf184fe0a2571'
        }
    },
    type: 'deleteCard',
    date: '2017-09-22T06:41:15.913Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_delete_card',
        entities: {
            idCard: {
                type: 'text',
                text: 1
            },
            list: {
                type: 'list',
                id: '59ba222f8e1642a902f2324b',
                text: 'Done!'
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
module.exports = {
    "msgtype": "markdown",
    "markdown": {
        "title": "{{action.memberCreator.fullName}} 删除卡片",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 删除了卡片 #{{action.data.card.idShort}} ID: {{action.data.card.id}}:\n" +
            "> 位于 Board: {{action.data.board.name}} / List: {{action.data.list.name}}\n\n" + 
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
