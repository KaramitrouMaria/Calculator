( function () {
	'use strict';

	/**
	 * Service to retrieve latest rates from REST
	 */
	angular
		.module('calculator.services')
		.service('ConverterRestService', ConverterRestService);

	ConverterRestService.$inject = ['HttpService'];

	function ConverterRestService(HttpService) {

		var service = {
			getLatestRates: getLatestRates
		};

		return service;

		function getLatestRates(baseExchangeId) {
		    return HttpService.get('https://api.fixer.io/latest?base=' + baseExchangeId);
		};
	};
}() );