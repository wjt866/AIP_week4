var app = angular.module('week4prep',[]);
app.controller('myController', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/data');    
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
});