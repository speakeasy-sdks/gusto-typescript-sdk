<div align="center">
    <picture>
        <img src="https://user-images.githubusercontent.com/68016351/222762994-30761ef1-db74-463e-b3f9-a4a1c9f50236.svg" width="500">
    </picture>
   <p>Gusto's people platform helps growing businesses onboard, pay, insure, and support their hardworking teams with payroll, benefits, and more.</p>
   <a href="https://docs-stoplight.gusto.com/docs/api/YXBpOjUyMTU1MjI-gusto-api"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/gusto-typescript-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/gusto-typescript-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/gusto-typescript-sdk/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/gusto-typescript-sdk?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add gusto
```

### Yarn

```bash
yarn add gusto
```
<!-- End SDK Installation -->

## Authentication

To get started, fill out a [Production Pre-Approval form](https://gusto.az1.qualtrics.com/jfe/form/SV_1Oob0rNZpUwhSoS), sign up for a [Developer Portal account](https://dev.gusto.com/accounts/sign_in) and onboard to our sandbox environment.

Once you’ve created an account and completed your Organization setup, you will have access to your unique API token from the Organizations tab. This is used for provisioning new Gusto accounts.

Next, create an application to obtain API credentials - or “keys” - to access our demo environment. To create an application, you will need to provide at least one(1) redirect URI. You can enter multiple redirects for a single application - please do this instead of creating multiple applications for each one. OAuth2 does not support wildcard URIs or URIs with fragments (e.g #).

The application will generate a unique `client_id` and `secret` to be used for authentication.

Then create a demo company so that you can explore our product and successfully connect your application to Gusto via OAuth2 to begin making calls to the API. Demo companies are automatically generated with company info, employees, and previous payrolls so you can begin testing right away. The [Authentication Example](https://docs.gusto.com/) has everything you need to get started.

Once you have your API Token, `client_id`, `secret`, and a demo company, you’re ready to begin building your integration. Check out this [short video tutorial](https://www.loom.com/share/b374109a4f98499195e49f1e52330bc8) for an introduction on testing the Gusto API (in demo).

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1CompaniesCompanyIdBankAccountsRequest,
  GetV1CompaniesCompanyIdBankAccountsResponse
} from "gusto/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Gusto } from "gusto";
const sdk = new Gusto({
  security: {
    authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});
    
const req: GetV1CompaniesCompanyIdBankAccountsRequest = {
  pathParams: {
    companyId: "unde",
  },
};

sdk.bankAccounts.getV1CompaniesCompanyIdBankAccounts(req).then((res: GetV1CompaniesCompanyIdBankAccountsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bankAccounts

* `getV1CompaniesCompanyIdBankAccounts` - Get all company bank accounts
* `postV1CompaniesCompanyIdBankAccounts` - Create a company bank account
* `postV1PlaidProcessorToken` - Create a bank account from a plaid processor token
* `putV1CompaniesCompanyIdBankAccountsVerify` - Verify a company bank account

### companies

* `getV1Companies` - Get a company
* `getV1CompaniesCompanyIdAdmins` - Get all the admins at a company
* `getV1CompaniesCompanyIdCustomFields` - Get the custom fields of a company
* `getV1CompanyFinishOnboarding` - Finish company onboarding
* `getV1CompanyOnboardingStatus` - Get the company's onboarding status
* `postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService` - Accept terms of service for a company user
* `postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService` - Retrieve terms of service status for a company user
* `postV1CompaniesCompanyIdAdmins` - Create an admin for the company
* `postV1PartnerManagedCompanies` - Create a partner managed company
* `postV1Provision` - Create a company
* `putV1PartnerManagedCompaniesCompanyUuidMigrate` - Migrate company to embedded payroll

### companyBenefits

* `deleteV1CompanyBenefitsCompanyBenefitId` - Delete a company benefit
* `getV1Benefits` - Get all benefits supported by Gusto
* `getV1BenefitsBenefitId` - Get a supported benefit by ID
* `getV1BenefitsBenefitsIdRequirements` - Get benefit fields requirements by ID
* `getV1BenefitsCompanyBenefitIdSummary` - Get company benefit summary by company benefit id.
* `getV1CompaniesCompanyIdCompanyBenefits` - Get benefits for a company
* `getV1CompanyBenefitsCompanyBenefitId` - Get a company benefit
* `postV1CompaniesCompanyIdCompanyBenefits` - Create a company benefit
* `putV1CompanyBenefitsCompanyBenefitId` - Update a company benefit

### companyForms

* `getV1CompanyForm` - Get a company form
* `getV1CompanyFormPdf` - Get a company form pdf
* `getV1CompanyForms` - Get all company forms
* `putV1CompanyFormSign` - Sign a company form

### contractorForms

* `getV1ContractorForm` - Get a contractor form
* `getV1ContractorFormPdf` - Get the contractor form pdf
* `getV1ContractorForms` - Get all contractor forms
* `postV1SandboxGenerate1099` - Generate a 1099 form [SANDBOX]

### contractorPaymentMethod

* `getV1ContractorsContractorUuidBankAccounts` - Get all contractor bank accounts
* `getV1ContractorsContractorUuidPaymentMethod` - Get a contractor's payment method
* `postV1ContractorsContractorUuidBankAccounts` - Create an contractor bank account
* `putV1ContractorsContractorIdPaymentMethod` - Update a contractor's payment method

### contractorPayments

* `deleteV1CompaniesCompanyIdContractorPaymentContractorPayment` - Cancel a contractor payment
* `getV1CompaniesCompanyIdContractorPaymentContractorPayment` - Get a single contractor payment
* `getV1CompaniesCompanyIdContractorPayments` - Get contractor payments for a company
* `getV1ContractorPaymentsContractorPaymentUuidReceipt` - Get a single contractor payment receipt
* `postV1CompaniesCompanyIdContractorPayments` - Create a contractor payment

### contractors

* `deleteV1ContractorsContractorId` - Delete a contractor
* `getV1CompaniesCompanyIdContractors` - Get contractors of a company
* `getV1ContractorsContractorId` - Get a contractor
* `getV1ContractorsContractorUuidAddress` - Get a contractor address
* `getV1ContractorsContractorUuidOnboardingStatus` - Get the contractor's onboarding status
* `postV1CompaniesCompanyIdContractors` - Create a contractor
* `putV1ContractorsContractorId` - Update a contractor
* `putV1ContractorsContractorUuidAddress` - Update a contractor's address
* `putV1ContractorsContractorUuidOnboardingStatus` - Change the contractor's onboarding status

### departments

* `deleteDepartment` - Delete a department
* `getCompaniesDepartments` - Get all departments of a company
* `getDepartment` - Get a department
* `postDepartments` - Create a department
* `putAddPeopleToDepartment` - Add people to a department
* `putDepartments` - Update a department
* `putRemovePeopleFromDepartment` - Remove people from a department

### earningTypes

* `deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid` - Deactivate an earning type
* `getV1CompaniesCompanyIdEarningTypes` - Get all earning types for a company
* `postV1CompaniesCompanyIdEarningTypes` - Create a custom earning type
* `putV1CompaniesCompanyIdEarningTypesEarningTypeUuid` - Update an earning type

### employeeBenefits

* `deleteV1EmployeeBenefitsEmployeeBenefitId` - Delete an employee benefit
* `getV1EmployeeBenefitsEmployeeBenefitId` - Get an employee benefit
* `getV1EmployeesEmployeeIdEmployeeBenefits` - Get all benefits for an employee
* `postEmployeeYtdBenefitAmountsFromDifferentCompany` - Create year-to-date benefit amounts from a different company
* `postV1EmployeesEmployeeIdEmployeeBenefits` - Create an employee benefit
* `putV1EmployeeBenefitsEmployeeBenefitId` - Update an employee benefit

### employeeForms

* `getV1EmployeeForm` - Get an employee form
* `getV1EmployeeFormPdf` - Get the employee form pdf
* `getV1EmployeeForms` - Get all employee forms
* `postV1SandboxGenerateW2` - Generate a W2 form [SANDBOX]
* `putV1EmployeeFormSign` - Sign an employee form

### employeePaymentMethod

* `deleteV1EmployeesEmployeeIdBankAccountsBankAccountId` - Delete an employee bank account
* `getV1EmployeesEmployeeIdPaymentMethod` - Get an employee's payment method
* `postV1EmployeesEmployeeIdBankAccounts` - Create an employee bank account
* `putV1EmployeesEmployeeIdPaymentMethod` - Update an employee's payment method

### employeeTaxSetup

* `getV1EmployeesEmployeeIdFederalTaxes` - Get an employee's federal taxes
* `getV1EmployeesEmployeeIdStateTaxes` - Get an employee's state taxes
* `putV1EmployeesEmployeeIdFederalTaxes` - Update an employee's federal taxes
* `putV1EmployeesEmployeeIdStateTaxes` - Update an employee's state taxes

### employeeTermination

* `deleteV1EmployeesEmployeeIdTerminations` - Delete an employee termination
* `getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods` - Get termination pay periods for a company
* `getV1EmployeesEmployeeIdTerminations` - Get terminations for an employee
* `postV1EmployeesEmployeeIdTerminations` - Create an employee termination
* `putV1TerminationsEmployeeId` - Update an employee termination

### employees

* `deleteV1Employee` - Delete an onboarding employee
* `getV1Employees` - Get an employee
* `getV1EmployeesEmployeeIdCustomFields` - Get an employee's custom fields
* `getV1EmployeesEmployeeIdHomeAddress` - Get an employee's home address
* `getV1EmployeesEmployeeIdOnboardingStatus` - Get the employee's onboarding status
* `getVersionEmployeesTimeOffActivities` - Get employee time off activities
* `postV1Employees` - Create an employee
* `putV1EmployeeFinishOnboarding` - Finish onboarding an employee
* `putV1Employees` - Update an employee
* `putV1EmployeesEmployeeIdHomeAddress` - Update an employee's home address
* `putV1EmployeesEmployeeIdOnboardingStatus` - Update the employee's onboarding status

### externalPayrolls

* `deleteV1ExternalPayroll` - Delete an external payroll
* `getV1CompanyExternalPayrolls` - Get external payrolls for a company
* `getV1ExternalPayroll` - Get an external payroll
* `getV1ExternalPayrollCalculateTaxes` - Get tax suggestions for an external payroll
* `postV1ExternalPayroll` - Create a new external payroll for a company
* `putV1ExternalPayroll` - Update an external payroll

### federalTaxDetails

* `getV1CompaniesCompanyIdFederalTaxDetails` - Get Federal Tax Details
* `putV1CompaniesCompanyIdFederalTaxDetails` - Update Federal Tax Details

### flows

* `postV1CompanyFlows` - Create a flow

### garnishments

* `getV1EmployeesEmployeeIdGarnishments` - Get garnishments for an employee
* `getV1GarnishmentsGarnishmentId` - Get a garnishment
* `postV1EmployeesEmployeeIdGarnishments` - Create a garnishment
* `putV1GarnishmentsGarnishmentId` - Update a garnishment

### generatedDocuments

* `getV1GeneratedDocumentsDocumentTypeRequestUuid` - Get a generated document

### industrySelection

* `getV1CompanyIndustry` - Get a company industry selection
* `putV1CompanyIndustry` - Update a company industry selection

### jobsAndCompensations

* `deleteV1JobsJobId` - Delete an individual job
* `getV1CompensationsCompensationId` - Get a compensation
* `getV1EmployeesEmployeeIdJobs` - Get jobs for an employee
* `getV1JobsJobId` - Get a job
* `getV1JobsJobIdCompensations` - Get compensations for a job
* `postV1JobsJobId` - Create a job
* `putV1CompensationsCompensationId` - Update a compensation
* `putV1JobsJobId` - Update a job

### locations

* `getV1CompaniesCompanyIdLocations` - Get company locations
* `getV1LocationsLocationId` - Get a location
* `getV1LocationsLocationUuidMinimumWages` - Get minimum wages for a location
* `postV1CompaniesCompanyIdLocationsJson` - Create a company location
* `postV1CompaniesCompanyIdLocationsRaw` - Create a company location
* `putV1LocationsLocationId` - Update a location

### paySchedules

* `getV1CompaniesCompanyIdPayPeriods` - Get pay periods for a company
* `getV1CompaniesCompanyIdPaySchedules` - Get the pay schedules for a company
* `getV1CompaniesCompanyIdPaySchedulesPayScheduleId` - Get a pay schedule
* `postV1CompaniesCompanyIdPaySchedules` - Create a new single pay schedule
* `putV1CompaniesCompanyIdPaySchedulesPayScheduleId` - Update a pay schedule

### paymentConfigs

* `getV1CompanyPaymentConfigs` - Get a company's payment configs
* `putV1CompanyPaymentConfigs` - Update a company's payment configs

### payrolls

* `getV1CompaniesCompanyIdPayrollReversals` - Get approved payroll reversals
* `getV1CompaniesCompanyIdPayrolls` - Get all payrolls for a company
* `getV1CompaniesCompanyIdPayrollsPayrollId` - Get a single payroll
* `getV1CompaniesPayrollBlockersCompanyUuid` - Get all payroll blockers for a company
* `getV1PaymentReceiptsPayrollsPayrollUuid` - Get a single payroll receipt
* `getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub` - Get an employee pay stub (pdf)
* `postV1CompaniesCompanyIdPayrolls` - Create an off-cycle payroll
* `postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks` - Generate payroll printable checks (pdf)
* `putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel` - Cancel a payroll
* `putV1CompaniesCompanyIdPayrolls` - Update a payroll by ID
* `putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate` - Update a payroll
* `putV1CompaniesCompanyIdPayrollsPayrollIdCalculate` - Calculate a payroll
* `putV1CompaniesCompanyIdPayrollsPayrollIdSubmit` - Submit payroll

### signatories

* `deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid` - Delete a signatory
* `getV1CompaniesCompanyUuidSignatories` - Get all company signatories
* `postV1CompaniesCompanyUuidSignatoriesInvite` - Invite a signatory
* `postV1CompanySignatories` - Create a signatory
* `putV1CompaniesCompanyUuidSignatoriesSignatoryUuid` - Update a signatory

### taxLiabilities

* `getV1TaxLiabilities` - Get tax liabilities
* `putV1TaxLiabilities` - Update tax liabilities
* `putV1TaxLiabilitiesFinish` - Finalize tax liabilities options and convert into processed payrolls

### taxRequirements

* `getV1CompaniesCompanyUuidTaxRequirements` - Get All Tax Requirement States
* `getV1CompaniesCompanyUuidTaxRequirementsState` - Get State Tax Requirements
* `putV1CompaniesCompanyUuidTaxRequirementsState` - Update State Tax Requirements

### timeOffPolicies

* `getCompaniesCompanyUuidTimeOffPolicies` - Get all time off policies
* `getTimeOffPoliciesTimeOffPolicyUuid` - Get a time off policy
* `postCompaniesCompanyUuidTimeOffPolicies` - Create a time off policy
* `postV1PayrollsPayrollIdCalculateAccruingTimeOffHours` - Calculate accruing time off hours
* `putTimeOffPoliciesTimeOffPolicyUuid` - Update a time off policy
* `putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate` - Deactivate a time off policy
* `putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees` - Remove employees from a time off policy
* `putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees` - Add employees to a time off policy
* `putVersionTimeOffPoliciesTimeOffPolicyUuidBalance` - Update employee time off hour balances

### user

* `getV1Me` - Get the current user

### webhookSubscriptions

* `deleteV1WebhookSubscriptionUuid` - Delete a webhook subscription
* `getV1WebhookSubscriptionUuid` - Get a webhook subscription
* `getV1WebhookSubscriptionVerificationTokenUuid` - Request the webhook subscription verification_token
* `getV1WebhookSubscriptions` - List webhook subscriptions
* `postV1WebhookSubscription` - Create a Webhook Subscription
* `putV1VerifyWebhookSubscriptionUuid` - Verify the webhook subscription
* `putV1WebhookSubscriptionUuid` - Update a webhook subscription
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
