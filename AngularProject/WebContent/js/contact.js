var myModule = angular.module('contactApp', ['ngRoute']);

function contactController($scope) {
	$scope.contacts = [{name: 'Tom', phone: 111},
	                   {name: 'Ivan', phone: 222}];
	$scope.add_contact = function() {
		$scope.contacts.push({name: $scope.uname, phone: $scope.phone});
	}
}

myModule.controller('ContactController', contactController);

myModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'ContactController',
			templateUrl: 'show_contacts.html'
		})
		.when('/exitPage', {
			controller: 'ContactController',
			templateUrl: 'exit.html'
		})
		.otherwise({redirectTo: '/'})
});
