import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class PutV1GarnishmentsGarnishmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=garnishment_id" })
  garnishmentId: string;
}

export class PutV1GarnishmentsGarnishmentIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "annual_maximum" })
  annualMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "court_ordered" })
  courtOrdered?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "deduct_as_percentage" })
  deductAsPercentage?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pay_period_maximum" })
  payPeriodMaximum?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recurring" })
  recurring?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "times" })
  times?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version: string;
}

export class PutV1GarnishmentsGarnishmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV1GarnishmentsGarnishmentIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutV1GarnishmentsGarnishmentIdRequestBody;
}

export class PutV1GarnishmentsGarnishmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  garnishment?: shared.Garnishment;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  unprocessableEntityErrorObject?: shared.UnprocessableEntityErrorObject;
}