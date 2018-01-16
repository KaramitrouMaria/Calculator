( function () {
	'use strict';

	angular
		.module('calculator.controllers')
		.controller('ConverterController', ConverterController);

	ConverterController.$inject = ['$scope', 'ConverterConfig', 'ConverterService'];

	function ConverterController($scope, ConverterConfig, ConverterService) {
		//controller's variables
		var convCtrl = this;

		convCtrl.inputDropdown = {
			isopen: false
		};
		convCtrl.outputDropdown = {
			isopen: false
		};
		
		$scope.keyboard = ConverterConfig.KEYBOARD;

        $scope.$watch(
            ConverterService.getExchangeRates,
            initializeVariables
        );
		
		//controller's functions
		convCtrl.toggleInputCurrencyDropDown = toggleInputCurrencyDropDown;
		convCtrl.toggleOutputCurrencyDropDown = toggleOutputCurrencyDropDown;

		convCtrl.onInputSelectionChange = onInputSelectionChange;
		convCtrl.onOutputSelectionChange = onOutputSelectionChange;
		convCtrl.onKeyPressed = onKeyPressed;
		
		function toggleInputCurrencyDropDown($event) {
			$event.preventDefault();
			$event.stopPropagation();
			convCtrl.inputDropdown.isopen = !convCtrl.inputDropdown.isopen;
		};

		function toggleOutputCurrencyDropDown($event) {
			$event.preventDefault();
			$event.stopPropagation();
			convCtrl.outputDropdown.isopen = !convCtrl.outputDropdown.isopen;
		};

		function onInputSelectionChange(newRate) {
			if(!angular.equals(convCtrl.selectedInputCurrency, newRate)) {
				ConverterService.updateExchangeRates(newRate.name);
			}
			convCtrl.inputDropdown.isopen = false;
		};

		function onOutputSelectionChange(newRate) {
			if(!angular.equals(convCtrl.selectedOutputCurrency, newRate)) {
				convCtrl.selectedOutputCurrency = newRate;
				evaluateResult();
			}
			convCtrl.outputDropdown.isopen = false;
		};

    	function onKeyPressed(key) {  
            switch(key.type) {
    			case 'arrow-up':
			        convCtrl.isInputNumberUpdated = true;
			        break;
    			case 'arrow-down':
			        convCtrl.isInputNumberUpdated = false;
			        break;
			    case 'clear':
			        clearNumbers();
			        break;
			    case 'not':
			        break;
			    default:
			        updateNumber(key.label);
			}
		}

    	function updateNumber(digit) {
    		if(convCtrl.isInputNumberUpdated) {
    			convCtrl.inputNumber = convCtrl.inputNumber.concat(digit);
    		} else {
    			convCtrl.outputNumber = convCtrl.outputNumber.concat(digit);
    		}
    		evaluateResult();
		}

    	function evaluateResult() {
    		if(convCtrl.isInputNumberUpdated && isNumberValid(convCtrl.inputNumber)) {
    			convCtrl.outputNumber = eval(convCtrl.inputNumber + "*" + convCtrl.selectedOutputCurrency.value).toString();
    		} else if (!convCtrl.isInputNumberUpdated && isNumberValid(convCtrl.outputNumber)) {
    			convCtrl.inputNumber = eval(convCtrl.outputNumber + "/" + convCtrl.selectedOutputCurrency.value).toString();
    		} 
		}

    	function clearNumbers() {
			convCtrl.inputNumber = "";
			convCtrl.outputNumber = "";
			convCtrl.isInputNumberUpdated = true;
		}

    	function isNumberValid(number) {
			return (number - 0) == number && (''+number).trim().length > 0;
		}

		function initializeVariables() {
			convCtrl.exchangeRates = ConverterService.getExchangeRates();
			convCtrl.selectedInputCurrency = convCtrl.exchangeRates.rates[0];
			convCtrl.selectedOutputCurrency = convCtrl.exchangeRates.rates[0];
			convCtrl.inputDropdown.isopen = false;
			convCtrl.outputDropdown.isopen = false;
			clearNumbers();
		}
	}
}() );
