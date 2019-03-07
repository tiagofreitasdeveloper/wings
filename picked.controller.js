var app = angular.module('wings',["ui.router"]);

app.controller('pickedCtrl', function($scope){
   
   var picked = {

        pickedUidk : '',
        statusCode : '',
        partCode : '',
        partCase : '',
        location : ''
        

   };

   var picked1 = new Object();
    picked1.pickedUidk = '1',
    picked1.statusCode = '3',
    picked1.partCode = 'AA BB CC D',
    picked1.partCase = '1221',
    picked1.location = '12',
    picked1.zone = 'A'

    $scope.listPicked = [];
    $scope.listPicked.push(picked1);
  

})

app.config(function ( $stateProvider ) {

    $stateProvider
    .state('picked', {
        url: '/picked',
        templateUrl: 'picked.html',
        controller: 'pickedCtrl'
        
    });

     $stateProvider
    .state('dispached', {
        url: '/dispached',
         template: '<h3>hello world2!</h3>'
    });

});

