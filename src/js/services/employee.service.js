export default app => {
  app.factory('employeeService', ['$http', ($http) => {
    return {
      getAllEmployees: () => {
        return $http.get('/api/employees')
          .then(employees => {
            return employees;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      addEmployee: (data) => {
        return $http.post('/api/addemployee', data)
          .then(employee => {
            return employee;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      }
    }
  }]);
};