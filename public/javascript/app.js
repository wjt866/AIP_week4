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

app.controller('moviePostController', function($scope, $http) {
    var jsonToSend;
    //scope submit, call a function, assign variables in json array, then post

    $scope.submit = function() {
        var jsonToSend = JSON.stringify([{
            title: $scope.title,
            releaseDate: $scope.releaseDate,
            duration: $scope.duration,
            genre: $scope.genre,
            synopsis: $scope.synopsis
        }])
        $http.post('/', jsonToSend);
    }
});