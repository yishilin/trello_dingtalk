let action = {
    id: '59c4b2bf8fc5d884f40be57e',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        card: {
            shortLink: '3ecCvFLj',
            idShort: 2,
            name: 'google account login',
            id: '59bba27f4c45ce10e36b831c'
        },
        idMember: '59b0d702c6f28006797a0a8d'
    },
    type: 'addMemberToCard',
    date: '2017-09-22T06:50:39.068Z',
    member: {
        id: '59b0d702c6f28006797a0a8d',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'iProduct',
        initials: 'I',
        username: 'iproduct1'
    },
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_added_member_to_card',
        entities: {
            member: {
                type: 'member',
                id: '59b0d702c6f28006797a0a8d',
                username: 'iproduct1',
                text: 'iProduct'
            },
            card: {
                type: 'card',
                id: '59bba27f4c45ce10e36b831c',
                shortLink: '3ecCvFLj',
                text: 'google account login'
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
        "title": "{{action.memberCreator.fullName}} 设置卡片负责人",
        "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 设置负责人:\n" +
            "> 负责人：{{action.member.fullName}} ({{action.member.username}})\n\n" + 
            "> ###### {{action.date}} \n"
    },
    "at": {
        "atMobiles": ["156xxxx8827", "189xxxx8325"],
        "isAtAll": false
    }
}
