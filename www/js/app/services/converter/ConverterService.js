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
			constructExchangeRates: constructExchangeRates,
			getExchangeRates: getExchangeRates
			
		};

		var _exchangeRates = {};

		return service;

		// service's public functions
        function constructExchangeRates(exchangeRates) {

    		var rates = [];
        	for (var property in exchangeRates) {
				if (property === 'base') {
					_exchangeRates[property] = exchangeRates[property];
					rates.push(createRateObject(exchangeRates[property], 1));
				
				} else if(property === 'date') {
					_exchangeRates[property] = exchangeRates[property];
				
				}else {
					for ( var rate in exchangeRates.rates) {
						rates.push(createRateObject(rate, exchangeRates.rates[rate]));
					}
				}
			}
			_exchangeRates['rates'] = rates;
        };

        function getExchangeRates() {
        	return _exchangeRates;
        }
		
		// private helper functions
        function createRateObject(name, value) {
			var rateObj = {};
			rateObj['name'] = name;
			rateObj['value'] = value;

			return rateObj;
        };
	};
}() );
