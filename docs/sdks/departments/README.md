# Departments

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
const departmentUuid: string = "accusamus";

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
const companyUuid: string = "delectus";

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
const departmentUuid: string = "quidem";

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
const companyUuid: string = "provident";
const requestBody: PostDepartmentsRequestBody = {
  title: "Miss",
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
const departmentUuid: string = "id";
const requestBody: PutAddPeopleToDepartmentRequestBody = {
  contractors: [
    {
      uuid: "88f3a669-9707-44ba-8469-b6e214195989",
    },
  ],
  employees: [
    {
      uuid: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
    },
  ],
  version: "consequuntur",
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
const departmentUuid: string = "praesentium";
const requestBody: PutDepartmentsRequestBody = {
  title: "Miss",
  version: "magni",
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
const departmentUuid: string = "sunt";
const requestBody: PutRemovePeopleFromDepartmentRequestBody = {
  contractors: [
    {
      uuid: "cddc6926-01fb-4576-b0d5-f0d30c5fbb25",
    },
  ],
  employees: [
    {
      uuid: "87053202-c73d-45fe-9b90-c28909b3fe49",
    },
  ],
  version: "dolorum",
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

