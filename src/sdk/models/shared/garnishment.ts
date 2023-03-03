import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// Garnishment
/** 
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
**/
export class Garnishment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "annual_maximum" })
  annualMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "court_ordered" })
  courtOrdered?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  deductAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "employee_uuid" })
  employeeUuid?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period_maximum" })
  payPeriodMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recurring" })
  recurring?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "times" })
  times?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}