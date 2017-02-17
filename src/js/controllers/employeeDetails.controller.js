export default app => {
  app.controller('EmployeeDetailsCtrl', ['$scope', '$routeParams', 'employeeDetailsService', 'shareNameService', 
    ($scope, $routeParams, employeeDetailsService, shareNameService) => {
    
    $scope.name = shareNameService.getName();
    employeeDetailsService.getSubordinants($routeParams.id)
      .then(result => {
        $scope.subordinants = result.data;
      });
  }]);
};