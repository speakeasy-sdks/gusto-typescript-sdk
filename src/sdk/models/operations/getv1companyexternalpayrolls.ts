import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetV1CompanyExternalPayrollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_uuid" })
  companyUuid: string;
}

export class GetV1CompanyExternalPayrollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CompanyExternalPayrollsPathParams;
}

export class GetV1CompanyExternalPayrollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ExternalPayrollBasic })
  externalPayrollBasics?: shared.ExternalPayrollBasic[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}