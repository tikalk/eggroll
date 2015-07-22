//define Vue.js app
var data = { 
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
	},
	repo: {}
};

start();

//////////////
function start () {
	github();

	return new Vue({
		el: '#app',
		data: data
	});


}

function github () {
	var params = QueryStringToJSON();
	var code = params.code && params.code.length? params.code : '';
	// authGithub(code);
	// return;
	data.github = new Octokat({
		username: '',
		password: ''
		// token: token
	});
	data.repo = data.github.repos('tikalk', 'eggroll')
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
		// type: 'POST',
		url: url,
		crossDomain: true,
		data: params.join('&'),
		jsonp: 'onAuthLoad',
		jsonpCallback: function (res) {
			console.log('res', res);
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

function octoSave (story) {
	var config = {
	  message: 'Updating file from js',
	  content: Base64.encode(storyToText(story))
	  // sha: '123456789abcdef', // the blob SHA
	  // branch: 'gh-pages'
	};
	var path = 'tests/' + story.feature.replace(/\s/gim, '') + '.feature';
	if (story.info && story.info.commit) {
		config.sha = story.info.commit.sha;
		path = story.info.content.path;
	}
	// data.user.current.contents('tests').read()
	// .then(function(contents) {
	//   var res = JSON.parse(contents);
	//   config.sha = res.length ? res[0].sha : '';

	story.inProgress = true;
	writeToGithub(path, config, story);
	// });
}

function writeToGithub (path, config, story) {
	data.user.current.contents(path).add(config)
	.then(function(info) {
	  console.log('File Updated. new sha is ', info.commit.sha);
	  story.inProgress = false;
	  story.path = path;
	  story.info = info;
	});
}

function storyToText (story) {
	var text = [];
	text.push('Feature: ' + story.feature + '\n\n');
	story.scenarios.forEach(function (scenario) {
		text.push('\t' + 'Scenario: ' + scenario.name + '\n');
		scenario.given.forEach(function (given, index) {
			var prefix = index === 0 ? 'Given ' : 'And ';
			text.push('\t\t' + prefix + given + '\n');
		});
		scenario.when.forEach(function (when, index) {
			var prefix = index === 0 ? 'When ' : 'And ';
			text.push('\t\t' + prefix + when + '\n');
		});
		scenario.then.forEach(function (then, index) {
			var prefix = index === 0 ? 'Then ' : 'And ';
			text.push('\t\t' + prefix + then + '\n');
		});
	});
	return text.join('');
}