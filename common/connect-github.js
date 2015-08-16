import Vue from 'vue';

module.exports = Vue.directive('connect-github', {
    bind: function () {
    	this.el.addEventListener('click', github);
    }
});


//////////////