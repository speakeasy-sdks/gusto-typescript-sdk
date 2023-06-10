# ExternalPayrollTaxSuggestions

The representation of an external payroll with minimal information.


## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                    | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The UUID of the employee.                                                                                         |
| `taxSuggestions`                                                                                                  | [ExternalPayrollTaxSuggestionsTaxSuggestions](../../models/shared/externalpayrolltaxsuggestionstaxsuggestions.md) | :heavy_minus_sign:                                                                                                | Possible tax liabilities selections.                                                                              |