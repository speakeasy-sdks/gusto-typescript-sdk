import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1CompanyBenefitsCompanyBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_benefit_id",
  })
  companyBenefitId: string;
}

export class PutV1CompanyBenefitsCompanyBenefitIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1CompanyBenefitsCompanyBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1CompanyBenefitsCompanyBenefitIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1CompanyBenefitsCompanyBenefitIdRequestBody;
}

export class PutV1CompanyBenefitsCompanyBenefitIdResponse extends SpeakeasyBase {
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
