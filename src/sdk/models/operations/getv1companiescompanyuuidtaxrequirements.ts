import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetV1CompaniesCompanyUuidTaxRequirementsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyUuidTaxRequirementsPathParams;
}

export class GetV1CompaniesCompanyUuidTaxRequirements200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "setup_complete" })
  setupComplete?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

export class GetV1CompaniesCompanyUuidTaxRequirementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({
    elemType: GetV1CompaniesCompanyUuidTaxRequirements200ApplicationJSON,
  })
  getV1CompaniesCompanyUuidTaxRequirements200ApplicationJSONObjects?: GetV1CompaniesCompanyUuidTaxRequirements200ApplicationJSON[];
}
