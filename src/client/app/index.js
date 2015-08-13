import Vue from 'vue';
import UserStory from '../common/user-story.js';
import data from '../common/resources/app.data.js';
import Octokat from 'octokat';
import ConnectGithub from '../common/connect-github.js';
import UserProfile from '../common/user-profile.js';
import GithubPicker from '../common/resources/github-picker.js';

start();

//////////////
function start () {
	github();

	//define the Vue.js app
	return new Vue({
		el: '#app',
		data: data,
		methods: {
			updateRepo: function (repo, user) {
				data.user = user;
				data.currentRepo = repo;
				github();
			}
		}
	});


}

function github () {
	var params = QueryStringToJSON();
	var code = params.code && params.code.length? params.code : '';
	// authGithub(code);
	// return;
	if (!data.user.name && !data.user.pass) {
		return;
	}
	data.github = new Octokat({
		username: data.user.name,
		password: data.user.password
		// token: token
	});
	data.repo = data.github.repos(data.user.name, data.currentRepo.name)
		.fetch()
		.then(function (repo) {
			data.user.owner = repo.owner;
			data.user.current = repo;
			console.log('repo', repo);
		})
}

function authGithub (code) {
	// var http = new XMLHttpRequest();
	var url = "https://github.com/login/oauth/access_token";
	// var params = "lorem=ipsum&name=binny";
	var params = [
		'client_id=03e206014038b281ea85',
		// 'redirect_uri=http://localhost:3000/index.html',
		'code=' + code,
		'client_secret=1eb32d50eb2654aa755a9f7b34c6de987cfc1b49',
	]
	jQuery.ajax({
		url: url,
		// type: 'POST',
		dataType: 'jsonp',
		// crossDomain: true,
		data: params.join('&'),
		// jsonp: 'onAuthLoad',
		success: function (res) {
			console.log('success', res);
		},
		error: function (res) {
			console.log('error', res);
		}
	})
	// http.open("POST", url, true);

	//Send the proper header information along with the request
	// http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// http.setRequestHeader("Content-length", params.length);
	// http.setRequestHeader("Connection", "close");

	// http.onreadystatechange = function() {//Call a function when the state changes.
	//     if(http.readyState == 4 && http.status == 200) {
	//         alert(http.responseText);
	//     }
	// }
	// http.send(params.join('&'));
	
}

function onAuthLoad (res) {
	console.log('res', res);
}
function QueryStringToJSON() {            
    var pairs = location.search.slice(1).split('&');
    
    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));
}