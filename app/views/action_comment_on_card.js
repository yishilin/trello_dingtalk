let action = {
    id: '59c4aaff67b2f36b4afad0c4',
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
            name: 'we need to support the wechat login our system',
            id: '59ba223e702cf184fe0a2571'
        },
        text: '测试一下'
    },
    type: 'commentCard',
    date: '2017-09-22T06:17:35.474Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_comment_on_card',
        entities: {
            contextOn: {
                type: 'translatable',
                translationKey: 'action_on',
                hideIfContext: true,
                idContext: '59ba223e702cf184fe0a2571'
            },
            card: {
                type: 'card',
                hideIfContext: true,
                id: '59ba223e702cf184fe0a2571',
                shortLink: 'Lc5n3U4v',
                text: 'we need to support the wechat login our system'
            },
            comment: {
                type: 'comment',
                text: '测试一下'
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
         "title":"{{action.memberCreator.fullName}} 添加评论",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 添加评论:\n" +
                 "> {{action.data.text}}\n\n" +
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
