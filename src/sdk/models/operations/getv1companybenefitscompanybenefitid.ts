import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompanyBenefitsCompanyBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_benefit_id",
  })
  companyBenefitId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=with_employee_benefits",
  })
  withEmployeeBenefits?: boolean;
}

export class GetV1CompanyBenefitsCompanyBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyBenefit?: shared.CompanyBenefit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
