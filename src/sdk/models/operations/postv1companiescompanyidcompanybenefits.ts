import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1CompaniesCompanyIdCompanyBenefitsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdCompanyBenefitsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "benefit_type" })
  benefitType?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "responsible_for_employee_w2" })
  responsibleForEmployeeW2?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "responsible_for_employer_taxes" })
  responsibleForEmployerTaxes?: boolean;
}

export class PostV1CompaniesCompanyIdCompanyBenefitsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyIdCompanyBenefitsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody;
}

export class PostV1CompaniesCompanyIdCompanyBenefitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  companyBenefit?: shared.CompanyBenefit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
