let action = {
    id: '59c4ac9cc2e407b6b46aa02b',
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
            id: '59ba223e702cf184fe0a2571',
            name: 'we need to support the wechat login our system，修改'
        },
        old: {
            name: 'we need to support the wechat login our system'
        }
    },
    type: 'updateCard',
    date: '2017-09-22T06:24:28.860Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_renamed_card',
        entities: {
            card: {
                type: 'card',
                id: '59ba223e702cf184fe0a2571',
                shortLink: 'Lc5n3U4v',
                text: 'we need to support the wechat login our system，修改'
            },
            name: {
                type: 'text',
                text: 'we need to support the wechat login our system'
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
         "title":"{{action.memberCreator.fullName}} 修改卡片标题",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 修改了 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 卡片标题：\n" +
                 "> 原标题：{{action.data.card.name}}\n\n" +
                 "> 新标题：{{action.data.old.name}}\n\n" +
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
