export default app => {
  app.controller('AddSubordinateModalCtrl', ['$scope', '$route', '$routeParams', '$uibModalInstance', 'employeeDetailsService', 
    ($scope, $route, $routeParams,$uibModalInstance, employeeDetailService) => {

      $scope.add = () => {
        let data = {
          subordinate: $scope.subordinate
        };
        employeeDetailService.addSubordinate($routeParams.id, data);
        $uibModalInstance.close($route.reload());
      };

      $scope.cancel = () => {
        $uibModalInstance.dismiss('cancel');
      };
  }]);
};