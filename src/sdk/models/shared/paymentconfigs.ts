/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Example response
 */
export class PaymentConfigs extends SpeakeasyBase {
  /**
   * Company uuid
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  /**
   * Payment limit only applicable for 2-day payroll
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fast_payment_limit" })
  fastPaymentLimit?: string;

  /**
   * Partner uuid
   */
  @SpeakeasyMetadata()
  @Expose({ name: "partner_uuid" })
  partnerUuid?: string;

  /**
   * Payment speed for 2-day / 4-day
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_speed" })
  paymentSpeed?: string;
}
