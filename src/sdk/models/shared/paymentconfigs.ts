import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PaymentConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fast_payment_limit" })
  fastPaymentLimit?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "partner_uuid" })
  partnerUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_speed" })
  paymentSpeed?: string;
}
