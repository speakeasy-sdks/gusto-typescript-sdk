import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompaniesCompanyIdCompanyBenefitsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class GetV1CompaniesCompanyIdCompanyBenefitsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=enrollment_count",
  })
  enrollmentCount?: boolean;
}

export class GetV1CompaniesCompanyIdCompanyBenefitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdCompanyBenefitsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdCompanyBenefitsQueryParams;
}

export class GetV1CompaniesCompanyIdCompanyBenefitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CompanyBenefit })
  companyBenefits?: shared.CompanyBenefit[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
