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
import { DeleteDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.deleteDepartment({
  departmentUuid: "eum",
}).then((res: DeleteDepartmentResponse) => {
  if (res.statusCode == 200) {
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
import { GetCompaniesDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.getCompaniesDepartments({
  companyUuid: "dolor",
}).then((res: GetCompaniesDepartmentsResponse) => {
  if (res.statusCode == 200) {
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
import { GetDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.getDepartment({
  departmentUuid: "necessitatibus",
}).then((res: GetDepartmentResponse) => {
  if (res.statusCode == 200) {
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
import { PostDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.postDepartments({
  requestBody: {
    title: "Mr.",
  },
  companyUuid: "nemo",
}).then((res: PostDepartmentsResponse) => {
  if (res.statusCode == 200) {
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
import { PutAddPeopleToDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.putAddPeopleToDepartment({
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
}).then((res: PutAddPeopleToDepartmentResponse) => {
  if (res.statusCode == 200) {
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
import { PutDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.putDepartments({
  requestBody: {
    title: "Ms.",
    version: "dolor",
  },
  departmentUuid: "vero",
}).then((res: PutDepartmentsResponse) => {
  if (res.statusCode == 200) {
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
import { PutRemovePeopleFromDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.departments.putRemovePeopleFromDepartment({
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
}).then((res: PutRemovePeopleFromDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
