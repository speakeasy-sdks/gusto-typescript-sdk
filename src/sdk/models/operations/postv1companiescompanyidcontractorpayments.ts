import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export enum PostV1CompaniesCompanyIdContractorPaymentsRequestBodyPaymentMethodEnum {
  DirectDeposit = "Direct Deposit",
  Check = "Check",
  HistoricalPayment = "Historical Payment",
}

export class PostV1CompaniesCompanyIdContractorPaymentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bonus" })
  bonus?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "contractor_uuid" })
  contractorUuid: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "hours" })
  hours?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "payment_method" })
  paymentMethod?: PostV1CompaniesCompanyIdContractorPaymentsRequestBodyPaymentMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reimbursement" })
  reimbursement?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "wage" })
  wage?: number;
}

export class PostV1CompaniesCompanyIdContractorPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PostV1CompaniesCompanyIdContractorPaymentsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;
}

export class PostV1CompaniesCompanyIdContractorPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorPayment?: shared.ContractorPayment;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}
