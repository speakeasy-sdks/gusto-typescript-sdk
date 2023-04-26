# departments

### Available Operations

* [deleteDepartment](#deletedepartment) - Delete a department
* [getCompaniesDepartments](#getcompaniesdepartments) - Get all departments of a company
* [getDepartment](#getdepartment) - Get a department
* [postDepartments](#postdepartments) - Create a department
* [putAddPeopleToDepartment](#putaddpeopletodepartment) - Add people to a department
* [putDepartments](#putdepartments) - Update a department
* [putRemovePeopleFromDepartment](#putremovepeoplefromdepartment) - Remove people from a department

## deleteDepartment

Delete a department. You cannot delete a department until all employees and contractors have been removed.

scope: `departments:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteDepartmentRequest, DeleteDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: DeleteDepartmentRequest = {
  departmentUuid: "eum",
};

sdk.departments.deleteDepartment(req).then((res: DeleteDepartmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCompaniesDepartments

Get all of the departments for a given company with the employees and contractors assigned to that department.

scope: `departments:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetCompaniesDepartmentsRequest, GetCompaniesDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetCompaniesDepartmentsRequest = {
  companyUuid: "dolor",
};

sdk.departments.getCompaniesDepartments(req).then((res: GetCompaniesDepartmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDepartment

Get a department given the UUID

scope: `departments:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetDepartmentRequest, GetDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: GetDepartmentRequest = {
  departmentUuid: "necessitatibus",
};

sdk.departments.getDepartment(req).then((res: GetDepartmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## postDepartments

Create a department

scope: `departments:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostDepartmentsRequest, PostDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PostDepartmentsRequest = {
  requestBody: {
    title: "Mr.",
  },
  companyUuid: "nemo",
};

sdk.departments.postDepartments(req).then((res: PostDepartmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putAddPeopleToDepartment

Add employees and contractors to a department

scope: `departments:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutAddPeopleToDepartmentRequest, PutAddPeopleToDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutAddPeopleToDepartmentRequest = {
  requestBody: {
    contractors: [
      {
        uuid: "6fe4c8b7-11e5-4b7f-92ed-028921cddc69",
      },
    ],
    employees: [
      {
        uuid: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
      },
    ],
    version: "dolores",
  },
  departmentUuid: "minus",
};

sdk.departments.putAddPeopleToDepartment(req).then((res: PutAddPeopleToDepartmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putDepartments

Update a department

scope: `departments:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutDepartmentsRequest, PutDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutDepartmentsRequest = {
  requestBody: {
    title: "Ms.",
    version: "dolor",
  },
  departmentUuid: "vero",
};

sdk.departments.putDepartments(req).then((res: PutDepartmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## putRemovePeopleFromDepartment

Remove employees and contractors from a department

scope: `departments:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutRemovePeopleFromDepartmentRequest, PutRemovePeopleFromDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: PutRemovePeopleFromDepartmentRequest = {
  requestBody: {
    contractors: [
      {
        uuid: "fe9b90c2-8909-4b3f-a49a-8d9cbf486333",
      },
      {
        uuid: "23f9b77f-3a41-4006-b4eb-f69280d1ba77",
      },
    ],
    employees: [
      {
        uuid: "89ebf737-ae42-403c-a5e6-a95d8a0d446c",
      },
      {
        uuid: "e2af7a73-cf3b-4e45-bf87-0b326b5a7342",
      },
      {
        uuid: "9cdb1a84-22bb-4679-9232-2715bf0cbb1e",
      },
    ],
    version: "ipsum",
  },
  departmentUuid: "veritatis",
};

sdk.departments.putRemovePeopleFromDepartment(req).then((res: PutRemovePeopleFromDepartmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
