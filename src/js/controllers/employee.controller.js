import addEmp from '../views/addEmployee.html';
import editEmp from '../views/editEmployee.html';

export default app => {
  app.controller('EmployeeCtrl', ['$scope', '$uibModal', '$log', 'employeeService', ($scope, $uibModal, $log, employeeService) => {

    $scope.employee = {};

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

    $scope.editEmployee = (employee) => {
      $uibModal.open({
        animation: true,
        template: editEmp,
        controller: 'EditEmployeeModalCtrl',
        resolve: {
          employee: () => {
            return employee;
          }
        }
      });
    };
  }])
};