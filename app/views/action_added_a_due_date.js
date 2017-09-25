let action = {
    id: '59c4ad24882364c473c0827a',
    idMemberCreator: '5949c3408602f237c1611a36',
    data: {
        list: {
            name: 'Done!',
            id: '59ba222f8e1642a902f2324b'
        },
        board: {
            shortLink: 'aglQ3REw',
            name: '测试',
            id: '59ba2211902ef869403d072e'
        },
        card: {
            shortLink: 'Lc5n3U4v',
            idShort: 1,
            name: 'we need to support the wechat login our system，修改',
            id: '59ba223e702cf184fe0a2571',
            due: '2017-09-28T06:26:33.000Z'
        },
        old: {
            due: null
        }
    },
    type: 'updateCard',
    date: '2017-09-22T06:26:44.363Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_added_a_due_date',
        entities: {
            card: {
                type: 'card',
                due: '2017-09-28T06:26:33.000Z',
                id: '59ba223e702cf184fe0a2571',
                shortLink: 'Lc5n3U4v',
                text: 'we need to support the wechat login our system，修改'
            },
            date: {
                type: 'date',
                date: '2017-09-28T06:26:33.000Z'
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
         "title":"{action.memberCreator.fullName}} 设置截止日期",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 设置截止日期:\n" +
                 "> 截止日期：{{action.data.card.due}}\n\n" +
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
