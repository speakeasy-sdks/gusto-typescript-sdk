import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetV1ContractorPaymentsContractorPaymentUuidReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contractor_payment_uuid" })
  contractorPaymentUuid: string;
}

export class GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1ContractorPaymentsContractorPaymentUuidReceiptPathParams;
}

export class GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contractorPaymentReceipt?: shared.ContractorPaymentReceipt;

  @SpeakeasyMetadata()
  statusCode: number;
}