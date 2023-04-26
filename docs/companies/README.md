# companies

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
import { CompanyCompanyStatusEnum, CompanyEntityTypeEnum, CompanyTierEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesRequest = {
  companyId: "iure",
};

sdk.companies.getV1Companies(req).then((res: GetV1CompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyIdAdmins

Returns a list of all the admins at a company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompaniesCompanyIdAdminsRequest, GetV1CompaniesCompanyIdAdminsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdAdminsRequest = {
  companyId: "magnam",
  page: 8917.73,
  per: 567.13,
};

sdk.companies.getV1CompaniesCompanyIdAdmins(req).then((res: GetV1CompaniesCompanyIdAdminsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import { CustomFieldTypeEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyIdCustomFieldsRequest = {
  companyId: "delectus",
  page: 2726.56,
  per: 3834.41,
};

sdk.companies.getV1CompaniesCompanyIdCustomFields(req).then((res: GetV1CompaniesCompanyIdCustomFieldsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyFinishOnboardingRequest = {
  companyUuid: "molestiae",
};

sdk.companies.getV1CompanyFinishOnboarding(req).then((res: GetV1CompanyFinishOnboardingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompanyOnboardingStatus

Get company's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetV1CompanyOnboardingStatusRequest, GetV1CompanyOnboardingStatusResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompanyOnboardingStatusRequest = {
  companyUuid: "minus",
};

sdk.companies.getV1CompanyOnboardingStatus(req).then((res: GetV1CompanyOnboardingStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService

Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms). The user must have a role in the company in order to accept the Terms of Service.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest = {
  requestBody: {
    email: "Junior.Kshlerin@hotmail.com",
    externalUserId: "recusandae",
    ipAddress: "temporibus",
  },
  companyUuid: "ab",
};

sdk.companies.postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService(req).then((res: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService

Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest = {
  requestBody: {
    email: "Ashlee36@yahoo.com",
  },
  companyUuid: "repellendus",
};

sdk.companies.postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService(req).then((res: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyIdAdmins

Creates a new admin for a company. If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompaniesCompanyIdAdminsRequest, PostV1CompaniesCompanyIdAdminsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1CompaniesCompanyIdAdminsRequest = {
  requestBody: {
    email: "Orlando_Connelly97@hotmail.com",
    firstName: "Jaren",
    lastName: "Schmidt",
  },
  companyId: "quod",
};

sdk.companies.postV1CompaniesCompanyIdAdmins(req).then((res: PostV1CompaniesCompanyIdAdminsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1PartnerManagedCompanies

Create a new partner managed company

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1PartnerManagedCompaniesRequestBody, PostV1PartnerManagedCompaniesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1PartnerManagedCompaniesRequestBody = {
  company: {
    ein: "esse",
    name: "Miss Lowell Parisian",
    tradeName: "occaecati",
  },
  user: {
    email: "Kale_Welch10@gmail.com",
    firstName: "Haskell",
    lastName: "Krajcik",
    phone: "377-525-1036 x162",
  },
};

sdk.companies.postV1PartnerManagedCompanies(req).then((res: PostV1PartnerManagedCompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

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
import { PostV1ProvisionRequestBody, PostV1ProvisionResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1ProvisionRequestBody = {
  company: {
    addresses: [
      {
        city: "Fort Steve",
        isPrimary: "fuga",
        phone: "464.960.0966 x612",
        state: "corporis",
        street1: "explicabo",
        street2: "nobis",
        zip: "enim",
      },
      {
        city: "Hickleborough",
        isPrimary: "excepturi",
        phone: "569-916-2619",
        state: "mollitia",
        street1: "occaecati",
        street2: "numquam",
        zip: "commodi",
      },
      {
        city: "Jarredburgh",
        isPrimary: "error",
        phone: "1-416-731-7193",
        state: "id",
        street1: "possimus",
        street2: "aut",
        zip: "quasi",
      },
    ],
    ein: "error",
    name: "Neal Boyer",
    numberEmployees: 8781.94,
    states: [
      "praesentium",
      "voluptatibus",
    ],
    tradeName: "ipsa",
  },
  user: {
    email: "Ivah3@yahoo.com",
    firstName: "Iliana",
    lastName: "Grady",
    phone: "232.516.3849 x02655",
  },
};

sdk.companies.postV1Provision(req).then((res: PostV1ProvisionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1PartnerManagedCompaniesCompanyUuidMigrate

Migrate an existing Gusto customer to your embedded payroll product. To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest,
  PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest = {
  requestBody: {
    email: "Dimitri_Lang@hotmail.com",
    externalUserId: "quasi",
    ipAddress: "repudiandae",
  },
  companyUuid: "sint",
};

sdk.companies.putV1PartnerManagedCompaniesCompanyUuidMigrate(req).then((res: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
