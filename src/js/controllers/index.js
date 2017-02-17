import employeeCtrl from './employee.controller';
import addEmployeeModalCtrl from './addEmployee.modal.controller';
import editEmployeeModalCtrl from './editEmployee.modal.controller';

export default app => {
  addEmployeeModalCtrl(app);
  editEmployeeModalCtrl(app);
  employeeCtrl(app);
};