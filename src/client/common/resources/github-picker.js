import Vue from 'vue';
import GithubUser from '../github-user.js';
import template from './github-picker.html';

module.exports = Vue.component('github-picker', {
    props: ['data', 'repos', 'on-repo-pick'],
    // data: function() {
    //     return {
    //         user: {
    //             name: '',
    //             password: ''
    //         }
    //     }
    // },
    template: template,
    methods: {
    	createUser: function () {
    		this.githubUser = GithubUser(this.user);
    		this.fetchRepos();
    	},

    	fetchRepos: function () {
    		this.githubUser.repos().then((response) => {
    			this.repos = response;
    		});
            // debugger;
            // this.githubUser.orgs();
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