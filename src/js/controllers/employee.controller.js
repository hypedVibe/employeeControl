import addEmp from '../views/addEmployee.html';

export default app => {
  app.controller('EmployeeCtrl', ['$scope', '$uibModal', '$log', 'employeeService', ($scope, $uibModal, $log, employeeService) => {

    employeeService.getAllEmployees().then(employees => {
      $scope.employees = employees.data;
    });

    $scope.addEmployee = () => {
      $uibModal.open({
        animation: true,
        template: addEmp,
        controller: 'AddEmployeeModalCtrl'
      });
    };
  }])
};