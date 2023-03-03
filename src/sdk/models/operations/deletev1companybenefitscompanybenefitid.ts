import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class DeleteV1CompanyBenefitsCompanyBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_benefit_id" })
  companyBenefitId: string;
}

export class DeleteV1CompanyBenefitsCompanyBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1CompanyBenefitsCompanyBenefitIdPathParams;
}

export class DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrorsBase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "full_message" })
  fullMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrorsBase })
  @Expose({ name: "base" })
  @Type(() => DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrorsBase)
  base?: DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrorsBase[];
}

export class DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  @Type(() => DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrors)
  errors?: DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONErrors;
}

export class DeleteV1CompanyBenefitsCompanyBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSONObject?: DeleteV1CompanyBenefitsCompanyBenefitId422ApplicationJSON;
}