import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1BenefitsCompanyBenefitIdSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_benefit_id" })
  companyBenefitId: string;
}

export class GetV1BenefitsCompanyBenefitIdSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}

export class GetV1BenefitsCompanyBenefitIdSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1BenefitsCompanyBenefitIdSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1BenefitsCompanyBenefitIdSummaryQueryParams;
}

export class GetV1BenefitsCompanyBenefitIdSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  benefitSummary?: shared.BenefitSummary;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}