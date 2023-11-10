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
import { GetV1CompaniesRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";

  const res = await sdk.companies.getV1Companies(companyId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompaniesResponse](../../sdk/models/operations/getv1companiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1CompaniesCompanyIdAdmins

Returns a list of all the admins at a company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdAdminsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const page: number = 2654.95;
const per: number = 7436.28;

  const res = await sdk.companies.getV1CompaniesCompanyIdAdmins(companyId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdAdminsResponse](../../sdk/models/operations/getv1companiescompanyidadminsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1CompaniesCompanyIdCustomFields

Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company

scope: `companies:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdCustomFieldsRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const page: number = 9765.05;
const per: number = 751.25;

  const res = await sdk.companies.getV1CompaniesCompanyIdCustomFields(companyId, page, per);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The UUID of the company                                              |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page that is requested. When unspecified, will load all objects. |
| `per`                                                                | *number*                                                             | :heavy_minus_sign:                                                   | Number of objects per page. When unspecified, will default to 25     |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetV1CompaniesCompanyIdCustomFieldsResponse](../../sdk/models/operations/getv1companiescompanyidcustomfieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
import { GetV1CompanyFinishOnboardingRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.companies.getV1CompanyFinishOnboarding(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyFinishOnboardingResponse](../../sdk/models/operations/getv1companyfinishonboardingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getV1CompanyOnboardingStatus

Get company's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyOnboardingStatusRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";

  const res = await sdk.companies.getV1CompanyOnboardingStatus(companyUuid);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `companyUuid`                                                | *string*                                                     | :heavy_check_mark:                                           | The UUID of the company                                      |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetV1CompanyOnboardingStatusResponse](../../sdk/models/operations/getv1companyonboardingstatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService

Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms). The user must have a role in the company in order to accept the Terms of Service.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody = {
  email: "Estrella_Gottlieb27@yahoo.com",
  externalUserId: "string",
  ipAddress: "171.196.45.198",
};

  const res = await sdk.companies.postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                               | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The UUID of the company                                                                                                                                                                     |
| `requestBody`                                                                                                                                                                               | [operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequestBody](../../../sdk/models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservicerequestbody.md) | :heavy_minus_sign:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `config`                                                                                                                                                                                    | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                          | Available config options for making requests.                                                                                                                                               |


### Response

**Promise<[operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse](../../sdk/models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService

Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody = {
  email: "Nya13@yahoo.com",
};

  const res = await sdk.companies.postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                       | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                   | *string*                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                              | The UUID of the company                                                                                                                                                                         |
| `requestBody`                                                                                                                                                                                   | [operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequestBody](../../../sdk/models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservicerequestbody.md) | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `config`                                                                                                                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                              | Available config options for making requests.                                                                                                                                                   |


### Response

**Promise<[operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse](../../sdk/models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1CompaniesCompanyIdAdmins

Creates a new admin for a company. If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompaniesCompanyIdAdminsRequest, PostV1CompaniesCompanyIdAdminsRequestBody } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyId: string = "string";
const requestBody: PostV1CompaniesCompanyIdAdminsRequestBody = {
  email: "Teagan_Kulas60@yahoo.com",
  firstName: "Sallie",
  lastName: "Leffler",
};

  const res = await sdk.companies.postV1CompaniesCompanyIdAdmins(companyId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                           | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The UUID of the company                                                                                                             |
| `requestBody`                                                                                                                       | [operations.PostV1CompaniesCompanyIdAdminsRequestBody](../../../sdk/models/operations/postv1companiescompanyidadminsrequestbody.md) | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `config`                                                                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                        | :heavy_minus_sign:                                                                                                                  | Available config options for making requests.                                                                                       |


### Response

**Promise<[operations.PostV1CompaniesCompanyIdAdminsResponse](../../sdk/models/operations/postv1companiescompanyidadminsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postV1PartnerManagedCompanies

Create a new partner managed company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.companies.postV1PartnerManagedCompanies({
    company: {
      name: "string",
    },
    user: {
      email: "Noble.OKon@yahoo.com",
      firstName: "Tod",
      lastName: "Mann",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostV1PartnerManagedCompaniesRequestBody](../../sdk/models/operations/postv1partnermanagedcompaniesrequestbody.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostV1PartnerManagedCompaniesResponse](../../sdk/models/operations/postv1partnermanagedcompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.companies.postV1Provision({
    company: {
      addresses: [
        {},
      ],
      name: "string",
      states: [
        "string",
      ],
    },
    user: {
      email: "Tito.Stark@gmail.com",
      firstName: "Gust",
      lastName: "Kuvalis",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostV1ProvisionRequestBody](../../sdk/models/operations/postv1provisionrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostV1ProvisionResponse](../../sdk/models/operations/postv1provisionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putV1PartnerManagedCompaniesCompanyUuidMigrate

Migrate an existing Gusto customer to your embedded payroll product. To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest,
  PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async() => {
  const sdk = new Gusto({
    security: {
      authorization: "",
    },
  });
const companyUuid: string = "string";
const requestBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody = {
  email: "Harley87@hotmail.com",
  externalUserId: "string",
  ipAddress: "3.103.93.184",
};

  const res = await sdk.companies.putV1PartnerManagedCompaniesCompanyUuidMigrate(companyUuid, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                           | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | The UUID of the company                                                                                                                                             |
| `requestBody`                                                                                                                                                       | [operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody](../../../sdk/models/operations/putv1partnermanagedcompaniescompanyuuidmigraterequestbody.md) | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `config`                                                                                                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                        | :heavy_minus_sign:                                                                                                                                                  | Available config options for making requests.                                                                                                                       |


### Response

**Promise<[operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse](../../sdk/models/operations/putv1partnermanagedcompaniescompanyuuidmigrateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
