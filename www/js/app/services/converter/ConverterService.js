( function () {
	'use strict';

	/**
	 * Service to retrieve urls
	 */
	angular
		.module('calculator.services')
		.service('ConverterService', ConverterService);

	ConverterService.$inject = [];

	function ConverterService() {

		var service = {
			setExchangeRates: setExchangeRates,
			
		};

		var _exchangeRates = null;

		return service;

        function setExchangeRates(exchangeRates) {
        	for (var property in exchangeRates) {
				console.log(property);
				console.log(exchangeRates[property]);
			}
        	
        };
	};
}() );
