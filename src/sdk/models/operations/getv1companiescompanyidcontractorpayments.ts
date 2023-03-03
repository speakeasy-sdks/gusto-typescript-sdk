import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class GetV1CompaniesCompanyIdContractorPaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;
}

export class GetV1CompaniesCompanyIdContractorPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contractor_uuid" })
  contractorUuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by_date" })
  groupByDate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}

export class GetV1CompaniesCompanyIdContractorPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompaniesCompanyIdContractorPaymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1CompaniesCompanyIdContractorPaymentsQueryParams;
}

export class GetV1CompaniesCompanyIdContractorPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getV1CompaniesCompanyIdContractorPayments200ApplicationJSONOneOf?: any;
}