import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PayrollReversal extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approved_at" })
  approvedAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reversal_payroll_uuid" })
  reversalPayrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reversed_employee_uuids" })
  reversedEmployeeUuids?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "reversed_payroll_uuid" })
  reversedPayrollUuid?: string;
}