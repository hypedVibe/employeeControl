export default app => {
  app.factory('shareDataService', () => {
    let data = {};

    return {
      setEmployeeData: (name, gender, contactInfo, dateAdded) => {
        data.name = name;
        data.gender = gender;
        data.contactInfo = contactInfo;
        data.dateAdded = dateAdded;
      },
      getEmployeeData: () => {
        return data;
      }
    }
  });
};