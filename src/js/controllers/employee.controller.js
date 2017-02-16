export default app => {
  app.controller('EmployeeCtrl', ['$scope', 'employeeService', ($scope, employeeService) => {
    employeeService.getAllEmployees().then(employees => {
      $scope.employees = employees.data;
      console.log(employees.data);
    });
  }]);
}