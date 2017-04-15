'use strict';
var app = angular.module('addDesign', [])
	.controller("addDesignController",function($scope, $log, $http, $modalInstance) {
	  $scope.websiteCategories = [
		  {id: 1, category: "Lifestyle"},
		  {id: 2, category: "video"}
	  ]

	  $scope.submitWebDesign = function() {
	  	$log.info($scope.webDesignDetail)
	  	$http.post("http://192.168.1.9:8080/add-website-design", {data: $scope.webDesignDetail})
	  	.success( function(response) {
      	$log.info("website added successsfully")
      	$log.info(response)
      	$scope.webDesigns = response;
	  		$modalInstance.close($scope.webDesignDetail)
   		})
   		.error(function(error) {
   			$log.info(error)
   		})
	  }

	  $scope.closeForm = function() {
    	$modalInstance.dismiss('cancel');
	  }
 });