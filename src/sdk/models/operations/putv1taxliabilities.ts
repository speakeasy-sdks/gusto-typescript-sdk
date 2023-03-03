import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1TaxLiabilitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class PutV1TaxLiabilitiesRequestBodyLiabilitySelections extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "last_unpaid_external_payroll_uuid" })
  lastUnpaidExternalPayrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tax_id" })
  taxId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unpaid_liability_amount" })
  unpaidLiabilityAmount?: number;
}

export class PutV1TaxLiabilitiesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PutV1TaxLiabilitiesRequestBodyLiabilitySelections })
  @Expose({ name: "liability_selections" })
  @Type(() => PutV1TaxLiabilitiesRequestBodyLiabilitySelections)
  liabilitySelections?: PutV1TaxLiabilitiesRequestBodyLiabilitySelections[];
}

export class PutV1TaxLiabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1TaxLiabilitiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1TaxLiabilitiesRequestBody;
}

export class PutV1TaxLiabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: shared.TaxLiabilitiesSelections })
  taxLiabilitiesSelections?: shared.TaxLiabilitiesSelections[];

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}