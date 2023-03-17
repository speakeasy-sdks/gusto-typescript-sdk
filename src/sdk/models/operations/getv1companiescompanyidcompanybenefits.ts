import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompaniesCompanyIdCompanyBenefitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=enrollment_count",
  })
  enrollmentCount?: boolean;
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
