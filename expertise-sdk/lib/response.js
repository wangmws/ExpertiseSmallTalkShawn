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

const Card = require('./card');
const ErrorCodes = require('./response-codes');

function Response(callback) {
  this.callback = callback;
  this.response = {
    reject: false,
    error: ErrorCodes.ok,
    shouldEndSession: true,
    captureInput: false,
    speech: {
    },
    context: {
    }
  };
}

Response.prototype.say = function(text, selection = 'random') {
  if (text instanceof Array) {
    if (typeof selection === 'string') {
      switch (selection) {
      case 'random':
        selection = Math.floor(Math.random() * text.length);
      break;
      default:
        selection = 0;
      break;
    }
    }
    this.response.speech.text = text[selection];
  } else {
    if (this.response.speech.text) {
      this.response.speech.text = this.speech.text + ' ' + text;
    } else {
      this.response.speech.text = text;
    }
  }
  return this;
};

Response.prototype.expressiveness = function(expressiveness = 'normal') {
  this.response.speech.expressiveness = expressiveness;
  return this;
};

Response.prototype.card = function(type, title, subtitle, content, response) {
  this.response.card = new Card(type, title, subtitle, content, response);
  return this;
};

Response.prototype.error = function(error) {
  this.response.error = error;
  return this;
};

Response.prototype.language = function(language) {
  this.response.speech.language = language;
  return this;
};

Response.prototype.shouldEndSession = function(end = true) {
  this.response.shouldEndSession = end;
  return this;
};

Response.prototype.captureInput = function(capture = true) {
  this.response.captureInput = capture;
  return this;
};

Response.prototype.releaseInput = function() {
  if (this.response.captureInput === true) {
    this.response.captureInput = false;
  }
  return this;
};

Response.prototype.reject = function() {
  this.response.reject = true;
  return this;
};

Response.prototype.from = function(state, intent) {
  this.state = state;
  this.intent = intent;
};

Response.prototype.next = function(state) {
  this.state = state;
};

Response.prototype.save = function() {
};

Response.prototype.send = function() {
  if (this.state === undefined) {
    this.callback(this.response);
  }
};

Response.prototype.end = function() {
  this.releaseInput();
  this.shouldEndSession(true);
  return this.send();
};

module.exports = Response;
