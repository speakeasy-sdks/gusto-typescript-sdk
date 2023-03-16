import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSetsRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "effective_from" })
  effectiveFrom?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata({
    elemType:
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSetsRequirements,
  })
  @Expose({ name: "requirements" })
  @Type(
    () =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSetsRequirements
  )
  requirements?: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSetsRequirements[];

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

export class PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSets,
  })
  @Expose({ name: "requirement_sets" })
  @Type(
    () =>
      PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSets
  )
  requirementSets?: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyRequirementSets[];
}

export class PutV1CompaniesCompanyUuidTaxRequirementsStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=state",
  })
  state: string;
}

export class PutV1CompaniesCompanyUuidTaxRequirementsStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
