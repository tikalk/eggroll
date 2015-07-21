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
