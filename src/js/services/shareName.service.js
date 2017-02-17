export default app => {
  app.factory('shareNameService', () => {
    let name = '';
    return {
      setName: employeeName => {
        name = employeeName;
      },
      getName: () => {
        return name;
      }
    }
  });
};