( function () {
    'use strict';

    // Service which retrieves and holds data for exchanges rates
    angular
        .module('calculator.services')
        .service('ConverterDataService', ConverterDataService);

    ConverterDataService.$inject = ['$q','ConverterRestService'];

    function ConverterDataService($q, ConverterRestService) {

        var service = {
            initializeExchangeRates: initializeExchangeRates,
            getExchangeRates: getExchangeRates
        };

        var _baseExchangeId = null; //this holds the base exchange for which this service holds data!
        var _exchangeRates = null;

        return service;

        function initializeExchangeRates (baseExchangeId) {
            if(baseExchangeId === _baseExchangeId) {
                //no need to fetch anything
                return $q.when("");
            } else {

                return $q.all([
                    updateExchangeRates(baseExchangeId)
                    ])
                    .then(function(){
                        _baseExchangeId = baseExchangeId;
                    });
            }
        }

        function getExchangeRates(){
            return _exchangeRates;
        }

        function updateExchangeRates(baseExchangeId){
            return ConverterRestService.getLatestRates(baseExchangeId).then(function(exchangeRates){
                _exchangeRates = exchangeRates;
            })
        }
    };
}() );
