( function () {
	'use strict';

	/**
	 * Service to retrieve urls
	 */
	angular
		.module('calculator.services')
		.service('HttpService', HttpService);

	HttpService.$inject = ['$http', '$q', 'RespHandlingService'];

	function HttpService($http, $q, RespHandlingService) {

		var service = {
			get: get
		};

		return service;

        function get(url) {
            return request(url, 'GET');
        };

		function request(url, method) {
            var deferred = $q.defer();

            var req = {
                url : url,
                method: method
            };

            $http(req).then( function ( response ) {
                RespHandlingService.handleSuccess(response.data, deferred);
            } )["catch"]( function ( error ) {
                RespHandlingService.handleError(error, error.status, deferred);
            } );

            return deferred.promise;
        };
	};
}() );
