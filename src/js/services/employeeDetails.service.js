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
      }
    }
  }]);
};