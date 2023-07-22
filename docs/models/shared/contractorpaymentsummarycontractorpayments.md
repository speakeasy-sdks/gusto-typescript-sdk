# ContractorPaymentSummaryContractorPayments


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contractorUuid`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | The UUID of the contractor.                                             |
| `payments`                                                              | [ContractorPayment](../../models/shared/contractorpayment.md)[]         | :heavy_minus_sign:                                                      | The contractor’s payments within a given time period.<br/>              |
| `reimbursementTotal`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The total reimbursements for the contractor within a given time period. |
| `wageTotal`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The total wages for the contractor within a given time period.          |