export default app => {
  app.factory('employeeService', ['$http', $http => {
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
      addEmployee: data => {
        return $http.post('/api/employees', data)
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      editEmployee: data => {
        return $http.put('/api/employees', data)
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      deleteEmployee: id => {
        return $http({
          url: '/api/employees',
          method: 'DELETE',
          data: id,
          headers: {
            "Content-Type": "application/json"
          }
        })
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