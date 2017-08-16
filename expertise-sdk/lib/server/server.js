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

const SwaggerExpress = require('swagger-express-mw');
const swaggerUi = require('swagger-tools/middleware/swagger-ui');
const app = require('express')();
const morgan = require('morgan');
const logger = require('../logger');

module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  configDir: __dirname + '/config'
};

// REST logging
app.use(morgan('short', {
  'stream': {
    write: str => { logger.info(str.slice(0, -1)); }
  }
}));

SwaggerExpress.create(config, function(err, swaggerExpress) {

  if (err) { throw err; }

  // Add swagger-ui (This must be before swaggerExpress.register)
  app.use(swaggerUi(swaggerExpress.runner.swagger));

  // Redirect to swagger page
  app.get('/', (req, res) => res.redirect('/docs'));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  logger.info(`Start server on port ${port}`);
  app.listen(port);
});
