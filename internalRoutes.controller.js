var app = angular.module('wings',["ui.router"]);

app.controller('routesCtrl', function($scope){

    var rotas = {

        warehouse : '',
        internalRote : '',
   };

   var rota1 = new Object();
    rota1.warehouse = 'D2-Barueri';
    rota1.internalRote = 'RT - 01';



   $scope.search  = function () {
       alert("OK");

    }

})

app.config(function ( $stateProvider ) {

    $stateProvider
    .state('routes', {
        url: '/routes',
        templateUrl: 'internalRouteList.html',
        controller: 'routesCtrl'
        
    });
});

