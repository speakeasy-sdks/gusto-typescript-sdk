import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PayrollCheck extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_uuid" })
  payrollUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "printing_format" })
  printingFormat?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "request_uuid" })
  requestUuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "starting_check_number" })
  startingCheckNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}