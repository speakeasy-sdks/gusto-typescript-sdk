import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class UnprocessableEntityErrorObjectErrors extends SpeakeasyBase {
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
  metadata?: Record<string, any>;
}

// UnprocessableEntityErrorObject
/**
 * Unprocessable Entity
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 *
 **/
export class UnprocessableEntityErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UnprocessableEntityErrorObjectErrors })
  @Expose({ name: "errors" })
  @Type(() => UnprocessableEntityErrorObjectErrors)
  errors?: UnprocessableEntityErrorObjectErrors[];
}
