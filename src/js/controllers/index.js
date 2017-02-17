import employeeCtrl from './employee.controller';
import addEmployeeModalCtrl from './addEmployee.modal.controller';

export default app => {
  addEmployeeModalCtrl(app);
  employeeCtrl(app);
};