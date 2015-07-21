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
    	}
    }
});
