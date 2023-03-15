import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=signatory_uuid",
  })
  signatoryUuid: string;
}

export class DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidPathParams;
}

export class DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
