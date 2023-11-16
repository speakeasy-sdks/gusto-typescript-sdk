# PostV1CompanyFlowsRequestBody


## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entityType`                                                                                                                                             | [operations.EntityType](../../../sdk/models/operations/entitytype.md)                                                                                    | :heavy_minus_sign:                                                                                                                                       | the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details. |
| `entityUuid`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | UUID of the target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details. |
| `flowType`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | flow type                                                                                                                                                |