import Octokat from 'octokat';

module.exports = function GithubUser (user) {
	var octo;
	var octoUser;
	var service = {
		create: create,
		repos: repos,
		orgs: orgs
	};
	activate();

	return service;

	///////////////
	function activate () {
		create(user);
	}
	function create (user) {
		octo = new Octokat({
			username: user.name,
			password: user.password
		});
		octoUser = octo.users(user.name);
	}

	function repos () {
		return octoUser.repos.fetch();
	}

	function orgs () {
		return octo.user.repos.fetch({ sort: 'updated' });
	}
}

// module.exports = {
// 	create: create,
// 	repos: repos
// }