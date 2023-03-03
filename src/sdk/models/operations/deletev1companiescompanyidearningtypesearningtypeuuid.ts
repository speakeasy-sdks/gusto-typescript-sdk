import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_id" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=earning_type_uuid" })
  earningTypeUuid: string;
}

export class DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidPathParams;
}

export class DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}