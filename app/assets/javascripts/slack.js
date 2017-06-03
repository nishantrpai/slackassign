var app = angular.module("SlackApp", []);

app.controller("SlackMessageCtrl", function($scope) {

   $scope.messages = [
   	{name: 'nishant', text: 'text'},
   	{name: 'nishant', text: 'text'},
   	{name: 'nishant', text: 'text'},
   	{name: 'nishant', text: 'text'}
   ];

	$scope.userMesage = {name:'nishant'};
	$scope.channel = {name: '#general'};


   $scope.addEntry = function(){
   	$scope.messages.push($scope.userMesage);
   	$scope.userMesage = {name:'nishant'};
   };

});