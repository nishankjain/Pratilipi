// 'use strict';

var crashingPlanesFilters = angular.module('crashingPlanesFilters', []);

crashingPlanesFilters.filter('flightFilter', function () {
    return function (flights, filterObject) {
        var flightsArray = flights;
        var returnArray = [];
        if (filterObject.priceRange >= 0) {
        	for (var i = 0; i < flightsArray.length; i++) {
        		if (flightsArray[i].Price <= filterObject.priceRange) {
        			returnArray.push(flightsArray[i]);
        		}
        	}
        }
        else {
        	returnArray = flightsArray;
        }

        if (filterObject.airlines.length > 0) {
        	var airlineFilteredArray = [];
        	for (var i = 0; i < filterObject.airlines.length; i++) {
        		for (var j = 0; j < returnArray.length; j++) {
        			if (returnArray[j].Airline === filterObject.airlines[i]) {
        				airlineFilteredArray.push(returnArray[j]);
        			}
        		}
        	}
        	returnArray = airlineFilteredArray;
        }

        if (filterObject.durations.length > 0) {
        	var durationFilteredArray = [];
        	for (var i = 0; i < filterObject.durations.length; i++) {
        		for (var j = 0; j < returnArray.length; j++) {
        			if (returnArray[j].DurationDecimal > filterObject.durations[i].start && returnArray[j].DurationDecimal <= filterObject.durations[i].end) {
        				durationFilteredArray.push(returnArray[j]);
        			}
        		}
        	}
        	returnArray = durationFilteredArray;
        }

        if (filterObject.departures.length > 0) {
        	var departureFilteredArray = [];
        	for (var i = 0; i < filterObject.departures.length; i++) {
        		for (var j = 0; j < returnArray.length; j++) {
        			if (returnArray[j].DepartureDecimal >= filterObject.departures[i].startHour && returnArray[j].DepartureDecimal < filterObject.departures[i].endHour) {
        				departureFilteredArray.push(returnArray[j]);
        			}
        		}
        	}
        	returnArray = departureFilteredArray;
        }


        if (filterObject.arrivals.length > 0) {
        	var arrivalFilteredArray = [];
        	for (var i = 0; i < filterObject.arrivals.length; i++) {
        		for (var j = 0; j < returnArray.length; j++) {
        			if (returnArray[j].ArrivalDecimal >= filterObject.arrivals[i].startHour && returnArray[j].ArrivalDecimal < filterObject.arrivals[i].endHour) {
        				arrivalFilteredArray.push(returnArray[j]);
        			}
        		}
        	}
        	returnArray = arrivalFilteredArray;
        }

        return returnArray;
    };
});

crashingPlanesFilters.filter('durationStringFilter', function () {
    return function (duration) {
        var durationString = duration;
        var durationStringArray = durationString.split(" ");
        var hours = '';
        var minutes = '';
        var modifiedHours = '';
        var modifiedMinutes = '';
        var modifiedString = '';

        if (durationStringArray.length === 2) {
        	if (durationStringArray[1] === 'Mins') {
        		minutes = parseInt(durationStringArray[0]);
        		modifiedHours = '00h';
        		if (minutes < 10) {
	        		modifiedMinutes = '0' + minutes + 'm';
	        	}
	        	else {
	        		modifiedMinutes = minutes + 'm';
	        	}
        	}
        	else {
	        	hours = parseInt(durationStringArray[0]);
		    	if (hours < 10) {
		    		modifiedHours = '0' + hours + 'h';
		    	}
		    	else {
		    		modifiedHours = hours + 'h';
		    	}
	        	modifiedMinutes = '00m';
        	}
        }
        else {
        	hours = parseInt(durationStringArray[0]);
	    	if (hours < 10) {
	    		modifiedHours = '0' + hours + 'h';
	    	}
	    	else {
	    		modifiedHours = hours + 'h';
	    	}
        	minutes = parseInt(durationStringArray[2]);
        	if (minutes < 10) {
        		modifiedMinutes = '0' + minutes + 'm';
        	}
        	else {
        		modifiedMinutes = minutes + 'm';
        	}
        }
        return modifiedString = modifiedHours + ' ' + modifiedMinutes;
    };
});