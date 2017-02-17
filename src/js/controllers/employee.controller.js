import addEmp from '../views/addEmployee.html';
import editEmp from '../views/editEmployee.html';

export default app => {
  app.controller('EmployeeCtrl', ['$scope', '$route','$uibModal', '$log', 'employeeService', 'shareNameService',
    ($scope, $route, $uibModal, $log, employeeService, shareNameService) => {
    employeeService.getAllEmployees()
      .then(employees => {
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

    $scope.deleteEmployee = (id) => {
      employeeService.deleteEmployee({id});
      $route.reload();
    };

    $scope.getEmployeeName = (employee) => {
      shareNameService.setName(employee.name);
    };
  }])
};