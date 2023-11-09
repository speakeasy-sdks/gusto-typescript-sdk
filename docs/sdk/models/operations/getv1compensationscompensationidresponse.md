# GetV1CompensationsCompensationIdResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `body`                                                            | *Uint8Array*                                                      | :heavy_minus_sign:                                                | N/A                                                               |
| `compensation`                                                    | [shared.Compensation](../../../sdk/models/shared/compensation.md) | :heavy_minus_sign:                                                | Example response                                                  |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                | Raw HTTP response; suitable for custom response parsing           |