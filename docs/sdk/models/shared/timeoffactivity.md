# TimeOffActivity

Representation of a Time Off Activity


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `balance`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | The time off balance at the time of the activity                    |
| `balanceChange`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The amount the time off balance changed as a result of the activity |
| `effectiveTime`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The datetime of the time off activity                               |
| `eventDescription`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | A description for the time off event/activity                       |
| `eventType`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The type of the time off event/activity                             |
| `policyName`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The name of the time off policy for this activity                   |
| `policyUuid`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | unique identifier of a time off policy                              |
| `timeOffType`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | Type of the time off activity, i.e. 'sick' or 'vacation'            |