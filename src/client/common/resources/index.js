var AreasFilter = require('./areas.filter.service');

module.exports = require('angular')
	.module('ki.resources', [])
	.factory('AreasFilter', AreasFilter)
	.name;