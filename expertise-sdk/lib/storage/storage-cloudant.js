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

const Promise = require('bluebird');
const Cloudant = require('cloudant');

const cloudant = Cloudant(process.env.CLOUDANT_URL);
const db = Promise.promisifyAll(cloudant.use(process.env.CLOUDANT_URL));

const logger = require('../logger');

const write = (userId, value, callback) => {
  logger.debug(`Write to ${userId}`);
  callback();
};

const read = (userId, callback) => {
  logger.debug(`Read from ${userId}`);
  callback();
};

module.exports.read = read;
module.exports.write = write;
