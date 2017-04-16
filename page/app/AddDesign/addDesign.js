'use strict';
var app = angular.module('addDesign', [])
	.controller("addDesignController",function($scope, $log, $http, $modalInstance) {
		$scope.subjectUrlRegex =  /(http):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
	  $scope.websiteCategories = [
		  {id: 1, category: "Lifestyle"},
		  {id: 2, category: "Video"},
		  {id: 3, category: "Travel"}
	  ]

	  $scope.selectedCategory = $scope.websiteCategories[0];

	  $scope.submitWebDesign = function() {
	  	$scope.webDesignDetail.category = $scope.selectedCategory.category;
	  	$http.post("http://localhost:8080/add-website-design", {data: $scope.webDesignDetail})
	  	.success( function(response) {
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