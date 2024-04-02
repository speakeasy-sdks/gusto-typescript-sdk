# Employee

The representation of an employee in Gusto.


## Fields

| Field                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The UUID of the company the employee is employed by.                                                                                                                                                                                                                                                                                        |
| `currentEmploymentStatus`                                                                                                                                                                                                                                                                                                                   | [EmployeeCurrentEmploymentStatus](../../models/shared/employeecurrentemploymentstatus.md)                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The current employment status of the employee. Full-time employees work 30+ hours per week. Part-time employees are split into two groups: those that work 20-29 hours a week, and those that work under 20 hours a week. Variable employees have hours that vary each week. Seasonal employees are hired for 6 months of the year or less. |
| `customFields`                                                                                                                                                                                                                                                                                                                              | [EmployeeCustomField](../../models/shared/employeecustomfield.md)[]                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Custom fields are only included for the employee if the include param has the custom_fields value set                                                                                                                                                                                                                                       |
| `dateOfBirth`                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `department`                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The employee's department in the company.                                                                                                                                                                                                                                                                                                   |
| `eligiblePaidTimeOff`                                                                                                                                                                                                                                                                                                                       | [PaidTimeOff](../../models/shared/paidtimeoff.md)[]                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `email`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).                                                                                                                                                       |
| `firstName`                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `garnishments`                                                                                                                                                                                                                                                                                                                              | [Garnishment](../../models/shared/garnishment.md)[]                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `hasSsn`                                                                                                                                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Indicates whether the employee has an SSN in Gusto.                                                                                                                                                                                                                                                                                         |
| `homeAddress`                                                                                                                                                                                                                                                                                                                               | [EmployeeAddress](../../models/shared/employeeaddress.md)                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `jobs`                                                                                                                                                                                                                                                                                                                                      | [Job](../../models/shared/job.md)[]                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `lastName`                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `managerUuid`                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The UUID of the employee's manager.                                                                                                                                                                                                                                                                                                         |
| `middleInitial`                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `onboarded`                                                                                                                                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Whether the employee has completed onboarding.                                                                                                                                                                                                                                                                                              |
| `paymentMethod`                                                                                                                                                                                                                                                                                                                             | [EmployeePaymentMethod](../../models/shared/employeepaymentmethod.md)                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The employee's payment method                                                                                                                                                                                                                                                                                                               |
| `phone`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `preferredFirstName`                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `ssn`                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Deprecated. This field always returns an empty string.                                                                                                                                                                                                                                                                                      |
| `terminated`                                                                                                                                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Whether the employee is terminated.                                                                                                                                                                                                                                                                                                         |
| `terminations`                                                                                                                                                                                                                                                                                                                              | [Termination](../../models/shared/termination.md)[]                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                                                                         |
| `twoPercentShareholder`                                                                                                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.                                                                                                                                                                                                          |
| `uuid`                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The UUID of the employee in Gusto.                                                                                                                                                                                                                                                                                                          |
| `version`                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The current version of the employee. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.                                                                                                                                                                         |
| `workEmail`                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                          | The work email address of the employee. This is provided to support syncing users between our system and yours. You may not use this email address for any other purpose (e.g. marketing).                                                                                                                                                  |