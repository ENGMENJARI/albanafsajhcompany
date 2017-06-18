var app=angular.module('Banafsajh.Location', []);
app.controller('LocationCtrl', function($scope,serv){
 // $scope.map = { center: { latitude: 25.253662, longitude: 55.517005 }, zoom: 8 }
 // .angular-google-map-container { height: 400px; }
$scope.client={};
$scope.all=[];
$scope.contacts={};
$scope.allcontacts=[];

$scope.addClient=function(){
serv.addingClient($scope.client).then(function(data){
	console.log(data)
})
},
$scope.showClients = function(){
	serv.showAllClients().then(function(clients){
		for (var i = 0; i < clients.length; i++) {
			$scope.all.push(clients[i])
		}
		// console.log($scope.all)
		
	})
},
$scope.contact=function(){
	serv.addContact($scope.contacts).then(function(data){
		
		console.log(data)

		// console.log(data)
	})
},
$scope.showAllContacts=function(){
	serv.showContacts().then(function(data){
		for (var i = 0; i < data.length; i++) {
			$scope.allcontacts.push(data[i])
		}
	})
}
});



