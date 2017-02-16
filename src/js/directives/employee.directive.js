import employeeList from '../views/employeeList.html';

export default app => {
  app.directive('employeeList', () => {
    return {
      restrict: 'E',
      template: employeeList
    }
  })
}