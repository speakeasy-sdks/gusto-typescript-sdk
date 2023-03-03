import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// ExternalPayrollBasic
/** 
 * The representation of an external payroll with minimal information.
**/
export class ExternalPayrollBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "check_date" })
  checkDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_end_date" })
  paymentPeriodEndDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_period_start_date" })
  paymentPeriodStartDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}