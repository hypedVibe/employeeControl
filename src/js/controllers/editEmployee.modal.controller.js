export default app => {
  app.controller('EditEmployeeModalCtrl', ['$scope', '$route', '$uibModalInstance', 'employeeService', 'employee', ($scope, $route, $uibModalInstance, employeeService, employee) => {
    $scope.employee = employee;
    $scope.edit = () => {
      let data = {
        id: $scope.employee._id,
        name: $scope.employee.name,
        gender: $scope.employee.gender,
        contactInfo: $scope.employee.contactInfo
      };
      employeeService.editEmployee(data);
      $uibModalInstance.close($route.reload());
    };
    $scope.cancel= () => {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
};