var Vue = require('../../../node_modules/vue/dist/vue.min.js'),
    httpReq = require('./../app/httpReq.js');
    require('./../app/base64.js');

var $_GET = [],
    $_TOKEN = '';

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

window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});
if($_GET.hasOwnProperty("code")){
   $_TOKEN = $_GET["code"];
}

function saveStory ( story ) {
    event.preventDefault();
    console.log("submit");
    var postParams = {
        path: 'tests',
        message: 'added a test by eggroll.io',
        contents: Base64.encode(JSON.stringify(story))
    }
    if($_TOKEN.length > 0){
        httpReq.ajaxPut(postParams, {}, "https://api.github.com/repos/tikalk/eggroll/contents/tests", $_TOKEN).then(function(data){
            console.log(data);
        });
    }else {
        alert("first login then save file");
    }
  return false;
}

// function saveStory (story) {
// 	var oReq = new XMLHttpRequest();
// 	oReq.onload = reqListener;
// 	oReq.open("put", "https://api.github.com/repos/tikalk/eggroll/contents/tests", true);
// 	oReq.send({
// 		path: 'tests',
// 		message: 'added a test by eggroll.io',
// 		contents: Base64.encode(JSON.stringify(story))
// 	});

// 	function reqListener (response) {
// 		console.log('response', response);
// 	}
// }
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
