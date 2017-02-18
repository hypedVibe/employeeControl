export default app => {
  app.controller('AddEmployeeModalCtrl', ['$scope', '$route', '$uibModalInstance', 'employeeService', 
    ($scope, $route, $uibModalInstance, employeeService) => {
      
    $scope.add = () => {
      let data = {
        name: $scope.name,
        gender: $scope.gender,
        contactInfo: $scope.contactInfo,
        dateAdded: getDate(),
        startTime: $scope.startTime,
        finishTime: $scope.finishTime
      };
      employeeService.addEmployee(data);
      $uibModalInstance.close($route.reload());
    };
    $scope.cancel = () => {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
};

function getDate() {
  const date = new Date();
  let resultDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  return resultDate;
}