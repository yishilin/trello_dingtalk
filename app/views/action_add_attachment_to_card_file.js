let action = {
    id: '59c4b1871182e142a77862d8',
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
            shortLink: '3ecCvFLj',
            idShort: 2,
            name: 'google account login',
            id: '59bba27f4c45ce10e36b831c'
        },
        attachment: {
            url: 'https://trello-attachments.s3.amazonaws.com/59ba2211902ef869403d072e/59bba27f4c45ce10e36b831c/f07dd2c78158683988f55e86bd01dc94/review-10.8.md',
            name: 'review-10.8.md',
            id: '59c4b1871182e142a77862d4'
        }
    },
    type: 'addAttachmentToCard',
    date: '2017-09-22T06:45:27.342Z',
    memberCreator: {
        id: '5949c3408602f237c1611a36',
        avatarHash: 'a9e4dd75d68da698cb6530cc5c76a4d4',
        fullName: 'Rick',
        initials: 'R',
        username: 'needfaster'
    },
    display: {
        translationKey: 'action_add_attachment_to_card',
        entities: {
            attachment: {
                type: 'attachment',
                id: '59c4b1871182e142a77862d4',
                link: true,
                text: 'review-10.8.md',
                url: 'https://trello-attachments.s3.amazonaws.com/59ba2211902ef869403d072e/59bba27f4c45ce10e36b831c/f07dd2c78158683988f55e86bd01dc94/review-10.8.md'
            },
            attachmentPreview: {
                type: 'attachmentPreview',
                originalUrl: 'https://trello-attachments.s3.amazonaws.com/59ba2211902ef869403d072e/59bba27f4c45ce10e36b831c/f07dd2c78158683988f55e86bd01dc94/review-10.8.md',
                id: '59c4b1871182e142a77862d4'
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


module.exports = 
{
    "msgtype": "markdown",
     "markdown": {
         "title":"{{action.memberCreator.fullName}} 添加文件附件",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 添加文件附件:\n" +
                 "> [{{action.data.attachment.name}}]({{action.data.attachment.url}})\n\n" +
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
