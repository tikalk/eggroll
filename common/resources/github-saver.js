import data from './app.data.js';
import { Base64 } from '../../app/base64.js';

module.exports = function octoSave (story) {
	var config = {
	  message: 'Updating file from js',
	  content: Base64.encode(storyToText(story))
	  // sha: '123456789abcdef', // the blob SHA
	  // branch: 'gh-pages'
	};
	var path = 'tests/' + story.feature.replace(/\s/gim, '') + '.feature';
	if (story.info && story.info.content) {
		config.sha = story.info.content.sha;
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
		var clauses = [
			{ key: 'given', prefix: 'Given ', plural: 'And ' },
			{ key: 'when', prefix: 'When ', plural: 'And ' },
			{ key: 'then', prefix: 'Then ', plural: 'And ' }
		];
		text.push('\t' + 'Scenario: ' + scenario.name + '\n');
		
		clauses.forEach(function (clause) {
			scenario[clause.key].forEach(function (prefix, index) {
				prepareClause(prefix, index, clause.prefix, clause.plural);
			})
		})
		// scenario.given.forEach(function (given, index) {
		// 	prepareClause(given, index, 'Given ', 'And ');
		// });
		// scenario.when.forEach(function (when, index) {
		// 	prepareClause(when, index, 'When ', 'And ');
		// });
		// scenario.then.forEach(function (then, index) {
		// 	prepareClause(then, index, 'Then ', 'And ');
		// });
	});

	function prepareClause (clause, index, prefix, pluralPrefix) {
		var finalPrefix = index === 0 ? prefix : pluralPrefix;
		text.push('\t\t' + finalPrefix + clause + '\n');
	}
	return text.join('');
}