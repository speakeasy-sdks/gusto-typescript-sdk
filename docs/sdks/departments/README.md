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

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const departmentUuid: string = "ad";

sdk.departments.deleteDepartment(departmentUuid).then((res: DeleteDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `departmentUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the department                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteDepartmentResponse](../../models/operations/deletedepartmentresponse.md)>**


## getCompaniesDepartments

Get all of the departments for a given company with the employees and contractors assigned to that department.

scope: `departments:read`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetCompaniesDepartmentsRequest, GetCompaniesDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "eum";

sdk.departments.getCompaniesDepartments(companyUuid).then((res: GetCompaniesDepartmentsResponse) => {
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

**Promise<[operations.GetCompaniesDepartmentsResponse](../../models/operations/getcompaniesdepartmentsresponse.md)>**


## getDepartment

Get a department given the UUID

scope: `departments:read`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { GetDepartmentRequest, GetDepartmentResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const departmentUuid: string = "dolor";

sdk.departments.getDepartment(departmentUuid).then((res: GetDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `departmentUuid`                                             | *string*                                                     | :heavy_check_mark:                                           | The UUID of the department                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetDepartmentResponse](../../models/operations/getdepartmentresponse.md)>**


## postDepartments

Create a department

scope: `departments:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PostDepartmentsRequest, PostDepartmentsRequestBody, PostDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const companyUuid: string = "necessitatibus";
const requestBody: PostDepartmentsRequestBody = {
  title: "Mr.",
};

sdk.departments.postDepartments(companyUuid, requestBody).then((res: PostDepartmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The UUID of the company                                                                        |
| `requestBody`                                                                                  | [operations.PostDepartmentsRequestBody](../../models/operations/postdepartmentsrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostDepartmentsResponse](../../models/operations/postdepartmentsresponse.md)>**


## putAddPeopleToDepartment

Add employees and contractors to a department

scope: `departments:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutAddPeopleToDepartmentRequest,
  PutAddPeopleToDepartmentRequestBody,
  PutAddPeopleToDepartmentRequestBodyContractors,
  PutAddPeopleToDepartmentRequestBodyEmployees,
  PutAddPeopleToDepartmentResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const departmentUuid: string = "nemo";
const requestBody: PutAddPeopleToDepartmentRequestBody = {
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
};

sdk.departments.putAddPeopleToDepartment(departmentUuid, requestBody).then((res: PutAddPeopleToDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `departmentUuid`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The UUID of the department                                                                                       |
| `requestBody`                                                                                                    | [operations.PutAddPeopleToDepartmentRequestBody](../../models/operations/putaddpeopletodepartmentrequestbody.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutAddPeopleToDepartmentResponse](../../models/operations/putaddpeopletodepartmentresponse.md)>**


## putDepartments

Update a department

scope: `departments:write`

### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { PutDepartmentsRequest, PutDepartmentsRequestBody, PutDepartmentsResponse } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const departmentUuid: string = "minus";
const requestBody: PutDepartmentsRequestBody = {
  title: "Ms.",
  version: "dolor",
};

sdk.departments.putDepartments(departmentUuid, requestBody).then((res: PutDepartmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `departmentUuid`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the department                                                                   |
| `requestBody`                                                                                | [operations.PutDepartmentsRequestBody](../../models/operations/putdepartmentsrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PutDepartmentsResponse](../../models/operations/putdepartmentsresponse.md)>**


## putRemovePeopleFromDepartment

Remove employees and contractors from a department

scope: `departments:write`


### Example Usage

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
  PutRemovePeopleFromDepartmentRequest,
  PutRemovePeopleFromDepartmentRequestBody,
  PutRemovePeopleFromDepartmentRequestBodyContractors,
  PutRemovePeopleFromDepartmentRequestBodyEmployees,
  PutRemovePeopleFromDepartmentResponse,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

const sdk = new Gusto({
  security: {
    authorization: "",
  },
});
const departmentUuid: string = "vero";
const requestBody: PutRemovePeopleFromDepartmentRequestBody = {
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
};

sdk.departments.putRemovePeopleFromDepartment(departmentUuid, requestBody).then((res: PutRemovePeopleFromDepartmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `departmentUuid`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The UUID of the department                                                                                                 |
| `requestBody`                                                                                                              | [operations.PutRemovePeopleFromDepartmentRequestBody](../../models/operations/putremovepeoplefromdepartmentrequestbody.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PutRemovePeopleFromDepartmentResponse](../../models/operations/putremovepeoplefromdepartmentresponse.md)>**

