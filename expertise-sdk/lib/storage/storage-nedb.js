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

var Datastore = require('nedb');
const db = Promise.promisifyAll(new Datastore(
  {filename: 'db/context', autoload: true})
);

const logger = require('../logger');

const write = (key, value) => {
  logger.debug(`Write to ${key}`);
  return db.insertAsync({key: key, value: value});
};

const read = key => {
  logger.debug(`Read from ${key}`);
  return db.findOneAsync({key: key}).then(record => {
    return Promise.resolve((record && record.value) || {});
  });
};

const remove = key => {
  return db.removeAsync({key: key});
};

module.exports = {
  read: read,
  write: write,
  remove: remove
};
