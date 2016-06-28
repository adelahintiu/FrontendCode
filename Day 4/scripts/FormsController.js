/**
 * Created by user on 6/28/2016.
 */
app.controller('FormsController', ['$scope', function($scope) {
   $scope.userType = "";
   $scope.showAlert = function () {
       if ($scope.userType){
           window.alert("Valid data!");
       }
   }
}]);
