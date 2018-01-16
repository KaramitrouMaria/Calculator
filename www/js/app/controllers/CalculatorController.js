( function () {
	'use strict';

	angular
		.module('calculator.controllers')
		.controller('CalculatorController', CalculatorController);

	CalculatorController.$inject = ['$scope', 'CalculatorConfig'];

	function CalculatorController($scope, CalculatorConfig) {
		//controller's variables
    	var calcCtrl = this;
	    var isFirstNumberUpdated;

	    //scope variables
	    initializeVariables();
	    $scope.keyboard = CalculatorConfig.KEYBOARD;

	    calcCtrl.onKeyPressed = onKeyPressed;

	    //private functions
    	function onKeyPressed(key) {  
            switch(key.type) {
    			case 'converter':
			        //updateNumber(key.label);
			        break;
    			case 'not':
			        //updateNumber(key.label);
			        break;
			    case 'symbol':
			        updateOperation(key.label);
			        break;
			    case 'equals':
			        executeOperation();
			        break;
			    case 'clear':
			        initializeVariables();
			        break;
			    default:
			        updateNumber(key.label);
			}
		}

    	function updateNumber(digit) {
    		if(isFirstNumberUpdated) {
    			$scope.firstNumber = $scope.firstNumber.concat(digit);
    		} else {
    			$scope.secondNumber = $scope.secondNumber.concat(digit);
    		}
    		evaluateResult();
		}

    	function updateOperation(symbol) {
    		if($scope.operation !== "")
    			executeOperation();
			
			$scope.operation = symbol;
			isFirstNumberUpdated = !isFirstNumberUpdated;
		}

    	function executeOperation() {
			evaluateResult();
			$scope.firstNumber = $scope.result;
			$scope.secondNumber = "";
		    $scope.operation = "";
		    isFirstNumberUpdated = true; 
		}

    	function evaluateResult() {
		    $scope.result = eval($scope.firstNumber + $scope.operation + $scope.secondNumber).toString();
		}

    	function initializeVariables() {
	    	$scope.firstNumber = "";
		    $scope.secondNumber = "";
		    $scope.operation = "";
		    $scope.result = "";

		    isFirstNumberUpdated = true; 
		}
	}
}() );
