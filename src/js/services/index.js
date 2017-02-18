import employeeService from './employee.service';
import employeeDetailsService from './employeeDetails.service';
import shareDataService from './shareData.service';

export default app => {
  employeeService(app);
  employeeDetailsService(app);
  shareDataService(app);
};