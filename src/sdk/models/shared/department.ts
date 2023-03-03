import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Department extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "company_uuid" })
  companyUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractors" })
  contractors?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "employees" })
  employees?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}