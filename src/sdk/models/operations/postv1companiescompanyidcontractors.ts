import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostV1CompaniesCompanyIdContractorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}
export enum PostV1CompaniesCompanyIdContractorsRequestBodyTypeEnum {
  Individual = "Individual",
  Business = "Business",
}
export enum PostV1CompaniesCompanyIdContractorsRequestBodyWageTypeEnum {
  Fixed = "Fixed",
  Hourly = "Hourly",
}

export class PostV1CompaniesCompanyIdContractorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "business_name" })
  businessName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ein" })
  ein?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "file_new_hire_report" })
  fileNewHireReport?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hourly_rate" })
  hourlyRate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "middle_initial" })
  middleInitial?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "self_onboarding" })
  selfOnboarding?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ssn" })
  ssn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  startDate: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PostV1CompaniesCompanyIdContractorsRequestBodyTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_type" })
  wageType: PostV1CompaniesCompanyIdContractorsRequestBodyWageTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "work_state" })
  workState?: string;
}

export class PostV1CompaniesCompanyIdContractorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV1CompaniesCompanyIdContractorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostV1CompaniesCompanyIdContractorsRequestBody;
}

export class PostV1CompaniesCompanyIdContractorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractor?: shared.Contractor;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
