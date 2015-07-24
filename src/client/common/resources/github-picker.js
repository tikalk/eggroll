Vue.component('github-picker', {
    props: ['data', 'repos', 'on-repo-pick'],
    template: '#github-picker',
    methods: {
    	createUser: function () {
    		this.githubUser = GithubUser(this.user);
    		this.fetchRepos();
    	},

    	fetchRepos: function () {
    		this.githubUser.repos().then(function (response) {
    			console.log('repose', response);
    			this.repos = response;
    		}.bind(this));
    	},

    	pickRepo: function (repo) {
    		this.onRepoPick(repo, this.user);
    	},

        signOutUser: function () {
            this.repos = undefined;
            this.user.name = '';
            this.user.password = '';
        }
    },
    directives: ['connect-github']
});


//////////////