var Vue = require('../../../node_modules/vue/dist/vue.min.js'),
    httpReq = require('./httpReq.js');
    require('./base64.js');
    require('../../../node_modules/material-design-lite/material.min.js');
    require('../common/user-story.js');
    /* rquire style */
    // require('../../../node_modules/material-design-lite/material.min.css');
    // require('./../styles/styles.css');
    // require('./../styles/layout.css');


//define Vue.js app
var data = {
	story: {
		feature: 'eggroll editor',
		scenarios: [
			{
				name: 'add new one',
				given: ['i logged in with my github account', 'and i authorized eggroll'],
				when: ['i save a story'],
				then: ['i should get feature files in my repo']
			},
			{
				name: 'add new one',
				given: ['i logged in with my github account', 'and i authorized eggroll'],
				when: ['i save a story'],
				then: ['i should get feature files in my repo']
			}
		]
	}
};

start();

//////////////
function start () {
	return new Vue({
		el: '#app',
		data: data
	});
}
