'use strict';

HomeModule.factory("NewProjectFactory", function($q, $http, $location, $rootScope) {

	var factory = {};

	factory.createProject = function(configData, devicesData) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: $rootScope.baseUrl + 'create_project',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				config: configData,
				devices: devicesData
			}
		}).then(function(result) {
			var data = result.data;
			if (data.error_code == 0) {
				deferred.resolve(data)
			} else {
				deferred.reject(data);
			}
		}, function(error) {
			deferred.reject(error);
		});
		return deferred.promise;
	};

	return factory;

})
