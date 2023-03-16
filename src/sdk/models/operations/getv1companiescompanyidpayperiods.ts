import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetV1CompaniesCompanyIdPayPeriodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_date",
  })
  endDate?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_date",
  })
  startDate?: string;
}

export class GetV1CompaniesCompanyIdPayPeriodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PayPeriod })
  payPeriods?: shared.PayPeriod[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
