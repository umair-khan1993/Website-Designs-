'use strict';
var app = angular.module('app', ['ui.bootstrap' ,'addDesign'])
	.controller("WebsiteDesignListingController", function($scope, $log, $http, $modal) {
	  $log.info("initialized")

	  $scope.fetchWebsiteDesigns = function() {
	  	$http.get("http://localhost:8080/fetch-website-designs")
	  	.success( function(response) {
      	$log.info("response successfully received")
      	$log.info(response)
      	$scope.webDesigns = response;
   		})
   		.error(function(error) {
   			$log.info(error)
   		})

	  }

	  $scope.openForm = function() {
	  	var modalInstance = $modal.open({
	      //animation: $scope.animationsEnabled,
	      templateUrl: 'app/AddDesign/addDesign.html',
	      controller: 'addDesignController',
	      size: "lg",
	      windowClass: "login-flow",
	    });

	    modalInstance.result
	    .then(function (selectedItem) {
      	$log.info("inside then");
      	$log.info(selectedItem)
      	$scope.webDesigns.push(selectedItem)
		    }, function () {
		        $log.info("second arg")
		    });
	  }

	  $scope.handleClick = function() {
	  	$log.info("paragraph clicked")
	  }


 });

/*app.config([
  '$urlRouterProvider','$anchorScrollProvider','$locationProvider', '$httpProvider',function($urlRouterProvider, $anchorScrollProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
]);

app.run(function ($rootScope, AuthService, $window, $location) {
  $rootScope.$on('$viewContentLoaded',function(){
    jQuery('html, body').animate({ scrollTop: 0 }, 200);
    $window.ga('send', 'pageview', { page: $location.url() });
  });

  $log.info("unauthorized access")
});*/