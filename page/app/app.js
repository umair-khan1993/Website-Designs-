'use strict';
var app = angular.module('app', ['ui.bootstrap' ,'addDesign'])
	.controller("WebsiteDesignListingController", function($scope, $log, $http, $modal, $sce) {

	  $scope.fetchWebsiteDesigns = function() {
	  	$http.get("http://localhost:8080/fetch-website-designs")
	  	.success( function(response) {
      	$scope.webDesigns = response;
   		})
   		.error(function(error) {
   			$log.info(error)
   		})

	  }

	  $scope.openForm = function() {
	  	var modalInstance = $modal.open({
	      templateUrl: 'app/AddDesign/addDesign.html',
	      controller: 'addDesignController',
	      size: "lg"
	    });

	    modalInstance.result
	    .then(function (selectedItem) {
      	$scope.webDesigns.unshift(selectedItem)
		    }, function () {
		    	
		    });
	  }

	  $scope.getIframeUrl = function(design) {
	  	return $sce.trustAsResourceUrl(design.subject_url);
	  }
 });