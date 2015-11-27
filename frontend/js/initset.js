/*
$(function ()
{
	$('.datepicker').datepicker({
		dateFormat: 'yy/mm/dd',
		showButtonPanel: true,
		showOtherMonths: true,
		minDate: +1,
		maxDate: '+1M'
	});

	$('.timepicker').timepicker({
		timeFormat: 'H:i',
		step: 15
	});
});
*/

/*2015/11/27 - comment*/

'use strict';

moment.locale( myUtil.getBrowserLang() );

(function ()
{
	var app = angular.module('initset', [ 'angularStrapTools' ]);

	app.controller('InitDataController', function ()
	{
		// >>> Start of Initialization >>>

		this.sched = {};

		//this.sched.startTime = '19:00'; // 36000000; // 19:00
		//this.sched.endTime   = '23:00'; // 50400000; // 23:00

		this.sched.startTime = moment( { years: 1970, months: 0, days: 1, hours: 19, minutes: 0, seconds: 0 } ).toDate();
		this.sched.endTime   = moment( { years: 1970, months: 0, days: 1, hours: 22, minutes: 0, seconds: 0 } ).toDate();

		// <<< End of Initialization <<<


		this.setMaxStartTime = function ()
		{
			this.beforeEndTime = moment( this.sched.endTime ).subtract( 5, 'minutes' ).toDate();
		}

		this.setMinEndTime = function ()
		{
			this.afterStartTime = moment( this.sched.startTime ).add( 5, 'minutes' ).toDate();
		}

		this.setMaxStartDate = function ()
		{
			if ( this.sched.endDate )
			{
				this.oneBeforeEndDate = moment( this.sched.endDate ).subtract( 1, 'days' ).toDate();
			}
		};

		this.setMinEndDate = function ()
		{
			if ( this.sched.startDate )
			{
				this.oneAfterStartDate = moment( this.sched.startDate ).add( 1, 'days' ).toDate();
			}
			else
			{
				this.tomorrow = moment().toDate();
			}
		};

		this.addSched = function ()
		{
			var
				dates = [],
				//dateFormat = 'YYYY/MM/DD ddd',	// = 'L ddd'
				dateFormat = 'L ddd',
				timeFormat = 'HH:mm';

			this.sched.startTimeF = moment(this.sched.startTime).format( timeFormat );
			this.sched.endTimeF = moment(this.sched.endTime).format( timeFormat );

			this.sched.startDateF = moment( this.sched.startDate ).format( dateFormat );
			this.sched.endDateF = moment( this.sched.endDate ).format( dateFormat );

			this.sched.dates = myUtil.getDateArray( this.sched.startDateF.substr( 0, 10 ), this.sched.endDateF.substr( 0, 10 ), dateFormat );

			console.log( this.sched );
		};

		// Initial Procedures
		this.setMaxStartTime();
		this.setMinEndTime();

	});

	angular.module('angularStrapTools', [ 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap' ])

		.config( function( $datepickerProvider ) {
		  angular.extend( $datepickerProvider.defaults, {
		    dateFormat: 'yyyy/MM/dd EEE',
		    autoclose: true,
		    placement: 'top',
		    startWeek: 1
		  });
		})

/*
		.controller('DatepickerDemoCtrl', function($scope, $http) {

		  $scope.selectedDate = new Date();
		  $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
		  // $scope.fromDate = new Date();
		  // $scope.untilDate = new Date();
		  $scope.getType = function(key) {
		    return Object.prototype.toString.call($scope[key]);
		  };

		  $scope.clearDates = function() {
		    $scope.selectedDate = null;
		  };
		});
*/
		.config( function( $timepickerProvider ) {
  			angular.extend( $timepickerProvider.defaults, {
	    		timeFormat: 'HH:mm',
	    		autoclose: true,
	    		arrowBehavior: 'picker',
	    		//timeType: 'string',
			    length: 1
			});
		})

		.config( function( $modalProvider ) {
  			angular.extend( $modalProvider.defaults, {
  				title: 'Confirmation',
  				backdrop: 'static',
    			animation: 'am-fade-and-scale'
    			//contentTemplate: "schedConfirm.html",
  			});
		})

/*
		.controller('ModalPopupController', function ( $scope, $modal )
		{
		})
*/
		;

})();
