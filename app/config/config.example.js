/*
 * Note: 
 * Do not edit this file directly!  Please copy it to your config.js and setup the values correctly.
 */

var config = {
    TRELLO_WEBHOOK_URL: 'http://www.example.com/your_trello_callback_url',
    PORT: 3000,
    TRELLO_API_KEY: '7f4gc7f8e29ebbme61z7c489176uuuuu',
    TRELLO_API_TOKEN: '3dac5b40149c693e09df409414f92e849be293f193a05905998cb96bd9cuuuuu',
    TRELLO_CLIENT_SECRET: '8868caa82839f1335e5efcd21fdc2c03675dfaca353d42ed26f8573uuuuuuuuu',
    MODELID_SUBSCRIPTIONS: { }
};
process.AppConfig = config;
var subscriptions = config.MODELID_SUBSCRIPTIONS;

var DDGroup_Token_PROJECT = '69e6583bcbe5beulu74bu908u4cue92b5u5eau836uc4au3f9a79c8euuuuuuuuu';
var DDGroup_Token_LOVE = '9427ucc2u49u9eau0e4uc1au26dud2u16du91eu21u55370u8ec75fuuuuuuuuuu';
var TRELLO_BOARDID_ITWORK = '59b0bbe14eeae045e3uuuuuu';
var TRELLO_BOARDID_TEST = '59ba2211902ef8694uuuuuuu';

subscriptions[TRELLO_BOARDID_ITWORK] = [DDGroup_Token_LOVE, DDGroup_Token_PROJECT];
subscriptions[TRELLO_BOARDID_TEST] = [DDGroup_Token_LOVE, DDGroup_Token_PROJECT];


