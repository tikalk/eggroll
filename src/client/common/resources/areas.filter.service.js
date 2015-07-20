/* @ngInject */
module.exports = function AreasFilter () {
	// subnet_relation
	var relations = [
    	{
    		name: 'Selected',
    		value: 'SELECTED'
    	},
    	{
    		name: 'Immediate Children',
    		value: 'DIRECT_CHILD'
    	},
    	{
    		name: 'All Children',
    		value: 'ANY_CHILD'
    	},
    	{
    		name: 'Area',
    		value: 'BY_TYPE',
    		params: {
	    		subnet_type: 'area'
    		}
    	},
    	{
    		name: 'site',
    		value: 'BY_TYPE',
    		params: {
    			subnet_type: 'site'
    		}
    	},
    	{
    		name: 'Zone',
    		value: 'BY_TYPE',
    		params: {
    			subnet_type: 'zone'
    		}
    	}
    ];
    // subnet_status
    var statuses = [
    	{
    		name: 'Monitored',
    		value: 'MONITOR'
    	},
    	{
    		name: 'Not Monitored',
    		value: 'BLACKLIST'
    	},
    	{
    		name: 'Any',
    		value: 'MONITOR_AND_BLACKLIST'
    	}
    ];
    // subnet_status
    var indications = [
    	{
    		name: 'Breached',
    		value: 'BREACH'
    	},
    	{
    		name: 'Job Pending',
    		value: 'JOB_PENDING'
    	},
    	{
    		name: 'Negative',
    		value: 'NEGATIVE'
    	},
    	{
    		name: 'None',
    		value: 'NO_INDICATIONS'
    	}
    ];

	var service = {
		filters: relations,
	    moreFilters: statuses,
	    actions: indications
	};
	return service;

	////////////////

	function func() {
	}
}