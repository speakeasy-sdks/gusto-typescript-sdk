# IndustrySelection
(*industrySelection*)

### Available Operations

* [getV1CompanyIndustry](#getv1companyindustry) - Get a company industry selection
* [putV1CompanyIndustry](#putv1companyindustry) - Update a company industry selection

## getV1CompanyIndustry

Get industry selection for the company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyIndustryRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "string";

  const res = await sdk.industrySelection.getV1CompanyIndustry(companyId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyIndustryResponse](../../sdk/models/operations/getv1companyindustryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1CompanyIndustry

Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyIndustryRequest, PutV1CompanyIndustryRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

async function run() {
  const sdk = new Gusto({
    security: {
      authorization: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });
const companyId: string = "string";
const requestBody: PutV1CompanyIndustryRequestBody = {
  naicsCode: "string",
  sicCodes: [
    "string",
  ],
  title: "string",
};

  const res = await sdk.industrySelection.putV1CompanyIndustry(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `companyId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The UUID of the company                                                                                      |
| `requestBody`                                                                                                | [operations.PutV1CompanyIndustryRequestBody](../../sdk/models/operations/putv1companyindustryrequestbody.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PutV1CompanyIndustryResponse](../../sdk/models/operations/putv1companyindustryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
