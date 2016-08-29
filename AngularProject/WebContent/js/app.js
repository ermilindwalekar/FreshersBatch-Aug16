var myModule = angular.module('testApp', []);

function accountController($scope) {
	$scope.accounts = [{uname: 'Tom', lname: 'Eric'}, 
	               	{uname: 'Barack', lname: 'Obama'},
	            	{uname: 'Anand', lname: 'Kulkarni'},
	            	{uname: 'Jerry', lname: 'Peter'}];
}

myModule.controller('AccountController', accountController);
