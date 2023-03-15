import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1ProvisionRequestBodyCompanyAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_primary" })
  isPrimary?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_1" })
  street1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "street_2" })
  street2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "zip" })
  zip?: string;
}

export class PostV1ProvisionRequestBodyCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PostV1ProvisionRequestBodyCompanyAddresses })
  @Expose({ name: "addresses" })
  @Type(() => PostV1ProvisionRequestBodyCompanyAddresses)
  addresses?: PostV1ProvisionRequestBodyCompanyAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "number_employees" })
  numberEmployees?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "states" })
  states?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "trade_name" })
  tradeName?: string;
}

// PostV1ProvisionRequestBodyUser
/**
 * Information for the user who will be the primary payroll administrator for the new company.
 **/
export class PostV1ProvisionRequestBodyUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;
}

export class PostV1ProvisionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company" })
  @Type(() => PostV1ProvisionRequestBodyCompany)
  company: PostV1ProvisionRequestBodyCompany;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => PostV1ProvisionRequestBodyUser)
  user: PostV1ProvisionRequestBodyUser;
}

export class PostV1ProvisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1ProvisionRequestBody;
}

export class PostV1Provision200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "account_claim_url" })
  accountClaimUrl?: string;
}

export class PostV1ProvisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  postV1Provision200ApplicationJSONObject?: PostV1Provision200ApplicationJSON;
}
