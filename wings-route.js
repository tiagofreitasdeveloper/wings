var app = angular.module('wings', ["ui.router"]);

app.config(function ( $stateProvider ) {

    $stateProvider
    .state('picked', {
        url: '/picked',
        templateUrl: 'picked.html', 
        controller: 'pickedCtrl',
        controllerAs: 'controller'
        
    })

     $stateProvider
    .state('dispached', {
        url: '/dispached',
         template: '<h3>hello world2!</h3>'
    })

} )