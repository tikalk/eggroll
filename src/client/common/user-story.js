var UserStoryFactory = {
	scenario: function () {
		return {
			name: '',
			given: [''],
			when: [''],
			then: ['']
		}
	},
	given: function () {
		return '';
	}
}

function saveStory (story) {
	var oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	oReq.open("put", "https://api.github.com/repos/tikalk/eggroll/contents/tests", true);
	oReq.send({
		path: 'tests',
		message: 'added a test by eggroll.io',
		contents: Base64.encode(JSON.stringify(story))
	});

	function reqListener (response) {
		console.log('response', response);
	}
}
Vue.component('user-story', {
    props: ['story'],
    template: '#user-story',
    methods: {
    	addScenario: function () {
    		this.story.scenarios.push(UserStoryFactory.scenario());
    		setTimeout(function () {
	    		componentHandler.upgradeAllRegistered();
    		}, 1000)
    	},

    	addGiven: function (scenario) {
    		scenario.given.push(UserStoryFactory.given());
    		componentHandler.upgradeAllRegistered();
    	},
    	saveStory: function () {
    		saveStory(this.story);
    	}
    }
});
