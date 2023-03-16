import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetV1CompaniesCompanyIdContractorPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_id",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=contractor_uuid",
  })
  contractorUuid?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_date",
  })
  endDate: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=group_by_date",
  })
  groupByDate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_date",
  })
  startDate: string;
}

export class GetV1CompaniesCompanyIdContractorPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getV1CompaniesCompanyIdContractorPayments200ApplicationJSONOneOf?: any;
}
