/* @ngInject */
module.exports = function dashboardCtrl($stateParams, $sce) {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'DashboardCtrl';
    
    var views = {
        map: 'subnetview',
        list: 'subnetview',
        grid: 'subnetview',
        dashboard: 'dashboard'
    };
    var url = 'http://localhost:9081/unity/#';

    activate();

    function activate() {
        var iframeUrl = url;
        if ($stateParams.view) {
            iframeUrl += views[$stateParams.view];
        } else {
            iframeUrl += views.dashboard;
        }
        vm.url = $sce.trustAsResourceUrl(iframeUrl);
    }
}
