var app = angular.module("SlackApp", []);

app.controller("SlackMessageCtrl", function($scope,$http) {

   $scope.messages = [
   	
   ];

   $scope.channels = gon.channels;
   $scope.current = "Click on channel to get data"
   $scope.click_channel = function(id){
  
      $scope.current = "#" + $scope.channels[id]["name"] + '(loading)...';
      $http({
           method : "GET",
           url : "https://slack.com/api/channels.history",
           params: {token: gon.access, channel: $scope.channels[id].id}
       }).then(function mySuccess(response) {
            $scope.current = "#" + $scope.channels[id]["name"];
            $scope.messages = response.data;
            $scope.messages = $scope.messages["messages"];
            console.log(response.data);
            
       }, function myError(response) {
       
       });
   

   };

	$scope.userMesage = {name:'nishant'};
	$scope.channel = {name: '#general'};


   $scope.addEntry = function(){
   	$scope.messages.push($scope.userMesage);
   	$scope.userMesage = {name:'nishant'};
   };

});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});