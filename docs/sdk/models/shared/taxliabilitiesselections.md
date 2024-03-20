# TaxLiabilitiesSelections

The representation of tax liabilities selections.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `lastUnpaidExternalPayrollUuid`                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The UUID of last unpaid external payroll.                                       |
| `possibleLiabilities`                                                           | [shared.PossibleLiabilities](../../../sdk/models/shared/possibleliabilities.md) | :heavy_minus_sign:                                                              | Possible tax liabilities selections.                                            |
| `taxId`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | The ID of the tax.                                                              |
| `taxName`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | The name of the tax.                                                            |