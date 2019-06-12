'use strict';
const dialogflow = require('dialogflow');
const structjson = require('./structjson.js');
const config = require('../config/keys');

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key:  config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});
const sessionPath = sessionClient.sessionPath(projectId, sessionId);


module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports;
        console.log("in the eventQuery--->"+sessionPath+"--->"+text)
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        console.log("About to Detect Intent--->")
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
        
    },

    eventQuery: async function(event, parameters = {}) {
        let self = module.exports;
        console.log("in the eventQuery--->"+sessionPath+"--->"+event)
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
                    languageCode: languageCode,
                },
            }
        };
        console.log("About to wait for the detect intent")
        try {
            let responses = await sessionClient.detectIntent(request);
            responses = await self.handleAction(responses);
        
        } catch (err) {
            console.error('ERROR:', err);
        }
        return responses;
    },


    handleAction: function(responses){
        return responses;
    },


}