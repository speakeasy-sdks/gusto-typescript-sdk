# signatories

### Available Operations

* [deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid](#deletev1companiescompanyuuidsignatoriessignatoryuuid) - Delete a signatory
* [getV1CompaniesCompanyUuidSignatories](#getv1companiescompanyuuidsignatories) - Get all company signatories
* [postV1CompaniesCompanyUuidSignatoriesInvite](#postv1companiescompanyuuidsignatoriesinvite) - Invite a signatory
* [postV1CompanySignatories](#postv1companysignatories) - Create a signatory
* [putV1CompaniesCompanyUuidSignatoriesSignatoryUuid](#putv1companiescompanyuuidsignatoriessignatoryuuid) - Update a signatory

## deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid

Delete a company signatory.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
  companyUuid: "nemo",
  signatoryUuid: "recusandae",
};

sdk.signatories.deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid(req).then((res: DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getV1CompaniesCompanyUuidSignatories

Returns company signatories. Currently we only support a single signatory per company.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  GetV1CompaniesCompanyUuidSignatoriesRequest,
  GetV1CompaniesCompanyUuidSignatoriesResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { SignatoryIdentityVerificationStatusEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetV1CompaniesCompanyUuidSignatoriesRequest = {
  companyUuid: "esse",
};

sdk.signatories.getV1CompaniesCompanyUuidSignatories(req).then((res: GetV1CompaniesCompanyUuidSignatoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompaniesCompanyUuidSignatoriesInvite

Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PostV1CompaniesCompanyUuidSignatoriesInviteRequest,
  PostV1CompaniesCompanyUuidSignatoriesInviteResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { SignatoryIdentityVerificationStatusEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1CompaniesCompanyUuidSignatoriesInviteRequest = {
  requestBody: {
    email: "Eudora_Kemmer13@yahoo.com",
    firstName: "Filiberto",
    lastName: "Boyer",
    title: "Miss",
  },
  companyUuid: "nostrum",
};

sdk.signatories.postV1CompaniesCompanyUuidSignatoriesInvite(req).then((res: PostV1CompaniesCompanyUuidSignatoriesInviteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postV1CompanySignatories

Create a company signatory with complete information. A signatory can legally sign forms once the identity verification process is successful.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostV1CompanySignatoriesRequest, PostV1CompanySignatoriesResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { SignatoryIdentityVerificationStatusEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostV1CompanySignatoriesRequest = {
  requestBody: {
    birthday: "mollitia",
    email: "Reina.Okuneva@yahoo.com",
    firstName: "Alia",
    homeAddress: {
      city: "Wilson",
      state: "ullam",
      street1: "in",
      street2: "nam",
      zip: "earum",
    },
    lastName: "Nienow",
    middleInitial: "laborum",
    phone: "(495) 997-1623 x01700",
    ssn: "velit",
    title: "Mr.",
  },
  companyUuid: "eum",
};

sdk.signatories.postV1CompanySignatories(req).then((res: PostV1CompanySignatoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putV1CompaniesCompanyUuidSignatoriesSignatoryUuid

Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest,
  PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { SignatoryIdentityVerificationStatusEnum } from "@speakeasy-sdks/gusto/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
  requestBody: {
    birthday: "eius",
    firstName: "Joy",
    homeAddress: {
      city: "Salina",
      state: "eos",
      street1: "sapiente",
      street2: "eum",
      zip: "dicta",
    },
    lastName: "Hane",
    middleInitial: "beatae",
    phone: "(697) 980-9598 x3732",
    ssn: "fugit",
    title: "Miss",
    version: "fuga",
  },
  companyUuid: "ratione",
  signatoryUuid: "animi",
};

sdk.signatories.putV1CompaniesCompanyUuidSignatoriesSignatoryUuid(req).then((res: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
