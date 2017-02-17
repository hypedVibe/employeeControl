import employeeService from './employee.service';
import employeeDetailsService from './employeeDetails.service';
import shareNameService from './shareName.service';

export default app => {
  employeeService(app);
  employeeDetailsService(app);
  shareNameService(app);
};