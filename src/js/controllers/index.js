import employeeCtrl from './employee.controller';
import addEmployeeModalCtrl from './addEmployee.modal.controller';
import editEmployeeModalCtrl from './editEmployee.modal.controller';
import employeeDetailsCtrl from './employeeDetails.controller';
import addSubordinateModalCtrl from './addSubordinate.modal.contoroller';

export default app => {
  addEmployeeModalCtrl(app);
  editEmployeeModalCtrl(app);
  employeeCtrl(app);
  addSubordinateModalCtrl(app);
  employeeDetailsCtrl(app);
};