var tcProps = {};
var optionalPlugins = [];
var optionalReporters = [];
// var browsers = ['Chrome'];
var browsers = ['PhantomJS'];

module.exports = function(config) {
	config.set({
		basePath: './src/client',
		browsers: browsers,
		frameworks: ['browserify', 'jasmine'],
		files: [
			//3rd party
			'../../.tmp/vendors.js',
			'../../.tmp/bundle**.js',
			'../../.tmp/templates.mdl.js',
			
			// ngmock should be loaded with require on each spec
			// '../../node_modules/angular-mocks/angular-mocks.js',
			//app-specific
			'app/**/*.html',
			'common/**/*.html',
			
			'app/**/*spec.js',
			'!app/login/**/*spec.js',
			'common/**/*spec.js',
			'../server/**/*mock.json'
	    ],
	    autoWatch: true,
        preprocessors: {
	        'app/**/*.html': ['ng-html2js'],
	        'common/**/*.html': ['ng-html2js'],
	        '../server/**/*mock.json': ['json_fixtures'],
	        'app/**/*spec.js': [ 'browserify' ]
	    },
	    ngHtml2JsPreprocessor: {
	        moduleName: 'templates'
	    },
	    jsonFixturesPreprocessor: {
	      // strip this from the file path \ fixture name
	      stripPrefix: '.+mocks/',
	      // strip this to the file path \ fixture name
	      // prependPrefix: 'mock/',
	      // change the global fixtures variable name
	      variableName: 'mocks'
	    },
	    browserify: {
	    	debug: true,
	    	transform: []
	    },
	    plugins : [
	        'karma-phantomjs-launcher',
	        'karma-chrome-launcher',
	        'karma-jasmine',
	        'karma-ng-html2js-preprocessor',
	        'karma-html2js-preprocessor',
	        'karma-mocha-reporter',
	        'karma-json-fixtures-preprocessor',
	        'karma-browserify'
	    ].concat(optionalPlugins),
	    reporters: ['mocha'].concat(optionalReporters)
  });
};
