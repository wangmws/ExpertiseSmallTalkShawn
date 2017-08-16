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
 *
 * @author Eyal Cohen
 */

'use strict';

const storage = require('./storage');
const logger = require('./logger');

function resolve(request, response) {
  // Return the application context in the response.
  Object.assign(response.context, {application: request.context.application});
}

function restore(request, cb) {
  if (cb) {
    storage.read(request.context.user.id).then(value => {
      //logger.info(`read [${userId}]: ` + JSON.stringify(value));
      cb(null, value);
      // cb(null, Object.assign(
      //   {attributes: []}, data
      // ));
    }).catch(err => {
      cb(err);
    });
  }
}

function store(request, value, cb) {
  if (cb) {
    storage.write(request.context.user.id, value).then(() => {
      //logger.info(`write [${userId}]: ` + JSON.stringify(value));
      cb();
    }).catch(err => {
      cb(err);
    });
  }
}

module.exports = {
  resolve: resolve,
  restoreBeforeRequest: restore,
  storeAfterResponse: store
};
