'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
  'LaunchRequest': function () {
      this.emit('GetNewFactIntent');
  },
  'intentName': function () {
      const factArr = data;
      const factIndex = Math.floor(Math.random() * factArr.length);
      const randomFact = factArr[factIndex];

      this.response.cardRenderer(cardName, cardBody, cardImage);
      this.response.speak(response);
      this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function () {
      const speechOutput = HELP_MESSAGE;
      const reprompt = HELP_REPROMPT;

      this.response.speak(response).listen(reprompt);
      this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
      this.response.speak(STOP_MESSAGE);
      this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
      this.response.speak(STOP_MESSAGE);
      this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};