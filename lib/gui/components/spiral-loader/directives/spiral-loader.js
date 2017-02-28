/*
 * Copyright 2017 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const _ = require('lodash');

/**
 * @summary SpiralLoader directive
 * @function
 * @public
 *
 * @description
 * Spiral loader
 *
 * @returns {Object}
 *
 * @example
 * <spiral-loader path="path/to/icon.svg" width="40px" height="40px"></spiral-loader>
 */
module.exports = () => {
  return {
    templateUrl: './components/spiral-loader/templates/spiral-loader.tpl.html',
    replace: true,
    restrict: 'E',
    scope: {
      title: '@',
      subtitle: '@',
    },
    link: (scope, element) => {
      return undefined;
    }
  };
};