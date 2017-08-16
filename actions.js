/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// The expertise handler
const {handler} = require('./expertise-sdk');

// Expertise translations map
var languageResource = {
  'en-US': {
    'translation': {
    }
  },
  'de-DE': {
    'translation': {
    }
  }
};

// Expertise states
const STATES = {
};

// Actions for DEFAULT state
var stateDefaultActions = handler.createActionsHandler({

  'hello': (request, response) => {
    response.say('Receiving, over.').send();
  },

  'hello': (request, response) => {
    response.say(['How can I help you today',
      'Hi', 'Hello', 'How can I help'], 'random')
      .send();
  },

  'thanks': (request, response) => {
    response.say(['You welcome', 'No problem, that is what I am here for',
      'You welcome, I am always happy to help', 'My pleasure', 'Any time',
      'No problem, I am happy to help'], 'random')
      .send();
  },

  'goodbye': (request, response) => {
    response.say(['Goodbye', 'Okay, bye for now', 'Bye for now'], 'random')
      .send();
  },

  'marry-me': (request, response) => {
    response.say(['I\'m flattered, but surely you can find a better match than a virtual assistant',
       'Set a date and I am ready'], 'random')
      .send();
  },

  'how-are-you': (request, response) => {
    response.say(['Wonderful as always. Thanks for asking.',
       'Lovely, thanks.'], 'random')
      .send();
  },

  'do-you': (request, response) => {
    switch (request.attributes.doYou) {
      case 'love':
        response.say(['I might need to learn a bit more about that.',
          'No time for romance. My work keeps me occupied enough.', 'Sometimes.'], 'random');
        break;
      case 'hate':
        break;
      case 'like':
        response.say(['Yes, that is great!', 'I like it very much'], 'random');
        break;
      case 'drink':
        response.say(['No, but if you\'re feeling thirsty I can easily find you a nearby bar. Just ask.'],
          'random');
        break;
    }
    response.send();
  },

  'you-are': (request, response) => {
    switch (request.attributes.youAre) {
      case 'drunk':
        response.say(['I most certainly am not.', 'I don\'t drink.',
          'No way. I never touch the stuff.'], 'random');
        break;
      case 'bad':
        response.say(['I\'m sorry you think so. but it is not true'], 'random');
        break;
      case 'funny':
        response.say(['Thanks. I like people who can enjoy a good laugh. Ask me, I can tell you a joke.'],
          'random');
        break;
      case 'happy':
        response.say(['I like to keep a positive attitude.'], 'random');
        break;
      case 'my friend':
        response.say(['Sure. I always enjoy talking to you'], 'random');
        break;
    }
    response.send();
  },

  'unhandled': (request, response) => {
    response.say(handler.t([DEFAULT_1, DEFAULT_2, DEFAULT_3, DEFAULT_4])).send();
  }

});

module.exports = () => {
  // Register language translations.
  handler.registerLanguages(languageResource);
  // Register state actions
  handler.registerActionsHandler(stateDefaultActions);
};
