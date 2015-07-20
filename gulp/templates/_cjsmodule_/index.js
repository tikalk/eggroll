// var area = require('./area.directive');
var _cjsmodule_Ctrl = require('./_cjsmodule_.ctrl');
var routes = require('./routes');

module.exports = require('angular')
    .module('area', [
    	'ui.router'
    ])
    .config(routes)
    // .directive('area', area)
    .controller('_cjsmodule_Ctrl', _cjsmodule_Ctrl);