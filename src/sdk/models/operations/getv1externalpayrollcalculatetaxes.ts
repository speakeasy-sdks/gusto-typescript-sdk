import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1ExternalPayrollCalculateTaxesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=external_payroll_id",
  })
  externalPayrollId: string;
}

export class GetV1ExternalPayrollCalculateTaxesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ExternalPayrollTaxSuggestions })
  externalPayrollTaxSuggestions?: shared.ExternalPayrollTaxSuggestions[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
