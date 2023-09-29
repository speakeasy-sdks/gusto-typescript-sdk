# Departments
(*departments*)

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
const departmentUuid: string = "male";

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
const companyUuid: string = "ick";

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
const departmentUuid: string = "Fresh";

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
const companyUuid: string = "Tuna";
const requestBody: PostDepartmentsRequestBody = {
  title: "Vanadium",
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
const departmentUuid: string = "Normal";
const requestBody: PutAddPeopleToDepartmentRequestBody = {
  contractors: [
    {
      uuid: "8ed50d48-484b-498f-aaa2-280467c5eb97",
    },
  ],
  employees: [
    {
      uuid: "73b5e55c-ac98-42fe-8af3-d9655188c067",
    },
  ],
  version: "Hatchback Soft",
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
const departmentUuid: string = "brown";
const requestBody: PutDepartmentsRequestBody = {
  title: "Savings Director Corporate",
  version: "Money Electric Games",
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
const departmentUuid: string = "Engineer";
const requestBody: PutRemovePeopleFromDepartmentRequestBody = {
  contractors: [
    {
      uuid: "674e0fa4-ec50-4109-8c03-73ddffd6c5b2",
    },
  ],
  employees: [
    {
      uuid: "71545bef-87fe-47c1-a203-4574d47b3960",
    },
  ],
  version: "input",
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

