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
import { DeleteV1ContractorsContractorIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.deleteV1ContractorsContractorId({
  contractorId: "facere",
}).then((res: DeleteV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteV1ContractorsContractorIdRequest](../../models/operations/deletev1contractorscontractoridrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteV1ContractorsContractorIdResponse](../../models/operations/deletev1contractorscontractoridresponse.md)>**


## getV1CompaniesCompanyIdContractors

Get all contractors, active and inactive, individual and business, for a company.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdContractorsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatus, ContractorType, ContractorWageType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.getV1CompaniesCompanyIdContractors({
  companyId: "ea",
  page: 3965.06,
  per: 6754.39,
}).then((res: GetV1CompaniesCompanyIdContractorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetV1CompaniesCompanyIdContractorsRequest](../../models/operations/getv1companiescompanyidcontractorsrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdContractorsResponse](../../models/operations/getv1companiescompanyidcontractorsresponse.md)>**


## getV1ContractorsContractorId

Get a contractor.

scope: `employees:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorsContractorIdResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatus, ContractorType, ContractorWageType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.getV1ContractorsContractorId({
  contractorId: "accusamus",
}).then((res: GetV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetV1ContractorsContractorIdRequest](../../models/operations/getv1contractorscontractoridrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetV1ContractorsContractorIdResponse](../../models/operations/getv1contractorscontractoridresponse.md)>**


## getV1ContractorsContractorUuidAddress

The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `contractors:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1ContractorsContractorUuidAddressResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.getV1ContractorsContractorUuidAddress({
  contractorUuid: "non",
}).then((res: GetV1ContractorsContractorUuidAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetV1ContractorsContractorUuidAddressRequest](../../models/operations/getv1contractorscontractoruuidaddressrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


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
import { GetV1ContractorsContractorUuidOnboardingStatusResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatusOnboardingStatus } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.getV1ContractorsContractorUuidOnboardingStatus({
  contractorUuid: "occaecati",
}).then((res: GetV1ContractorsContractorUuidOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetV1ContractorsContractorUuidOnboardingStatusRequest](../../models/operations/getv1contractorscontractoruuidonboardingstatusrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetV1ContractorsContractorUuidOnboardingStatusResponse](../../models/operations/getv1contractorscontractoruuidonboardingstatusresponse.md)>**


## postV1CompaniesCompanyIdContractors

Create an individual or business contractor.

scope: `employees:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdContractorsRequestBodyType,
  PostV1CompaniesCompanyIdContractorsRequestBodyWageType,
  PostV1CompaniesCompanyIdContractorsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatus, ContractorType, ContractorWageType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.postV1CompaniesCompanyIdContractors({
  requestBody: {
    businessName: "enim",
    ein: "accusamus",
    email: "Matilda_McKenzie50@hotmail.com",
    fileNewHireReport: false,
    firstName: "Kacie",
    hourlyRate: "40.0",
    isActive: false,
    lastName: "Will",
    middleInitial: "amet",
    selfOnboarding: false,
    ssn: "deserunt",
    startDate: "2020-01-11",
    type: PostV1CompaniesCompanyIdContractorsRequestBodyType.Individual,
    wageType: PostV1CompaniesCompanyIdContractorsRequestBodyWageType.Fixed,
    workState: "natus",
  },
  companyId: "omnis",
}).then((res: PostV1CompaniesCompanyIdContractorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostV1CompaniesCompanyIdContractorsRequest](../../models/operations/postv1companiescompanyidcontractorsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


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
  PutV1ContractorsContractorIdRequestBodyType,
  PutV1ContractorsContractorIdRequestBodyWageType,
  PutV1ContractorsContractorIdResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatus, ContractorType, ContractorWageType } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.putV1ContractorsContractorId({
  requestBody: {
    businessName: "molestiae",
    ein: "perferendis",
    email: "Elisha.Rau@yahoo.com",
    fileNewHireReport: false,
    firstName: "Effie",
    hourlyRate: "40.0",
    isActive: false,
    lastName: "Hoppe",
    middleInitial: "natus",
    selfOnboarding: false,
    ssn: "nobis",
    startDate: "2020-01-11",
    type: PutV1ContractorsContractorIdRequestBodyType.Individual,
    version: "vero",
    wageType: PutV1ContractorsContractorIdRequestBodyWageType.Fixed,
    workState: "architecto",
  },
  contractorId: "magnam",
}).then((res: PutV1ContractorsContractorIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutV1ContractorsContractorIdRequest](../../models/operations/putv1contractorscontractoridrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutV1ContractorsContractorIdResponse](../../models/operations/putv1contractorscontractoridresponse.md)>**


## putV1ContractorsContractorUuidAddress

The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.

scope: `contractors:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutV1ContractorsContractorUuidAddressResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.putV1ContractorsContractorUuidAddress({
  requestBody: {
    city: "New Fernestead",
    state: "quos",
    street1: "sint",
    street2: "accusantium",
    version: "mollitia",
    zip: "reiciendis",
  },
  contractorUuid: "mollitia",
}).then((res: PutV1ContractorsContractorUuidAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PutV1ContractorsContractorUuidAddressRequest](../../models/operations/putv1contractorscontractoruuidaddressrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


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
  PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatus,
  PutV1ContractorsContractorUuidOnboardingStatusResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { ContractorOnboardingStatusOnboardingStatus } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.contractors.putV1ContractorsContractorUuidOnboardingStatus({
  requestBody: {
    onboardingStatus: PutV1ContractorsContractorUuidOnboardingStatusRequestBodyOnboardingStatus.OnboardingCompleted,
  },
  contractorUuid: "ad",
}).then((res: PutV1ContractorsContractorUuidOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PutV1ContractorsContractorUuidOnboardingStatusRequest](../../models/operations/putv1contractorscontractoruuidonboardingstatusrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PutV1ContractorsContractorUuidOnboardingStatusResponse](../../models/operations/putv1contractorscontractoruuidonboardingstatusresponse.md)>**

