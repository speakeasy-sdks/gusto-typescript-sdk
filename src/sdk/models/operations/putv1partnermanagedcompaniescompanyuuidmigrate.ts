import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "external_user_id" })
  externalUserId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ip_address" })
  ipAddress: string;
}

export class PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=company_uuid",
  })
  companyUuid: string;
}

export class PutV1PartnerManagedCompaniesCompanyUuidMigrate200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "migration_status" })
  migrationStatus?: string;
}

export class PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;

  @SpeakeasyMetadata()
  putV1PartnerManagedCompaniesCompanyUuidMigrate200ApplicationJSONObject?: PutV1PartnerManagedCompaniesCompanyUuidMigrate200ApplicationJSON;
}
