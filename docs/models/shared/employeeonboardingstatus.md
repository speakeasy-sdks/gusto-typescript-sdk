# EmployeeOnboardingStatus

The representation of an employee's onboarding status.
## onboarding_status
### Admin-facilitated onboarding
| onboarding_status | Description |
| --- | ----------- |
| `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |
### Employee self-onboarding
| onboarding_status | Description |
| --- | ----------- |
| `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
| `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
| `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
| `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
| `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
| `self_onboarding_awaiting_admin_review` | Admin needs to review employee's entered information and confirm onboarding. |
| `onboarding_completed` | Employee has been fully onboarded and verified. |
## onboarding_steps
| onboarding_steps | Requirement(s) to be completed |
| --- | ----------- |
| `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
| `compensation_details` | Associate employee to a job & compensation. |
| `add_work_address` | Add employee work address. |
| `add_home_address` | Add employee home address. |
| `federal_tax_setup` | Set up federal tax withholdings. |
| `state_tax_setup` | Set up state tax withholdings. |
| `direct_deposit_setup` | (optional) Set up employee's direct deposit. |
| `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
| `file_new_hire_report` | File a new hire report for this employee. |
| `admin_review` | (only required for employee self-onboarding) Admin finishes reviewing and confirms employee details. |


## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `onboardingStatus`                                                                                               | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | One of the "onboarding_status" enum values.                                                                      |
| `onboardingSteps`                                                                                                | [shared.EmployeeOnboardingStatusOnboardingStep](../../models/shared/employeeonboardingstatusonboardingstep.md)[] | :heavy_minus_sign:                                                                                               | List of steps required to onboard an employee.                                                                   |
| `uuid`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Unique identifier for this employee.                                                                             |