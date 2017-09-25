let action = {
    id: '59c4af0af8291fdc592a21ae',
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
            name: 'we need to support the wechat login our system，修改',
            id: '59ba223e702cf184fe0a2571'
        },
        attachment: {
            url: 'https://gw.alicdn.com/tfs/TB16Y40SVXXXXXSXXXXXXXXXXXX-390-80.png',
            name: 'photo.jpg',
            id: '59c4af0af8291fdc592a21aa',
            edgeColor: '#ecdcc4',
            previewUrl: 'https://gw.alicdn.com/tfs/TB16Y40SVXXXXXSXXXXXXXXXXXX-390-80.png',
            previewUrl2x: 'https://gw.alicdn.com/tfs/TB16Y40SVXXXXXSXXXXXXXXXXXX-390-80.png'
        }
    },
    type: 'addAttachmentToCard',
    date: '2017-09-22T06:34:50.956Z',
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
                previewUrl2x: 'https://trello-attachments.s3.amazonaws.com/59ba223e702cf184fe0a2571/1200x1600/0ee1367d2f9e2563237615ec3667cc0a/photo.jpg',
                previewUrl: 'https://trello-attachments.s3.amazonaws.com/59ba223e702cf184fe0a2571/600x800/2fc924ddac3d96c3987d88a48266dab5/photo.jpg',
                edgeColor: '#ecdcc4',
                id: '59c4af0af8291fdc592a21aa',
                link: true,
                text: 'photo.jpg',
                url: 'https://trello-attachments.s3.amazonaws.com/59ba2211902ef869403d072e/59ba223e702cf184fe0a2571/2fc03cc39c4825a50552b002247d997a/photo.jpg'
            },
            attachmentPreview: {
                type: 'attachmentPreview',
                originalUrl: 'https://trello-attachments.s3.amazonaws.com/59ba2211902ef869403d072e/59ba223e702cf184fe0a2571/2fc03cc39c4825a50552b002247d997a/photo.jpg',
                previewUrl2x: 'https://trello-attachments.s3.amazonaws.com/59ba223e702cf184fe0a2571/1200x1600/0ee1367d2f9e2563237615ec3667cc0a/photo.jpg',
                previewUrl: 'https://trello-attachments.s3.amazonaws.com/59ba223e702cf184fe0a2571/600x800/2fc924ddac3d96c3987d88a48266dab5/photo.jpg',
                edgeColor: '#ecdcc4',
                id: '59c4af0af8291fdc592a21aa'
            },
            card: {
                type: 'card',
                id: '59ba223e702cf184fe0a2571',
                shortLink: 'Lc5n3U4v',
                text: 'we need to support the wechat login our system，修改'
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
         "title":"{{action.memberCreator.fullName}} 添加图片附件",
         "text": "#### {{action.memberCreator.fullName}} ({{action.memberCreator.username}}) 给卡片 [#{{action.data.card.idShort}} {{action.data.card.name}}](https://trello.com/c/{{action.data.card.shortLink}}) 添加图片附件:\n" +
                 "> [{{action.data.attachment.name}}]({{action.data.attachment.url}})\n\n" +
                 "> ![screenshot]({{action.data.attachment.previewUrl}})\n" +
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
