//'use strict';
var http = require('http');
var util = require('util');
var logger = require("./log.js")
var Handler = require('./handler.js'); 

function TrelloWebhookServer () {
    this.init = function (){
        try {
            require('../config/config.js');
            process.AppConfig.PROJECT_ROOT = process.cwd() + "/";
            return this;
        } catch (e) {
           console.log("ERROR, the server could not start, please copy the config.example.js to config.js and set it correctly. more information please see the README.MD file.")
           process.exit(1);
        }
    };

    this.start_http_server = function () {
        logger.info("TrelloWebhookServer started!");
        const httpServer = http.createServer();
        const TrelloWebhookServer = require('@18f/trello-webhook-server');
    
        let modelid_to_trelloWHServer = {};
        for(let trello_model_id in process.AppConfig.MODELID_SUBSCRIPTIONS){
            let trelloWHServer = new TrelloWebhookServer({
                server: httpServer,
                hostURL: process.AppConfig.TRELLO_WEBHOOK_URL,
                apiKey: process.AppConfig.TRELLO_API_KEY,
                apiToken: process.AppConfig.TRELLO_API_TOKEN,
                clientSecret: process.AppConfig.TRELLO_CLIENT_SECRET
            });
            modelid_to_trelloWHServer[trello_model_id] = trelloWHServer;
        }
    
        httpServer.listen(process.AppConfig.PORT, () => { 
            for(let trello_model_id in modelid_to_trelloWHServer){
                let trelloWHServer = modelid_to_trelloWHServer[trello_model_id];
                trelloWHServer.start(trello_model_id).then(webhookID => {
                    trelloWHServer.on('data', event => {
                         //dump(event.action);
                        let handler = new Handler(event.action, process.AppConfig.PROJECT_ROOT + "app/views/", 
                            process.AppConfig.MODELID_SUBSCRIPTIONS[trello_model_id]); 
                        handler.handle();
                    });
                }).catch(e => {
                    console.log('Error getting Trello webhook');
                    console.log(e);
                })
            }
    
        });
    };


    function dump(obj) {
        console.log(util.inspect(obj, false, null));
    }

}


module.exports = TrelloWebhookServer;
