hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [
            {
            url:'#/employeelist',
            label:'Employee List'
            },
            {
            url:'#/employeeadd',
            label:'Add employee'
            }
    ];

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);

