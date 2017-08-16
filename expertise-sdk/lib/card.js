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

function Card(type, title, subtitle, content, say) {
  this.type     = type || Card.SIMPLE;
  this.title    = title || '';
  this.subtitle = subtitle || '';
  this.content  = content || '';
  this.response = say;
}

// Card types
Card.prototype.SIMPLE = 'simple';

Card.prototype.type = function(type) {
  this.type = type;
  return this;
};

Card.prototype.title = function(title) {
  this.title = title;
  return this;
};

Card.prototype.subtitle = function(subtitle) {
  this.subtitle = subtitle;
  return this;
};

Card.prototype.say = function(response) {
  this.response = response;
  return this;
};

module.exports = Card;
