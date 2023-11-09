# CompanyOnboardingStatus

The representation of a company's onboarding status


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `onboardingCompleted`                                                   | *boolean*                                                               | :heavy_minus_sign:                                                      | a boolean flag for the company's onboarding status                      |
| `onboardingSteps`                                                       | [shared.OnboardingStep](../../../sdk/models/shared/onboardingstep.md)[] | :heavy_minus_sign:                                                      | a list of company onboarding steps                                      |
| `uuid`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | the UUID of the company                                                 |