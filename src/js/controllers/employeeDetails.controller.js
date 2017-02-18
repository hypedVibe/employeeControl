import addSubord from '../views/addSubordinate.html';

export default app => {
  app.controller('EmployeeDetailsCtrl', ['$scope', '$route', '$routeParams', '$uibModal', 'employeeDetailsService', 'shareNameService', 
    ($scope, $route, $routeParams, $uibModal, employeeDetailsService, shareNameService) => {
    
    $scope.name = shareNameService.getName();

    employeeDetailsService.getSubordinants($routeParams.id)
      .then(result => {
        $scope.subordinates = result.data;
      });

    $scope.addSubordinate = () => {
      $uibModal.open({
        animation: true,
        template: addSubord,
        controller: 'AddSubordinateModalCtrl'
      });
    };

    $scope.deleteSubordinate = subordinate => {
      employeeDetailsService.deleteSubordinate($routeParams.id, {subordinate});
      $route.reload();
    }
  }]);
};