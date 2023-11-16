# ContractorOnboardingStatus

The representation of an contractor's onboarding status.


## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `onboardingStatus`                                                                                                          | [shared.OnboardingStatus](../../../sdk/models/shared/onboardingstatus.md)                                                   | :heavy_minus_sign:                                                                                                          | One of the "onboarding_status" enum values.                                                                                 |
| `onboardingSteps`                                                                                                           | [shared.ContractorOnboardingStatusOnboardingStep](../../../sdk/models/shared/contractoronboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                                          | List of steps required to onboard a contractor.                                                                             |
| `uuid`                                                                                                                      | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unique identifier for this contractor.                                                                                      |