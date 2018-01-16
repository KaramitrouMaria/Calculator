( function () {
	'use strict';

	/**
	 * Service for handling HTTP Responses
	 */
	angular
		.module('calculator.services')
		.service('RespHandlingService', RespHandlingService);

	RespHandlingService.$inject = [];

	function RespHandlingService() {

		var service = {
		    handleSuccess: handleSuccess,
		    handleError: handleError
		};

		return service;

		function handleSuccess(response,deferred) {
            if (response === null)
                handleError(response, 200, deferred);
            else
                deferred.resolve(response);
		};

		function handleError(error, errorStatus, deferred) {
	        /*InfoService.error(Constants.MESSAGES.ERROR, Constants.MESSAGES.GENERIC_ERROR_MESSAGE);*/
	        deferred.reject( error );
		};
	};
}() );