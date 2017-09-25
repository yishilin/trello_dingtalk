let action = {
    id: '59c4d6c6a2d0f8df05a48572',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        listAfter: {
            name: 'In progress',
            id: '59ba22273ab0a8bf8464bcba'
        },
        listBefore: {
            name: 'Start',
            id: '59ba221c65c7c5ef917c9d01'
        },
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        card: {
            shortLink: '0HgqL50l',
            idShort: 6,
            name: 'favicon',
            id: '59c09cf2e9288955b7c076e2',
            idList: '59ba22273ab0a8bf8464bcba'
        },
        old: {
            idList: '59ba221c65c7c5ef917c9d01'
        }
    },
    type: 'updateCard',
    date: '2017-09-22T09:24:22.058Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_move_card_from_list_to_list',
        entities: {
            card: {
                type: 'card',
                idList: '59ba22273ab0a8bf8464bcba',
                id: '59c09cf2e9288955b7c076e2',
                shortLink: '0HgqL50l',
                text: 'favicon'
            },
            listBefore: {
                type: 'list',
                id: '59ba221c65c7c5ef917c9d01',
                text: 'Start'
            },
            listAfter: {
                type: 'list',
                id: '59ba22273ab0a8bf8464bcba',
                text: 'In progress'
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
        "title": "{{action.memberCreator.fullName}} 移动卡片",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 将卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 从 [{{action.display.entities.listBefore.text}}] 移动到了 [{{action.display.entities.listAfter.text}}]\n\n" + 
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
