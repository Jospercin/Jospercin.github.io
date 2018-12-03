angular.module('angular_app', [])
        .controller('UserController', ['$scope', function($scope) {
          $scope.app = "angular_app";
          $scope.user = {};
          $scope.registrar = function(registro){
              delete $scope.registro;
          }
   
          $scope.update = function() {
            console.log($scope.user);
          };
   
          $scope.reset = function(form) {
            $scope.user = {};
            if (form) {
              form.$setPristine();
              form.$setUntouched();
            }
          };
   
          $scope.reset();
        }]);

        angular.module('EjemploObtDatos', [])
        .controller('EjemploDatos', ['$scope', function($scope) {
            $scope.user = { name: 'say' };
            $scope.user = { password: 'say'};
            $scope.user = { email: 'say'};
          }
        ]);        

        