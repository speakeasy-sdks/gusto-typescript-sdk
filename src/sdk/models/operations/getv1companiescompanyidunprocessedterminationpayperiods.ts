import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsPathParams;
}

export class GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: shared.UnprocessedTerminationPayPeriod })
  unprocessedTerminationPayPeriods?: shared.UnprocessedTerminationPayPeriod[];
}