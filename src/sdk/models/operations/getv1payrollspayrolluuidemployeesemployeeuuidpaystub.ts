import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payroll_id" })
  payrollId: string;
}

export class GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubPathParams;
}

export class GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}