( function () {
	'use strict';

	/**
	 * Service to retrieve urls
	 */
	angular
		.module('calculator.services')
		.service('ConverterService', ConverterService);

	ConverterService.$inject = ['ConverterDataService'];

	function ConverterService(ConverterDataService) {

		var service = {
			constructExchangeRates: constructExchangeRates,
			getExchangeRates: getExchangeRates,
			setExchangeRates: setExchangeRates,
			updateExchangeRates: updateExchangeRates
			
		};

		var _exchangeRates = {};

		return service;

		// service's public functions
        function constructExchangeRates(exchangeRates) {

    		var rates = [];
    		var newExchangeRates = {};
        	for (var property in exchangeRates) {
				if (property === 'base') {
					newExchangeRates[property] = exchangeRates[property];
					rates.push(createRateObject(exchangeRates[property], 1));
				
				} else if(property === 'date') {
					newExchangeRates[property] = exchangeRates[property];
				
				}else {
					for ( var rate in exchangeRates.rates) {
						rates.push(createRateObject(rate, exchangeRates.rates[rate]));
					}
				}
			}
			newExchangeRates['rates'] = rates;
			setExchangeRates(newExchangeRates);
        };

        function setExchangeRates(newExchangeRates) {
        	_exchangeRates = newExchangeRates;
        }

        function getExchangeRates() {
        	return _exchangeRates;
        }

        function updateExchangeRates(baseExchangeId) {
        	ConverterDataService.initializeExchangeRates(baseExchangeId)
          	.then(function(){
                  constructExchangeRates(ConverterDataService.getExchangeRates());
          	});
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
