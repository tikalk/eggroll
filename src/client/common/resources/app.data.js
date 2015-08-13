module.exports = { 
	story: {
		inProgress: false,
		path: '',
		info: {},
		feature: 'eggroll editor',
		scenarios: [
			{
				name: 'add new user story to github',
				given: ['I am not a developer', 'Not familiar with Cucumber', 'I Have Signed In to Github'],
				when: ['I use eGGroll Editor'],
				then: ['user stories are saved in Github with ease!']
			}
		]
	},
	user: {
		owner: {}
	},
	github: {
		user: {
			name: '',
			password: ''
		},
	},
	repo: {},
	currentRepo: {}
};