export default app => {
  app.factory('employeeService', ['$http', ($http) => {
    return {
      getAllEmployees: () => {
        return $http.get('/api/employees')
          .then(employees => {
            return employees;
          });
      }
    }
  }]);
};