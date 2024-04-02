# ContractorPaymentSummaryByDates

The representation of the summary of contractor payments for a given company in a given time period.


## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contractorPayments`                                                                                                            | [ContractorPaymentSummaryByDatesContractorPayments](../../models/shared/contractorpaymentsummarybydatescontractorpayments.md)[] | :heavy_minus_sign:                                                                                                              | The individual contractor payments, within a given time period, grouped by check date.                                          |
| `total`                                                                                                                         | [ContractorPaymentSummaryByDatesTotal](../../models/shared/contractorpaymentsummarybydatestotal.md)                             | :heavy_minus_sign:                                                                                                              | The wage and reimbursement totals for all contractor payments within a given time period.                                       |