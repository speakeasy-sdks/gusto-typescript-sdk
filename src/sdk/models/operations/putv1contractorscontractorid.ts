import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export enum PutV1ContractorsContractorIdRequestBodyTypeEnum {
  Individual = "Individual",
  Business = "Business",
}
export enum PutV1ContractorsContractorIdRequestBodyWageTypeEnum {
  Fixed = "Fixed",
  Hourly = "Hourly",
}

export class PutV1ContractorsContractorIdRequestBody extends SpeakeasyBase {
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
  startDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PutV1ContractorsContractorIdRequestBodyTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;

  @SpeakeasyMetadata()
  @Expose({ name: "wage_type" })
  wageType?: PutV1ContractorsContractorIdRequestBodyWageTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "work_state" })
  workState?: string;
}

export class PutV1ContractorsContractorIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1ContractorsContractorIdRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_id",
  })
  contractorId: string;
}

export class PutV1ContractorsContractorIdResponse extends SpeakeasyBase {
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
