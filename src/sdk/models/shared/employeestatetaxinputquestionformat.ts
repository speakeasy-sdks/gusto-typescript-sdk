/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class EmployeeStateTaxInputQuestionFormatOptions extends SpeakeasyBase {
  /**
   * A display label that corresponds to the answer value
   */
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  /**
   * An allowed value to answer the question
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class EmployeeStateTaxInputQuestionFormat extends SpeakeasyBase {
  /**
   * For "Select" type questions, the allowed values and display labels.
   */
  @SpeakeasyMetadata({ elemType: EmployeeStateTaxInputQuestionFormatOptions })
  @Expose({ name: "options" })
  @Type(() => EmployeeStateTaxInputQuestionFormatOptions)
  options?: EmployeeStateTaxInputQuestionFormatOptions[];

  /**
   * Describes the type of question - Text, Number, Select, Currency
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}
