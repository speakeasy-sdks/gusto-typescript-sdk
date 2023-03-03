import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DeleteV1EmployeeBenefitsEmployeeBenefitIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_benefit_id" })
  employeeBenefitId: string;
}

export class DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV1EmployeeBenefitsEmployeeBenefitIdPathParams;
}

export class DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}