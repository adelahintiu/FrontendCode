/**
 * Created by Adela on 6/26/2016.
 */
angular.module('description').controller('DescriptionController', ['$scope', function ($scope) {
    $scope.title='Two Way Binding Demo';
    $scope.childtemplate='views/childscope.html';
    $scope.resetFirstVariable=function () {
        $scope.firstVariable = undefined;

    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };


}]);

