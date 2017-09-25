let action = {
    id: '59c4b237298ff6358debc7c3',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        list: {
            name: 'Start',
            id: '59ba221c65c7c5ef917c9d01'
        },
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        card: {
            shortLink: '187gN10c',
            idShort: 8,
            name: 'posts-per-page',
            id: '59c09cf2e47f130db61915c2',
            closed: true
        },
        old: {
            closed: false
        }
    },
    type: 'updateCard',
    date: '2017-09-22T06:48:23.426Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_archived_card',
        entities: {
            card: {
                type: 'card',
                closed: true,
                id: '59c09cf2e47f130db61915c2',
                shortLink: '187gN10c',
                text: 'posts-per-page'
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
        "title": "{{action.memberCreator.fullName}} 存档卡片",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 存档卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}})\n\n" + 
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
