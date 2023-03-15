import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contractor_payment_id",
  })
  contractorPaymentId: string;
}

export class DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentPathParams;
}

export class DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
