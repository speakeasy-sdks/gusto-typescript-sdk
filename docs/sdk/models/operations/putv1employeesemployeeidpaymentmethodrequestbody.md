# PutV1EmployeesEmployeeIdPaymentMethodRequestBody


## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `splitBy`                                                                                                                                                                                                      | [operations.SplitBy](../../../sdk/models/operations/splitby.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                             | Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder. |
| `splits`                                                                                                                                                                                                       | [operations.Splits](../../../sdk/models/operations/splits.md)[]                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |
| `type`                                                                                                                                                                                                         | [operations.PutV1EmployeesEmployeeIdPaymentMethodType](../../../sdk/models/operations/putv1employeesemployeeidpaymentmethodtype.md)                                                                            | :heavy_check_mark:                                                                                                                                                                                             | The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.                                                  |
| `version`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.                                  |