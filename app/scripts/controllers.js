'use strict';

var crashingPlanesControllers = angular.module('crashingPlanesControllers', []);

crashingPlanesControllers.controller('searchController', function(searchParams) {
	var searchCtrl = this;

	searchCtrl.numberOfSeats = 1;

	searchCtrl.cities = ['Bangalore', 'Chennai', 'Delhi', 'Kolkata'];

	searchCtrl.source = '';
	searchCtrl.destination = '';

	searchCtrl.increaseSeats = function () {
		searchCtrl.numberOfSeats += 1;
		searchParams.add('numberOfSeats', searchCtrl.numberOfSeats);
		if (typeof(Storage) !== "undefined") {
			sessionStorage.numberOfSeats = searchCtrl.numberOfSeats;
		}
	};

	searchCtrl.decreaseSeats = function () {
		searchCtrl.numberOfSeats -= 1;
		searchParams.add('numberOfSeats', searchCtrl.numberOfSeats);
		if (typeof(Storage) !== "undefined") {
			sessionStorage.numberOfSeats = searchCtrl.numberOfSeats;
		}
	};

	searchCtrl.submitQuery = function() {
		if (!searchCtrl.source && searchCtrl.destination) {
			searchCtrl.errorStatement = 'You must be looking for a helicopter. Can pick you up anywhere.';
		}
		else if (searchCtrl.source && !searchCtrl.destination) {
			searchCtrl.errorStatement = 'The escape velocity is 11.2 km/s. You need a Space shuttle --> NASA.';
		}
		else if (!searchCtrl.source && !searchCtrl.destination) {
			searchCtrl.errorStatement = 'You are not here to buy a chair, are you? Try Amazon.';
		}
		else if (searchCtrl.source === searchCtrl.destination) {
			searchCtrl.errorStatement = 'Can understand your passion to circumnavigate. One fine day, promise.';
		}
		else {
			searchParams.add('sourceCity', searchCtrl.source);
			searchParams.add('destinationCity', searchCtrl.destination);
			if (typeof(Storage) !== "undefined") {
				sessionStorage.sourceCity = searchCtrl.source;
				sessionStorage.destinationCity = searchCtrl.destination;
				sessionStorage.numberOfSeats = searchCtrl.numberOfSeats;
			}
			window.location.href = '#/flights';
		}
		if (searchCtrl.errorStatement) {
			$('#error-field').css('opacity', 1);
			$('#error-field').fadeTo(5000, 0);
		}
	};
});

crashingPlanesControllers.controller('flightsController', function(searchParams) {
	var flightCtrl = this;

	flightCtrl.data = [
	  {
	    "From": "Chennai",
	    "To": "Delhi",
	    "Departure": "5:00 PM",
	    "Arrival": "7:40 PM",
	    "Duration": "2 Hours 40 mins",
	    "Airline": "Jet Airways",
	    "Seats Available": 1,
	    "Price": 6900
	  },
	  {
	    "From": "Kolkata",
	    "To": "Bangalore",
	    "Departure": "9:40 PM",
	    "Arrival": "12:10 AM",
	    "Duration": "2 Hours 30 mins",
	    "Airline": "Air India",
	    "Seats Available": 1,
	    "Price": 7500
	  },
	  {
	    "From": "Bangalore",
	    "To": "Kolkata",
	    "Departure": "7:00 AM",
	    "Arrival": "9:30 AM",
	    "Duration": "2 Hours 30 mins",
	    "Airline": "Jet Airways",
	    "Seats Available": 2,
	    "Price": 4000
	  },
	  {
	    "From": "Delhi",
	    "To": "Chennai",
	    "Departure": "12:30 PM",
	    "Arrival": "3:20 PM",
	    "Duration": "2 Hours 50 Mins",
	    "Airline": "Air India",
	    "Seats Available": 3,
	    "Price": 9000
	  },
	  {
	    "From": "Bangalore",
	    "To": "Kolkata",
	    "Departure": "5:00 PM",
	    "Arrival": "7:00 PM",
	    "Duration": "2 Hours",
	    "Airline": "Air India",
	    "Seats Available": 3,
	    "Price": 10000
	  },
	  {
	    "From": "Kolkata",
	    "To": "Bangalore",
	    "Departure": "9:30 PM",
	    "Arrival": "12:10 AM",
	    "Duration": "2 Hours 40 mins",
	    "Airline": "Jet Airways",
	    "Seats Available": 3,
	    "Price": 6300
	  },
	  {
	    "From": "Bangalore",
	    "To": "Kolkata",
	    "Departure": "6:00 PM",
	    "Arrival": "8:00 PM",
	    "Duration": "2 Hours",
	    "Airline": "Indigo",
	    "Seats Available": 5,
	    "Price": 6000
	  },
	  {
	    "From": "Delhi",
	    "To": "Chennai",
	    "Departure": "3:00 AM",
	    "Arrival": "6:00 AM",
	    "Duration": "3 Hours",
	    "Airline": "Air India",
	    "Seats Available": 7,
	    "Price": 8000
	  },
	  {
	    "From": "Chennai",
	    "To": "Delhi",
	    "Departure": "2:00 AM",
	    "Arrival": "5:00 AM",
	    "Duration": "3 hours",
	    "Airline": "Air India",
	    "Seats Available": 10,
	    "Price": 7000
	  },
	  {
	    "From": "Kolkata",
	    "To": "Bangalore",
	    "Departure": "5:50 AM",
	    "Arrival": "7:40 AM",
	    "Duration": "1 Hours 50 mins",
	    "Airline": "Air India",
	    "Seats Available": 12,
	    "Price": 5699
	  },
	  {
	    "From": "Delhi",
	    "To": "Chennai",
	    "Departure": "12:20 PM",
	    "Arrival": "3:20 PM",
	    "Duration": "3 Hours",
	    "Airline": "Air India",
	    "Seats Available": 12,
	    "Price": 9000
	  },
	  {
	    "From": "Bangalore",
	    "To": "Kolkata",
	    "Departure": "3:00 AM",
	    "Arrival": "5:00 AM",
	    "Duration": "2 Hours",
	    "Airline": "Indigo",
	    "Seats Available": 21,
	    "Price": 6500
	  },
	  {
	    "From": "Kolkata",
	    "To": "Bangalore",
	    "Departure": "5:50 AM",
	    "Arrival": "8:00 AM",
	    "Duration": "2 Hours 10 mins",
	    "Airline": "Indigo",
	    "Seats Available": 21,
	    "Price": 5700
	  },
	  {
	    "From": "Chennai",
	    "To": "Delhi",
	    "Departure": "4:50 PM",
	    "Arrival": "7:00 PM",
	    "Duration": "2 Hours 10 mins",
	    "Airline": "Air India",
	    "Seats Available": 24,
	    "Price": 5750
	  },
	  {
	    "From": "Delhi",
	    "To": "Chennai",
	    "Departure": "3:00 AM",
	    "Arrival": "6:00 AM",
	    "Duration": "3 Hours",
	    "Airline": "Indigo",
	    "Seats Available": 25,
	    "Price": 7999
	  },
	  {
	    "From": "Chennai",
	    "To": "Delhi",
	    "Departure": "5:00 AM",
	    "Arrival": "8:00 AM",
	    "Duration": "3 Hours",
	    "Airline": "Air India",
	    "Seats Available": 26,
	    "Price": 8000
	  },
	  {
	    "From": "Bangalore",
	    "To": "Kolkata",
	    "Departure": "6:00 PM",
	    "Arrival": "9:00 PM",
	    "Duration": "3 Hours",
	    "Airline": "Air India",
	    "Seats Available": 27,
	    "Price": 5000
	  },
	  {
	    "From": "Delhi",
	    "To": "Chennai",
	    "Departure": "3:00 AM",
	    "Arrival": "6:05 AM",
	    "Duration": "3 Hours 5 mins",
	    "Airline": "Jet Airways",
	    "Seats Available": 29,
	    "Price": 7500
	  },
	  {
	    "From": "Kolkata",
	    "To": "Bangalore",
	    "Departure": "2:30 AM",
	    "Arrival": "4:50 AM",
	    "Duration": "2 Hours 20 mins",
	    "Airline": "Air India",
	    "Seats Available": 36,
	    "Price": 4500
	  },
	  {
	    "From": "Chennai",
	    "To": "Delhi",
	    "Departure": "5:00 PM",
	    "Arrival": "7:50 PM",
	    "Duration": "2 Hours 50 mins",
	    "Airline": "Indigo",
	    "Seats Available": 56,
	    "Price": 4800
	  }
	];

	flightCtrl.convertToMilitaryTime = function (time) {
		var splitArray = time.split(" ");
		var timeString = splitArray[0];
		var ampm = splitArray[1];
		var hoursMinutes = timeString.split(":");
		var hours = parseFloat(hoursMinutes[0]);
		var minutes = parseFloat(hoursMinutes[1]);
		if (ampm === 'PM') {
			if (hours != 12) {
				hours = hours + 12;
			}
		}
		else {
			if (hours === 12) {
				hours = 0;
			}
		}
		return hours + minutes / 60;
	};

	flightCtrl.convertDurationToDecimal = function(duration) {
		var splitArray = duration.split(" ");
		if (splitArray.length === 2) {
			var hours = parseFloat(splitArray[0]);
			var minutes = 0;
		}
		else {
			hours = parseFloat(splitArray[0]);
			minutes = parseFloat(splitArray[2]);
		}
		return hours + minutes / 60;
	};


	if (!searchParams.source) {
		if (typeof(Storage) !== "undefined") {
			flightCtrl.source = sessionStorage.sourceCity;
			flightCtrl.destination = sessionStorage.destinationCity;
			flightCtrl.seats = sessionStorage.numberOfSeats;
		}
		else {
	    	flightCtrl.source = 'Bangalore';
			flightCtrl.destination = 'Delhi';
			flightCtrl.seats = 1;
		}
	}
	else {
		flightCtrl.source = searchParams.sourceCity;
		flightCtrl.destination = searchParams.destinationCity;
		flightCtrl.seats = searchParams.numberOfSeats;
	}

	flightCtrl.dataFilteredByQuery = [];

	for (var i = 0; i < flightCtrl.data.length; i++) {
		if (flightCtrl.data[i]['From'] === flightCtrl.source && flightCtrl.data[i]['To'] === flightCtrl.destination && flightCtrl.data[i]['Seats Available'] >= flightCtrl.seats) {
			flightCtrl.dataFilteredByQuery.push(flightCtrl.data[i]);
		}
	}

	flightCtrl.minPrice = 100000000;
	flightCtrl.maxPrice = 10;

	flightCtrl.modifiedData = flightCtrl.dataFilteredByQuery.map(function(obj) {
		var modObj = obj;
		modObj.DepartureDecimal = flightCtrl.convertToMilitaryTime(obj.Departure);
		modObj.ArrivalDecimal = flightCtrl.convertToMilitaryTime(obj.Arrival);
		modObj.DurationDecimal = flightCtrl.convertDurationToDecimal(obj.Duration);

		if (flightCtrl.minPrice > obj.Price) {
			flightCtrl.minPrice = obj.Price;
		}

		if (flightCtrl.maxPrice < obj.Price) {
			flightCtrl.maxPrice = obj.Price;
		}
		
		return modObj;
	});


	if (flightCtrl.modifiedData.length === 0) {
		flightCtrl.flightsFound = false;
	}
	else {
		flightCtrl.flightsFound = true;
	}

	flightCtrl.airlines = [];

	for (var i = 0; i < flightCtrl.dataFilteredByQuery.length; i++) {
		var flightObj = flightCtrl.dataFilteredByQuery[i];
		if (flightCtrl.airlines.indexOf(flightObj.Airline) < 0) {
			flightCtrl.airlines.push(flightObj.Airline);
		}
	}

	document.getElementById("myRange").min = flightCtrl.minPrice;
	document.getElementById("myRange").max = flightCtrl.maxPrice;

	flightCtrl.priceRange = flightCtrl.maxPrice;

	flightCtrl.durations = ['<2 Hours', '2 Hours - 3 Hours', '>3 Hours'];
	flightCtrl.decimalDurations = [
		{
			start: 0,
			end: 2
		},
		{
			start: 2,
			end: 3
		},
		{
			start: 3,
			end: 24
		}
	];
	flightCtrl.activeDurations = [];
	flightCtrl.activeDecimalDurations = [];
	flightCtrl.activeAirlines = [];
	flightCtrl.activeDepartureSections = [];
	flightCtrl.activeArrivalSections = [];
	flightCtrl.filterObject = {
		priceRange : flightCtrl.maxPrice,
		durations: flightCtrl.activeDurations,
		airlines: flightCtrl.activeAirlines,
		departures: flightCtrl.activeDepartureSections,
		arrivals: flightCtrl.activeArrivalSections
	};

	flightCtrl.filterByPrice = function (priceValue) {
		flightCtrl.filterObject.priceRange = priceValue;
	};

	flightCtrl.filterByDuration = function (duration) {
		var index = flightCtrl.durations.indexOf(duration);
		if (flightCtrl.activeDurations.indexOf(duration) < 0) {
			flightCtrl.activeDurations.push(duration);
			flightCtrl.activeDecimalDurations.push(flightCtrl.decimalDurations[index]);
		}
		else {
			flightCtrl.activeDurations.splice(flightCtrl.activeDurations.indexOf(duration), 1);
			flightCtrl.activeDecimalDurations.splice(flightCtrl.activeDurations.indexOf(duration), 1);
		}

		flightCtrl.filterObject.durations = flightCtrl.activeDecimalDurations;
	};

	flightCtrl.filterByAirline = function (airline) {
		if (flightCtrl.activeAirlines.indexOf(airline) < 0) {
			flightCtrl.activeAirlines.push(airline);
		}
		else {
			flightCtrl.activeAirlines.splice(flightCtrl.activeAirlines.indexOf(airline), 1);
		}

		flightCtrl.filterObject.airlines = flightCtrl.activeAirlines;
	};

	flightCtrl.filterByDeparture = function (daySection) {
		if (flightCtrl.activeDepartureSections.indexOf(daySection) < 0) {
			flightCtrl.activeDepartureSections.push(daySection);
		}
		else {
			flightCtrl.activeDepartureSections.splice(flightCtrl.activeDepartureSections.indexOf(daySection), 1);
		}

		flightCtrl.filterObject.departures = flightCtrl.activeDepartureSections;
	};

	flightCtrl.filterByArrival = function (daySection) {
		if (flightCtrl.activeArrivalSections.indexOf(daySection) < 0) {
			flightCtrl.activeArrivalSections.push(daySection);
		}
		else {
			flightCtrl.activeArrivalSections.splice(flightCtrl.activeArrivalSections.indexOf(daySection), 1);
		}

		flightCtrl.filterObject.arrivals = flightCtrl.activeArrivalSections;
	};


	flightCtrl.timeSectionDuration = 3;
	flightCtrl.numberOfTimeSections = 24 / flightCtrl.timeSectionDuration;

	flightCtrl.daySections = [];

	flightCtrl.convertToAMPM = function (hour) {
		if (hour === 0 || hour === 24) {
			return '12 AM';
		}
		else if (hour < 12) {
			return hour + ' AM';
		}
		else if (hour === 12) {
			return '12 PM';
		}
		else {
			return (hour - 12) + ' PM';
		}
	};

	for (var i = 0; i < flightCtrl.numberOfTimeSections; i++) {
		var daySectionObject = {};
		var startHour = flightCtrl.timeSectionDuration * i;
		var endHour = flightCtrl.timeSectionDuration * (i + 1);
		var sectionStart = flightCtrl.convertToAMPM(startHour);
		var sectionEnd = flightCtrl.convertToAMPM(endHour);
		daySectionObject.stringDuration = sectionStart + ' to ' + sectionEnd;
		daySectionObject.startHour = startHour;
		daySectionObject.endHour = endHour;
		flightCtrl.daySections.push(daySectionObject);
	}

	flightCtrl.reverseFilter = false;
	flightCtrl.sortFilter = 'Airline';

	flightCtrl.sortByAirline = function () {
		if (flightCtrl.sortFilter === 'Airline') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'Airline';
	};

	flightCtrl.sortByDeparture = function () {
		if (flightCtrl.sortFilter === 'DepartureDecimal') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'DepartureDecimal';
	};

	flightCtrl.sortByArrival = function () {
		if (flightCtrl.sortFilter === 'ArrivalDecimal') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'ArrivalDecimal';
	};

	flightCtrl.sortByDuration = function () {
		if (flightCtrl.sortFilter === 'DurationDecimal') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'DurationDecimal';
	};

	flightCtrl.sortBySeats = function () {
		if (flightCtrl.sortFilter === 'Seats') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'Seats';
	};

	flightCtrl.sortByPrice = function () {
		if (flightCtrl.sortFilter === 'Price') {
			flightCtrl.reverseFilter = !flightCtrl.reverseFilter;
		}
		flightCtrl.sortFilter = 'Price';
	};

	flightCtrl.filterScreenOpen = false;

	flightCtrl.closeFilterScreen = function () {
		$('#filters').css('display', 'none');
	};

	flightCtrl.openFilterWindow = function () {
		$('#filters').css('display', 'inline-block');
	};
});