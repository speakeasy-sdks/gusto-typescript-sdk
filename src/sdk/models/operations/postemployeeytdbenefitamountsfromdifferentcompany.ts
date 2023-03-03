import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}

export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "benefit_type" })
  benefitType?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_year" })
  taxYear: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ytd_company_contribution_amount" })
  ytdCompanyContributionAmount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ytd_employee_deduction_amount" })
  ytdEmployeeDeductionAmount: string;
}

export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostEmployeeYtdBenefitAmountsFromDifferentCompanyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequestBody;
}

export class PostEmployeeYtdBenefitAmountsFromDifferentCompanyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}