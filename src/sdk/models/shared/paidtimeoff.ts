import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// PaidTimeOff
/** 
 * The representation of paid time off in Gusto.
**/
export class PaidTimeOff extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accrual_balance" })
  accrualBalance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_method" })
  accrualMethod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_period" })
  accrualPeriod?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_rate" })
  accrualRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accrual_unit" })
  accrualUnit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "maximum_accrual_balance" })
  maximumAccrualBalance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "paid_at_termination" })
  paidAtTermination?: boolean;
}