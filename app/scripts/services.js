'use strict';

var crashingPlanesServices = angular.module('crashingPlanesServices', ['ngResource']);

crashingPlanesServices.factory('searchParams', function(){
  var params = {};

  params.add = function(param, value){
    params[param] = value;
  };

  return params;
});