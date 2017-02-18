export default app => {
  app.factory('employeeDetailsService', ['$http', $http => {
    return {
      getSubordinants: id => {
        return $http.get(`/api/subords/${id}`)
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      addSubordinate: (id, data) => {
        return $http.put(`/api/subords/${id}`, data)
          .then(msg => {
            return msg;
          })
          .catch(err => {
            alert('Something terrible just happened');
          });
      },
      deleteSubordinate: (id, data) => {
        return $http({
          url: `/api/subords/${id}`,
          method: 'DELETE',
          data: data,
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