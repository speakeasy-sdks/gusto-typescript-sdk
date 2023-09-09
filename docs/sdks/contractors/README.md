# contractors

### Available Operations

* [deleteV1ContractorsContractorId](#deletev1contractorscontractorid) - Delete a contractor
* [getV1CompaniesCompanyIdContractors](#getv1companiescompanyidcontractors) - Get contractors of a company
* [getV1ContractorsContractorId](#getv1contractorscontractorid) - Get a contractor
* [getV1ContractorsContractorUuidAddress](#getv1contractorscontractoruuidaddress) - Get a contractor address
* [getV1ContractorsContractorUuidOnboardingStatus](#getv1contractorscontractoruuidonboardingstatus) - Get the contractor's onboarding status
* [postV1CompaniesCompanyIdContractors](#postv1companiescompanyidcontractors) - Create a contractor
* [putV1ContractorsContractorId](#putv1contractorscontractorid) - Update a contractor
* [putV1ContractorsContractorUuidAddress](#putv1contractorscontractoruuidaddress) - Update a contractor's address
* [putV1ContractorsContractorUuidOnboardingStatus](#putv1contractorscontractoruuidonboardingstatus) - Change the contractor's onboarding status

## deleteV1ContractorsContractorId

A contractor can only be deleted when there are no contractor payments.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1ContractorsContractorIdRequest, DeleteV1ContractorsContractorIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorId: string = "labore";

sdk.contractors.deleteV1ContractorsContractorId(contractorId).then((res: DeleteV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorId`                                               | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the contractor                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteV1ContractorsContractorIdResponse](../../models/operations/deletev1contractorscontractoridresponse.md)>**


## getV1CompaniesCompanyIdContractors

Get all contractors, active and inactive, individual and business, for a company.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdContractorsRequest,
  GetV1CompaniesCompanyIdContractorsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "modi";
const page: number = 1831.91;
const per: number = 3978.21;

sdk.contractors.getV1CompaniesCompanyIdContractors(companyId, page, per).then((res: GetV1CompaniesCompanyIdContractorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdContractorsResponse](../../models/operations/getv1companiescompanyidcontractorsresponse.md)>**


## getV1ContractorsContractorId

Get a contractor.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorsContractorIdRequest, GetV1ContractorsContractorIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorId: string = "cupiditate";

sdk.contractors.getV1ContractorsContractorId(contractorId).then((res: GetV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorId`                                               | *string*                                                     | :heavy_check_mark:                                           | The ID or UUID of the contractor                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorIdResponse](../../models/operations/getv1contractorscontractoridresponse.md)>**


## getV1ContractorsContractorUuidAddress

The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `contractors:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ContractorsContractorUuidAddressRequest,
  GetV1ContractorsContractorUuidAddressResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "quos";

sdk.contractors.getV1ContractorsContractorUuidAddress(contractorUuid).then((res: GetV1ContractorsContractorUuidAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidAddressResponse](../../models/operations/getv1contractorscontractoruuidaddressresponse.md)>**


## getV1ContractorsContractorUuidOnboardingStatus

Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.

scope: `contractors.read`

## onboarding_status

### Admin-facilitated onboarding
| onboarding_status | Description |
|:------------------|------------:|
| `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
| `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
| `onboarding_completed` | Contractor has been fully onboarded and verified. |

### Contractor self-onboarding

| onboarding_status | Description |
| --- | ----------- |
| `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
| `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
| `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
| `self_onboarding_started` | Contractor has started the self-onboarding process. |
| `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
| `onboarding_completed` | Contractor has been fully onboarded and verified. |

## onboarding_steps

| onboarding_steps | Requirement(s) to be completed |
|:-----------------|-------------------------------:|
| `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
| `add_address` | Add contractor address. |
| `compensation_details` | Add contractor compensation. |
| `payment_details` | Set up contractor's direct deposit or set to check. |
| `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
| `file_new_hire_report` | Contractor new hire report is generated. |

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1ContractorsContractorUuidOnboardingStatusRequest,
  GetV1ContractorsContractorUuidOnboardingStatusResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "perferendis";

sdk.contractors.getV1ContractorsContractorUuidOnboardingStatus(contractorUuid).then((res: GetV1ContractorsContractorUuidOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contractorUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the contractor                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidOnboardingStatusResponse](../../models/operations/getv1contractorscontractoruuidonboardingstatusresponse.md)>**


## postV1CompaniesCompanyIdContractors

Create an individual or business contractor.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdContractorsRequest,
  PostV1CompaniesCompanyIdContractorsRequestBody,
  PostV1CompaniesCompanyIdContractorsRequestBodyType,
  PostV1CompaniesCompanyIdContractorsRequestBodyWageType,
  PostV1CompaniesCompanyIdContractorsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "magni";
const requestBody: PostV1CompaniesCompanyIdContractorsRequestBody = {
  businessName: "assumenda",
  ein: "ipsam",
  email: "Caden.Pagac@gmail.com",
  fileNewHireReport: false,
  firstName: "Mckayla",
  hourlyRate: "40.0",
  isActive: false,
  lastName: "Rice",
  middleInitial: "labore",
  selfOnboarding: false,
  ssn: "delectus",
  startDate: "2020-01-11",
  type: PostV1CompaniesCompanyIdContractorsRequestBodyType.Individual,
  wageType: PostV1CompaniesCompanyIdContractorsRequestBodyWageType.Fixed,
  workState: "eligendi",
};

sdk.contractors.postV1CompaniesCompanyIdContractors(companyId, requestBody).then((res: PostV1CompaniesCompanyIdContractorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The UUID of the company                                                                                                                |
| `requestBody`                                                                                                                          | [operations.PostV1CompaniesCompanyIdContractorsRequestBody](../../models/operations/postv1companiescompanyidcontractorsrequestbody.md) | :heavy_minus_sign:                                                                                                                     | Create an individual or business contractor.                                                                                           |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdContractorsResponse](../../models/operations/postv1companiescompanyidcontractorsresponse.md)>**


## putV1ContractorsContractorId

Update a contractor.

`scope: employees.write`

> 🚧 Warning
>
> Watch out when changing a contractor's type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorIdRequest,
  PutV1ContractorsContractorIdRequestBody,
  PutV1ContractorsContractorIdRequestBodyType,
  PutV1ContractorsContractorIdRequestBodyWageType,
  PutV1ContractorsContractorIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorId: string = "sint";
const requestBody: PutV1ContractorsContractorIdRequestBody = {
  businessName: "aliquid",
  ein: "provident",
  email: "Kianna89@hotmail.com",
  fileNewHireReport: false,
  firstName: "Veda",
  hourlyRate: "40.0",
  isActive: false,
  lastName: "Parisian",
  middleInitial: "in",
  selfOnboarding: false,
  ssn: "in",
  startDate: "2020-01-11",
  type: PutV1ContractorsContractorIdRequestBodyType.Business,
  version: "maiores",
  wageType: PutV1ContractorsContractorIdRequestBodyWageType.Hourly,
  workState: "dicta",
};

sdk.contractors.putV1ContractorsContractorId(contractorId, requestBody).then((res: PutV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `contractorId`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID or UUID of the contractor                                                                                         |
| `requestBody`                                                                                                            | [operations.PutV1ContractorsContractorIdRequestBody](../../models/operations/putv1contractorscontractoridrequestbody.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PutV1ContractorsContractorIdResponse](../../models/operations/putv1contractorscontractoridresponse.md)>**


## putV1ContractorsContractorUuidAddress

The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `contractors:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorUuidAddressRequest,
  PutV1ContractorsContractorUuidAddressRequestBody,
  PutV1ContractorsContractorUuidAddressResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "magnam";
const requestBody: PutV1ContractorsContractorUuidAddressRequestBody = {
  city: "Schulistview",
  state: "aliquid",
  street1: "laborum",
  street2: "accusamus",
  version: "non",
  zip: "occaecati",
};

sdk.contractors.putV1ContractorsContractorUuidAddress(contractorUuid, requestBody).then((res: PutV1ContractorsContractorUuidAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `contractorUuid`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The UUID of the contractor                                                                                                                 |
| `requestBody`                                                                                                                              | [operations.PutV1ContractorsContractorUuidAddressRequestBody](../../models/operations/putv1contractorscontractoruuidaddressrequestbody.md) | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutV1ContractorsContractorUuidAddressResponse](../../models/operations/putv1contractorscontractoruuidaddressresponse.md)>**


## putV1ContractorsContractorUuidOnboardingStatus

scope: `contractors:write`

Updates a contractor's onboarding status.
Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.

| Action | current onboarding_status | new onboarding_status |
|:------------------|:------------:|----------:|
| Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
| Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
| Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
| Review an employee's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
| Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_review` | `onboarding_completed` |

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1ContractorsContractorUuidOnboardingStatusRequest,
  PutV1ContractorsContractorUuidOnboardingStatusRequestBody,
  PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatus,
  PutV1ContractorsContractorUuidOnboardingStatusResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const contractorUuid: string = "enim";
const requestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody = {
  onboardingStatus: PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatus.OnboardingCompleted,
};

sdk.contractors.putV1ContractorsContractorUuidOnboardingStatus(contractorUuid, requestBody).then((res: PutV1ContractorsContractorUuidOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contractorUuid`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The UUID of the contractor                                                                                                                                   |
| `requestBody`                                                                                                                                                | [operations.PutV1ContractorsContractorUuidOnboardingStatusRequestBody](../../models/operations/putv1contractorscontractoruuidonboardingstatusrequestbody.md) | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PutV1ContractorsContractorUuidOnboardingStatusResponse](../../models/operations/putv1contractorscontractoruuidonboardingstatusresponse.md)>**

