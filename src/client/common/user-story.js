import Vue from 'vue';
import octoSave from './resources/github-saver.js';
import Base64 from '../app/base64.js';

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
	octoSave(story);
	return;
	var params = QueryStringToJSON(location.search);
	if (!params.code) {
		return;
	}
	var token = 'access_token=' + params.code;
	var oReq = new XMLHttpRequest();
	oReq.onload = reqListener;
	// oReq.setRequestHeader('access_token', params.code);
	oReq.open("put", "https://api.github.com/repos/tikalk/eggroll/contents/tests?" + token, true);
	oReq.send({
		path: 'tests',
		message: 'added a test by eggroll.io',
		contents: Base64.encode(JSON.stringify(story))
	});

	function reqListener (response) {
		console.log('response', response);
	}
}
module.exports = Vue.component('user-story', {
    props: ['story'],
    template: '#user-story',
    methods: {
    	addScenario: function () {
    		this.story.scenarios.push(UserStoryFactory.scenario());
    		setTimeout(function () {
	    		componentHandler.upgradeAllRegistered();
    		}, 200)
    	},

    	addGiven: function (scenario) {
    		scenario.given.push(UserStoryFactory.given());
    		componentHandler.upgradeAllRegistered();
    	},
    	saveStory: function () {
    		saveStory(this.story);
    	},
    	isInProgress: function () {
    		return this.story.inProgress;
    	}
    }
});
