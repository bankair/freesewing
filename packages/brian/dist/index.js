'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freesewing = require('freesewing');

var _freesewing2 = _interopRequireDefault(_freesewing);

var _config = require('../config/config');

var patternConfig = _interopRequireWildcard(_config);

var _pattern = require('freesewing/dist/lib/pattern');

var _back = require('./lib/back');

var _back2 = _interopRequireDefault(_back);

var _models = require('@freesewing/models');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var brian = new _freesewing2.default.pattern(patternConfig);

brian.draft = function () {
  var final = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  _back2.default.draft(brian, final);

  return brian;
};

exports.default = brian;

// This is not for inclusion in production

console.log(_models.manSize38);
brian.settings.measurements = _models.manSize38;

brian.draft();
console.log(brian.parts.backBlock.points);