# Companies
(*companies*)

### Available Operations

* [getV1Companies](#getv1companies) - Get a company
* [getV1CompaniesCompanyIdAdmins](#getv1companiescompanyidadmins) - Get all the admins at a company
* [getV1CompaniesCompanyIdCustomFields](#getv1companiescompanyidcustomfields) - Get the custom fields of a company
* [getV1CompanyFinishOnboarding](#getv1companyfinishonboarding) - Finish company onboarding
* [getV1CompanyOnboardingStatus](#getv1companyonboardingstatus) - Get the company's onboarding status
* [postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService](#postpartnermanagedcompaniescompanyuuidaccepttermsofservice) - Accept terms of service for a company user
* [postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService](#postpartnermanagedcompaniescompanyuuidretrievetermsofservice) - Retrieve terms of service status for a company user
* [postV1CompaniesCompanyIdAdmins](#postv1companiescompanyidadmins) - Create an admin for the company
* [postV1PartnerManagedCompanies](#postv1partnermanagedcompanies) - Create a partner managed company
* [postV1Provision](#postv1provision) - Create a company
* [putV1PartnerManagedCompaniesCompanyUuidMigrate](#putv1partnermanagedcompaniescompanyuuidmigrate) - Migrate company to embedded payroll

## getV1Companies

Get a company.         
The employees:read scope is required to return home_address and non-work locations.         
The company_admin:read scope is required to return primary_payroll_admin.         
The signatories:read scope is required to return primary_signatory.         

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesRequest, GetV1CompaniesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "female";

sdk.companies.getV1Companies(companyId).then((res: GetV1CompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesResponse](../../models/operations/getv1companiesresponse.md)>**


## getV1CompaniesCompanyIdAdmins

Returns a list of all the admins at a company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdAdminsRequest, GetV1CompaniesCompanyIdAdminsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "Soap";
const page: number = 4846.14;
const per: number = 5137.2;

sdk.companies.getV1CompaniesCompanyIdAdmins(companyId, page, per).then((res: GetV1CompaniesCompanyIdAdminsResponse) => {
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

**Promise<[operations.GetV1CompaniesCompanyIdAdminsResponse](../../models/operations/getv1companiescompanyidadminsresponse.md)>**


## getV1CompaniesCompanyIdCustomFields

Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyIdCustomFieldsRequest,
  GetV1CompaniesCompanyIdCustomFieldsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "after";
const page: number = 1619.52;
const per: number = 7836.97;

sdk.companies.getV1CompaniesCompanyIdCustomFields(companyId, page, per).then((res: GetV1CompaniesCompanyIdCustomFieldsResponse) => {
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

**Promise<[operations.GetV1CompaniesCompanyIdCustomFieldsResponse](../../models/operations/getv1companiescompanyidcustomfieldsresponse.md)>**


## getV1CompanyFinishOnboarding

Finalize a given company's onboarding process.

### Approve a company in demo
After a company is finished onboarding, Gusto requires an additional step to review and approve that company. In production environments, this step is required for risk-analysis purposes.

We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.

```shell
PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'

# Response: Company object, with company_status: 'Approved'
```

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyFinishOnboardingRequest, GetV1CompanyFinishOnboardingResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "West";

sdk.companies.getV1CompanyFinishOnboarding(companyUuid).then((res: GetV1CompanyFinishOnboardingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyFinishOnboardingResponse](../../models/operations/getv1companyfinishonboardingresponse.md)>**


## getV1CompanyOnboardingStatus

Get company's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyOnboardingStatusRequest, GetV1CompanyOnboardingStatusResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "access";

sdk.companies.getV1CompanyOnboardingStatus(companyUuid).then((res: GetV1CompanyOnboardingStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyOnboardingStatusResponse](../../models/operations/getv1companyonboardingstatusresponse.md)>**


## postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService

Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms). The user must have a role in the company in order to accept the Terms of Service.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "Fundamental";
const requestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
  email: "Myles66@gmail.com",
  externalUserId: "ivory contextualize yieldingly",
  ipAddress: "115.209.153.222",
};

sdk.companies.postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService(companyUuid, requestBody).then((res: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The UUID of the company                                                                                                                                                              |
| `requestBody`                                                                                                                                                                        | [operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody](../../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservicerequestbody.md) | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `config`                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | Available config options for making requests.                                                                                                                                        |


### Response

**Promise<[operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse](../../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofserviceresponse.md)>**


## postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService

Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody,
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "synthesizing";
const requestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody = {
  email: "Dwight.Conn51@gmail.com",
};

sdk.companies.postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService(companyUuid, requestBody).then((res: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                            | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The UUID of the company                                                                                                                                                                  |
| `requestBody`                                                                                                                                                                            | [operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody](../../models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservicerequestbody.md) | :heavy_minus_sign:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse](../../models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofserviceresponse.md)>**


## postV1CompaniesCompanyIdAdmins

Creates a new admin for a company. If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyIdAdminsRequest,
  PostV1CompaniesCompanyIdAdminsRequestBody,
  PostV1CompaniesCompanyIdAdminsResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyId: string = "UTF8";
const requestBody: PostV1CompaniesCompanyIdAdminsRequestBody = {
  email: "Ruben_Runte@yahoo.com",
  firstName: "Julia",
  lastName: "Lehner",
};

sdk.companies.postV1CompaniesCompanyIdAdmins(companyId, requestBody).then((res: PostV1CompaniesCompanyIdAdminsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The UUID of the company                                                                                                      |
| `requestBody`                                                                                                                | [operations.PostV1CompaniesCompanyIdAdminsRequestBody](../../models/operations/postv1companiescompanyidadminsrequestbody.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdAdminsResponse](../../models/operations/postv1companiescompanyidadminsresponse.md)>**


## postV1PartnerManagedCompanies

Create a new partner managed company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1PartnerManagedCompaniesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companies.postV1PartnerManagedCompanies({
  company: {
    ein: "becquerel virtual",
    name: "deleniti efficient Assurance",
    tradeName: "Fantastic mesh Electric",
  },
  user: {
    email: "Raleigh_Nienow53@yahoo.com",
    firstName: "Jamie",
    lastName: "Powlowski",
    phone: "530-812-4626",
  },
}).then((res: PostV1PartnerManagedCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostV1PartnerManagedCompaniesRequestBody](../../models/operations/postv1partnermanagedcompaniesrequestbody.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostV1PartnerManagedCompaniesResponse](../../models/operations/postv1partnermanagedcompaniesresponse.md)>**


## postV1Provision

### Overview
The company provisioning API provides a way to create a Gusto company as part of your integration. When you successfully call the API, the API does the following:
* Creates a new company in Gusto.
* Creates a new user in Gusto.
* Makes the new user the primary payroll administrator of the new company.
* Sends a welcome email to the new user.
In the response, you will receive an account claim URL. Redirect the user to this URL to complete their account setup inside of Gusto
### Authentication
Due to the nature of this endpoint, Gusto will provide partners with an API token and will permit partners to use API Token Authentication instead of OAuth to provision Gusto accounts. The API token is included in the authorization HTTP header with the Token scheme, e.g.:
```
Content-Type: application/json
Authorization: Token bbb286ff1a4fe6b84742b0d49b8d0d65bd0208d27d3d50333591df71
```

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1ProvisionResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});

sdk.companies.postV1Provision({
  company: {
    addresses: [
      {
        city: "Fort Rowanstead",
        isPrimary: "Account facilis",
        phone: "910-227-8076 x191",
        state: "methinks overriding parsing",
        street1: "markets",
        street2: "Principal",
        zip: "Producer Soft 1080p",
      },
    ],
    ein: "Home Chips",
    name: "Rap Diesel Flavie",
    numberEmployees: 9982.58,
    states: [
      "BMW",
    ],
    tradeName: "Bike Lead",
  },
  user: {
    email: "Eunice.Bashirian@yahoo.com",
    firstName: "Grady",
    lastName: "Gottlieb",
    phone: "860-937-1108",
  },
}).then((res: PostV1ProvisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostV1ProvisionRequestBody](../../models/operations/postv1provisionrequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostV1ProvisionResponse](../../models/operations/postv1provisionresponse.md)>**


## putV1PartnerManagedCompaniesCompanyUuidMigrate

Migrate an existing Gusto customer to your embedded payroll product. To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest,
  PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody,
  PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "Hyundai";
const requestBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody = {
  email: "Estel40@yahoo.com",
  externalUserId: "Oxygen AGP",
  ipAddress: "74.62.158.119",
};

sdk.companies.putV1PartnerManagedCompaniesCompanyUuidMigrate(companyUuid, requestBody).then((res: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyUuid`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The UUID of the company                                                                                                                                      |
| `requestBody`                                                                                                                                                | [operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody](../../models/operations/putv1partnermanagedcompaniescompanyuuidmigraterequestbody.md) | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse](../../models/operations/putv1partnermanagedcompaniescompanyuuidmigrateresponse.md)>**

