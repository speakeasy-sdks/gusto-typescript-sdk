# companyBenefits

### Available Operations

* [deleteV1CompanyBenefitsCompanyBenefitId](#deletev1companybenefitscompanybenefitid) - Delete a company benefit
* [getV1Benefits](#getv1benefits) - Get all benefits supported by Gusto
* [getV1BenefitsBenefitId](#getv1benefitsbenefitid) - Get a supported benefit by ID
* [getV1BenefitsBenefitsIdRequirements](#getv1benefitsbenefitsidrequirements) - Get benefit fields requirements by ID
* [getV1BenefitsCompanyBenefitIdSummary](#getv1benefitscompanybenefitidsummary) - Get company benefit summary by company benefit id.
* [getV1CompaniesCompanyIdCompanyBenefits](#getv1companiescompanyidcompanybenefits) - Get benefits for a company
* [getV1CompanyBenefitsCompanyBenefitId](#getv1companybenefitscompanybenefitid) - Get a company benefit
* [postV1CompaniesCompanyIdCompanyBenefits](#postv1companiescompanyidcompanybenefits) - Create a company benefit
* [putV1CompanyBenefitsCompanyBenefitId](#putv1companybenefitscompanybenefitid) - Update a company benefit

## deleteV1CompanyBenefitsCompanyBenefitId

The following must be true in order to delete a company benefit
  - There are no employee benefits associated with the company benefit
  - There are no payroll items associated with the company benefit
  - The benefit is not managed by a Partner or by Gusto (type must be 'External')

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId("itaque").then((res: DeleteV1CompanyBenefitsCompanyBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyBenefitId`                                           | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company benefit                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/deletev1companybenefitscompanybenefitidresponse.md)>**


## getV1Benefits

Returns all benefits supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1BenefitsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1Benefits().then((res: GetV1BenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1BenefitsResponse](../../models/operations/getv1benefitsresponse.md)>**


## getV1BenefitsBenefitId

Returns a benefit supported by Gusto.

The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.

scope: `benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1BenefitsBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1BenefitsBenefitId("incidunt").then((res: GetV1BenefitsBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `benefitId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The benefit type in Gusto.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1BenefitsBenefitIdResponse](../../models/operations/getv1benefitsbenefitidresponse.md)>**


## getV1BenefitsBenefitsIdRequirements

Returns field requirements for the requested benefit type.

scope: `benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1BenefitsBenefitsIdRequirementsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1BenefitsBenefitsIdRequirements("enim").then((res: GetV1BenefitsBenefitsIdRequirementsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `benefitId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The benefit type in Gusto.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1BenefitsBenefitsIdRequirementsResponse](../../models/operations/getv1benefitsbenefitsidrequirementsresponse.md)>**


## getV1BenefitsCompanyBenefitIdSummary

Returns summary benefit data for the requested company benefit id.

scope: `benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1BenefitsCompanyBenefitIdSummaryResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1BenefitsCompanyBenefitIdSummary("consequatur", false, "2022-12-31", "2022-01-01").then((res: GetV1BenefitsCompanyBenefitIdSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyBenefitId`                                           | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company benefit                              |                                                              |
| `detailed`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Display employee payroll item summary                        |                                                              |
| `endDate`                                                    | *string*                                                     | :heavy_minus_sign:                                           | The end date for which to retrieve company benefit summary   | 2022-12-31                                                   |
| `startDate`                                                  | *string*                                                     | :heavy_minus_sign:                                           | The start date for which to retrieve company benefit summary | 2022-01-01                                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetV1BenefitsCompanyBenefitIdSummaryResponse](../../models/operations/getv1benefitscompanybenefitidsummaryresponse.md)>**


## getV1CompaniesCompanyIdCompanyBenefits

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

scope: `company_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdCompanyBenefitsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1CompaniesCompanyIdCompanyBenefits("est", false).then((res: GetV1CompaniesCompanyIdCompanyBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `enrollmentCount`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to return employee enrollment count                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse](../../models/operations/getv1companiescompanyidcompanybenefitsresponse.md)>**


## getV1CompanyBenefitsCompanyBenefitId

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.

scope: `company_benefits:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyBenefitsCompanyBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.getV1CompanyBenefitsCompanyBenefitId("quibusdam", false).then((res: GetV1CompanyBenefitsCompanyBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                       | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `companyBenefitId`                                              | *string*                                                        | :heavy_check_mark:                                              | The UUID of the company benefit                                 |
| `withEmployeeBenefits`                                          | *boolean*                                                       | :heavy_minus_sign:                                              | Whether to return employee benefits associated with the benefit |
| `config`                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)    | :heavy_minus_sign:                                              | Available config options for making requests.                   |


### Response

**Promise<[operations.GetV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/getv1companybenefitscompanybenefitidresponse.md)>**


## postV1CompaniesCompanyIdCompanyBenefits

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

scope: `company_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompaniesCompanyIdCompanyBenefitsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.postV1CompaniesCompanyIdCompanyBenefits("explicabo", {
  active: false,
  benefitType: 6471.74,
  description: "distinctio",
  responsibleForEmployeeW2: false,
  responsibleForEmployerTaxes: false,
}).then((res: PostV1CompaniesCompanyIdCompanyBenefitsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The UUID of the company                                                                                                                        |
| `requestBody`                                                                                                                                  | [operations.PostV1CompaniesCompanyIdCompanyBenefitsRequestBody](../../models/operations/postv1companiescompanyidcompanybenefitsrequestbody.md) | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdCompanyBenefitsResponse](../../models/operations/postv1companiescompanyidcompanybenefitsresponse.md)>**


## putV1CompanyBenefitsCompanyBenefitId

Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.

Note that company benefits can be deactivated only when no employees are enrolled.

scope: `company_benefits:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1CompanyBenefitsCompanyBenefitIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companyBenefits.putV1CompanyBenefitsCompanyBenefitId("quibusdam", {
  active: false,
  description: "labore",
  version: "modi",
}).then((res: PutV1CompanyBenefitsCompanyBenefitIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `companyBenefitId`                                                                                                                       | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The UUID of the company benefit                                                                                                          |
| `requestBody`                                                                                                                            | [operations.PutV1CompanyBenefitsCompanyBenefitIdRequestBody](../../models/operations/putv1companybenefitscompanybenefitidrequestbody.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PutV1CompanyBenefitsCompanyBenefitIdResponse](../../models/operations/putv1companybenefitscompanybenefitidresponse.md)>**

