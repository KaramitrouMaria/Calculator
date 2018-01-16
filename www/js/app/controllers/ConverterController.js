( function () {
	'use strict';

	angular
		.module('calculator.controllers')
		.controller('ConverterController', ConverterController);

	ConverterController.$inject = ['$scope', 'CalculatorConfig'];

	function ConverterController($scope, CalculatorConfig) {
		//controller's variables
		var convCtrl = this;

		// scope variables 
		$scope.status = {
			isopen: false
		};
		$scope.exchangeRates = CalculatorConfig.EXCHANGE_RATES;

		//controller's functions
		convCtrl.toggleInputCurrencyDropDown = toggleInputCurrencyDropDown;
		
		function toggleInputCurrencyDropDown($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.status.isopen = !$scope.status.isopen;
		};
	}
}() );
