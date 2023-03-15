import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PayrollBlockersErrorErrorsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;
}

export class PayrollBlockersErrorErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error_key" })
  errorKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => PayrollBlockersErrorErrorsMetadata)
  metadata?: PayrollBlockersErrorErrorsMetadata;
}

// PayrollBlockersError
/**
 * Payroll Blockers Error
 *
 * For detailed information, see the [Payroll Blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers)
 **/
export class PayrollBlockersError extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PayrollBlockersErrorErrors })
  @Expose({ name: "errors" })
  @Type(() => PayrollBlockersErrorErrors)
  errors?: PayrollBlockersErrorErrors[];
}
