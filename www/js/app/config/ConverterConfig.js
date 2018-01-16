( function () {
	'use strict';

	/**
	 * Static options for converter configuration objects
	 */
	var ConverterConfig = {
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
							"type" : 'arrow-up'
						},
						{ 
							"label": '', 
							"type" : 'arrow-down'
						}
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
						}
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
						}
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
						}
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
						}
					]
				}
			]
		}
	};

	angular
	.module('calculator.configuration')
	.constant('ConverterConfig', ConverterConfig);

}() );