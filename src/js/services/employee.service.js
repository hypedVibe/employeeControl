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
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      editEmployee: (data) => {
        return $http.put(`/api/employees/${data.id}`, data)
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      }
    }
  }]);
};