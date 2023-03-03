import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1CompanyBenefitsCompanyBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_benefit_id" })
  companyBenefitId: string;
}

export class GetV1CompanyBenefitsCompanyBenefitIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_employee_benefits" })
  withEmployeeBenefits?: boolean;
}

export class GetV1CompanyBenefitsCompanyBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyBenefitsCompanyBenefitIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompanyBenefitsCompanyBenefitIdQueryParams;
}

export class GetV1CompanyBenefitsCompanyBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyBenefit?: shared.CompanyBenefit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}