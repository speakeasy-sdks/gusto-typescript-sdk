import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EmployeeFederalTaxW4DataTypeEnum {
    Pre2020W4 = "pre_2020_w4",
    Rev2020W4 = "rev_2020_w4"
}

export class EmployeeFederalTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additional_withholding" })
  additionalWithholding?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deductions" })
  deductions?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dependents_amount" })
  dependentsAmount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "extra_withholding" })
  extraWithholding?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "federal_withholding_allowance" })
  federalWithholdingAllowance?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filing_status" })
  filingStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "other_income" })
  otherIncome?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "two_jobs" })
  twoJobs?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "w4_data_type" })
  w4DataType?: EmployeeFederalTaxW4DataTypeEnum;
}