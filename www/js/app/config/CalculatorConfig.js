( function () {
	'use strict';

	/**
	 * Static options for calculator configuration objects
	 */
	var CalculatorConfig = {
		KEYBOARD: { 
			"rows": [
				{
					"keys": [
						{ 
							"label": 'C', 
							"type" : 'clear'
						},						
						{ 
							"label": '', 
							"type" : 'backspace'
						},
						{ 
							"label": '%', 
							"type" : 'symbol'
						},
						{ 
							"label": '/', 
							"type" : 'symbol'
						},
					]
				},
				{
					"keys": [
						{ 
							"label": '7', 
							"type" : 'digit'
						},						
						{ 
							"label": '8', 
							"type" : 'digit'
						},
						{ 
							"label": '9', 
							"type" : 'digit'
						},
						{ 
							"label": '*', 
							"type" : 'symbol'
						},
					]
				},
				{
					"keys": [
						{ 
							"label": '4', 
							"type" : 'digit'
						},						
						{ 
							"label": '5', 
							"type" : 'digit'
						},
						{ 
							"label": '6', 
							"type" : 'digit'
						},
						{ 
							"label": '-', 
							"type" : 'symbol'
						},
					]
				},
				{
					"keys": [
						{ 
							"label": '1', 
							"type" : 'digit'
						},						
						{ 
							"label": '2', 
							"type" : 'digit'
						},
						{ 
							"label": '3', 
							"type" : 'digit'
						},
						{ 
							"label": '+', 
							"type" : 'symbol'
						},
					]
				},
				{
					"keys": [
						{ 
							"label": '+/-', 
							"type" : 'not'
						},						
						{ 
							"label": '0', 
							"type" : 'digit'
						},
						{ 
							"label": '.', 
							"type" : 'digit'
						},
						{ 
							"label": '=', 
							"type" : 'equals'
						},
					]
				}
			]
		}
	};

	angular
	.module('calculator.configuration')
	.constant('CalculatorConfig', CalculatorConfig);

}() );