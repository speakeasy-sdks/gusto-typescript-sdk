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
npm add @speakeasy-sdks/gusto
```

### Yarn

```bash
yarn add @speakeasy-sdks/gusto
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
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companyBenefits](docs/sdks/companybenefits/README.md)

* [deleteV1CompanyBenefitsCompanyBenefitId](docs/sdks/companybenefits/README.md#deletev1companybenefitscompanybenefitid) - Delete a company benefit
* [getV1Benefits](docs/sdks/companybenefits/README.md#getv1benefits) - Get all benefits supported by Gusto
* [getV1BenefitsBenefitId](docs/sdks/companybenefits/README.md#getv1benefitsbenefitid) - Get a supported benefit by ID
* [getV1BenefitsBenefitsIdRequirements](docs/sdks/companybenefits/README.md#getv1benefitsbenefitsidrequirements) - Get benefit fields requirements by ID
* [getV1BenefitsCompanyBenefitIdSummary](docs/sdks/companybenefits/README.md#getv1benefitscompanybenefitidsummary) - Get company benefit summary by company benefit id.
* [getV1CompaniesCompanyIdCompanyBenefits](docs/sdks/companybenefits/README.md#getv1companiescompanyidcompanybenefits) - Get benefits for a company
* [getV1CompanyBenefitsCompanyBenefitId](docs/sdks/companybenefits/README.md#getv1companybenefitscompanybenefitid) - Get a company benefit
* [postV1CompaniesCompanyIdCompanyBenefits](docs/sdks/companybenefits/README.md#postv1companiescompanyidcompanybenefits) - Create a company benefit
* [putV1CompanyBenefitsCompanyBenefitId](docs/sdks/companybenefits/README.md#putv1companybenefitscompanybenefitid) - Update a company benefit

### [companies](docs/sdks/companies/README.md)

* [getV1Companies](docs/sdks/companies/README.md#getv1companies) - Get a company
* [getV1CompaniesCompanyIdAdmins](docs/sdks/companies/README.md#getv1companiescompanyidadmins) - Get all the admins at a company
* [getV1CompaniesCompanyIdCustomFields](docs/sdks/companies/README.md#getv1companiescompanyidcustomfields) - Get the custom fields of a company
* [getV1CompanyFinishOnboarding](docs/sdks/companies/README.md#getv1companyfinishonboarding) - Finish company onboarding
* [getV1CompanyOnboardingStatus](docs/sdks/companies/README.md#getv1companyonboardingstatus) - Get the company's onboarding status
* [postPartnerManagedCompaniesCompanyUuidAcceptTermsOfService](docs/sdks/companies/README.md#postpartnermanagedcompaniescompanyuuidaccepttermsofservice) - Accept terms of service for a company user
* [postPartnerManagedCompaniesCompanyUuidRetrieveTermsOfService](docs/sdks/companies/README.md#postpartnermanagedcompaniescompanyuuidretrievetermsofservice) - Retrieve terms of service status for a company user
* [postV1CompaniesCompanyIdAdmins](docs/sdks/companies/README.md#postv1companiescompanyidadmins) - Create an admin for the company
* [postV1PartnerManagedCompanies](docs/sdks/companies/README.md#postv1partnermanagedcompanies) - Create a partner managed company
* [postV1Provision](docs/sdks/companies/README.md#postv1provision) - Create a company
* [putV1PartnerManagedCompaniesCompanyUuidMigrate](docs/sdks/companies/README.md#putv1partnermanagedcompaniescompanyuuidmigrate) - Migrate company to embedded payroll

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [getV1CompaniesCompanyIdBankAccounts](docs/sdks/bankaccounts/README.md#getv1companiescompanyidbankaccounts) - Get all company bank accounts
* [postV1CompaniesCompanyIdBankAccounts](docs/sdks/bankaccounts/README.md#postv1companiescompanyidbankaccounts) - Create a company bank account
* [postV1PlaidProcessorToken](docs/sdks/bankaccounts/README.md#postv1plaidprocessortoken) - Create a bank account from a plaid processor token
* [putV1CompaniesCompanyIdBankAccountsVerify](docs/sdks/bankaccounts/README.md#putv1companiescompanyidbankaccountsverify) - Verify a company bank account

### [contractorPayments](docs/sdks/contractorpayments/README.md)

* [deleteV1CompaniesCompanyIdContractorPaymentContractorPayment](docs/sdks/contractorpayments/README.md#deletev1companiescompanyidcontractorpaymentcontractorpayment) - Cancel a contractor payment
* [getV1CompaniesCompanyIdContractorPaymentContractorPayment](docs/sdks/contractorpayments/README.md#getv1companiescompanyidcontractorpaymentcontractorpayment) - Get a single contractor payment
* [getV1CompaniesCompanyIdContractorPayments](docs/sdks/contractorpayments/README.md#getv1companiescompanyidcontractorpayments) - Get contractor payments for a company
* [getV1ContractorPaymentsContractorPaymentUuidReceipt](docs/sdks/contractorpayments/README.md#getv1contractorpaymentscontractorpaymentuuidreceipt) - Get a single contractor payment receipt
* [postV1CompaniesCompanyIdContractorPayments](docs/sdks/contractorpayments/README.md#postv1companiescompanyidcontractorpayments) - Create a contractor payment

### [contractors](docs/sdks/contractors/README.md)

* [deleteV1ContractorsContractorId](docs/sdks/contractors/README.md#deletev1contractorscontractorid) - Delete a contractor
* [getV1CompaniesCompanyIdContractors](docs/sdks/contractors/README.md#getv1companiescompanyidcontractors) - Get contractors of a company
* [getV1ContractorsContractorId](docs/sdks/contractors/README.md#getv1contractorscontractorid) - Get a contractor
* [getV1ContractorsContractorUuidAddress](docs/sdks/contractors/README.md#getv1contractorscontractoruuidaddress) - Get a contractor address
* [getV1ContractorsContractorUuidOnboardingStatus](docs/sdks/contractors/README.md#getv1contractorscontractoruuidonboardingstatus) - Get the contractor's onboarding status
* [postV1CompaniesCompanyIdContractors](docs/sdks/contractors/README.md#postv1companiescompanyidcontractors) - Create a contractor
* [putV1ContractorsContractorId](docs/sdks/contractors/README.md#putv1contractorscontractorid) - Update a contractor
* [putV1ContractorsContractorUuidAddress](docs/sdks/contractors/README.md#putv1contractorscontractoruuidaddress) - Update a contractor's address
* [putV1ContractorsContractorUuidOnboardingStatus](docs/sdks/contractors/README.md#putv1contractorscontractoruuidonboardingstatus) - Change the contractor's onboarding status

### [earningTypes](docs/sdks/earningtypes/README.md)

* [deleteV1CompaniesCompanyIdEarningTypesEarningTypeUuid](docs/sdks/earningtypes/README.md#deletev1companiescompanyidearningtypesearningtypeuuid) - Deactivate an earning type
* [getV1CompaniesCompanyIdEarningTypes](docs/sdks/earningtypes/README.md#getv1companiescompanyidearningtypes) - Get all earning types for a company
* [postV1CompaniesCompanyIdEarningTypes](docs/sdks/earningtypes/README.md#postv1companiescompanyidearningtypes) - Create a custom earning type
* [putV1CompaniesCompanyIdEarningTypesEarningTypeUuid](docs/sdks/earningtypes/README.md#putv1companiescompanyidearningtypesearningtypeuuid) - Update an earning type

### [employees](docs/sdks/employees/README.md)

* [deleteV1Employee](docs/sdks/employees/README.md#deletev1employee) - Delete an onboarding employee
* [getV1Employees](docs/sdks/employees/README.md#getv1employees) - Get an employee
* [getV1EmployeesEmployeeIdCustomFields](docs/sdks/employees/README.md#getv1employeesemployeeidcustomfields) - Get an employee's custom fields
* [getV1EmployeesEmployeeIdHomeAddress](docs/sdks/employees/README.md#getv1employeesemployeeidhomeaddress) - Get an employee's home address
* [getV1EmployeesEmployeeIdOnboardingStatus](docs/sdks/employees/README.md#getv1employeesemployeeidonboardingstatus) - Get the employee's onboarding status
* [getVersionEmployeesTimeOffActivities](docs/sdks/employees/README.md#getversionemployeestimeoffactivities) - Get employee time off activities
* [postV1Employees](docs/sdks/employees/README.md#postv1employees) - Create an employee
* [putV1EmployeeFinishOnboarding](docs/sdks/employees/README.md#putv1employeefinishonboarding) - Finish onboarding an employee
* [putV1Employees](docs/sdks/employees/README.md#putv1employees) - Update an employee
* [putV1EmployeesEmployeeIdHomeAddress](docs/sdks/employees/README.md#putv1employeesemployeeidhomeaddress) - Update an employee's home address
* [putV1EmployeesEmployeeIdOnboardingStatus](docs/sdks/employees/README.md#putv1employeesemployeeidonboardingstatus) - Update the employee's onboarding status

### [federalTaxDetails](docs/sdks/federaltaxdetails/README.md)

* [getV1CompaniesCompanyIdFederalTaxDetails](docs/sdks/federaltaxdetails/README.md#getv1companiescompanyidfederaltaxdetails) - Get Federal Tax Details
* [putV1CompaniesCompanyIdFederalTaxDetails](docs/sdks/federaltaxdetails/README.md#putv1companiescompanyidfederaltaxdetails) - Update Federal Tax Details

### [companyForms](docs/sdks/companyforms/README.md)

* [getV1CompanyForm](docs/sdks/companyforms/README.md#getv1companyform) - Get a company form
* [getV1CompanyFormPdf](docs/sdks/companyforms/README.md#getv1companyformpdf) - Get a company form pdf
* [getV1CompanyForms](docs/sdks/companyforms/README.md#getv1companyforms) - Get all company forms
* [putV1CompanyFormSign](docs/sdks/companyforms/README.md#putv1companyformsign) - Sign a company form

### [industrySelection](docs/sdks/industryselection/README.md)

* [getV1CompanyIndustry](docs/sdks/industryselection/README.md#getv1companyindustry) - Get a company industry selection
* [putV1CompanyIndustry](docs/sdks/industryselection/README.md#putv1companyindustry) - Update a company industry selection

### [locations](docs/sdks/locations/README.md)

* [getV1CompaniesCompanyIdLocations](docs/sdks/locations/README.md#getv1companiescompanyidlocations) - Get company locations
* [getV1LocationsLocationId](docs/sdks/locations/README.md#getv1locationslocationid) - Get a location
* [getV1LocationsLocationUuidMinimumWages](docs/sdks/locations/README.md#getv1locationslocationuuidminimumwages) - Get minimum wages for a location
* [postV1CompaniesCompanyIdLocationsJson](docs/sdks/locations/README.md#postv1companiescompanyidlocationsjson) - Create a company location
* [postV1CompaniesCompanyIdLocationsRaw](docs/sdks/locations/README.md#postv1companiescompanyidlocationsraw) - Create a company location
* [putV1LocationsLocationId](docs/sdks/locations/README.md#putv1locationslocationid) - Update a location

### [paySchedules](docs/sdks/payschedules/README.md)

* [getV1CompaniesCompanyIdPayPeriods](docs/sdks/payschedules/README.md#getv1companiescompanyidpayperiods) - Get pay periods for a company
* [getV1CompaniesCompanyIdPaySchedules](docs/sdks/payschedules/README.md#getv1companiescompanyidpayschedules) - Get the pay schedules for a company
* [getV1CompaniesCompanyIdPaySchedulesPayScheduleId](docs/sdks/payschedules/README.md#getv1companiescompanyidpayschedulespayscheduleid) - Get a pay schedule
* [postV1CompaniesCompanyIdPaySchedules](docs/sdks/payschedules/README.md#postv1companiescompanyidpayschedules) - Create a new single pay schedule
* [putV1CompaniesCompanyIdPaySchedulesPayScheduleId](docs/sdks/payschedules/README.md#putv1companiescompanyidpayschedulespayscheduleid) - Update a pay schedule

### [employeeTermination](docs/sdks/employeetermination/README.md)

* [deleteV1EmployeesEmployeeIdTerminations](docs/sdks/employeetermination/README.md#deletev1employeesemployeeidterminations) - Delete an employee termination
* [getV1CompaniesCompanyIdUnprocessedTerminationPayPeriods](docs/sdks/employeetermination/README.md#getv1companiescompanyidunprocessedterminationpayperiods) - Get termination pay periods for a company
* [getV1EmployeesEmployeeIdTerminations](docs/sdks/employeetermination/README.md#getv1employeesemployeeidterminations) - Get terminations for an employee
* [postV1EmployeesEmployeeIdTerminations](docs/sdks/employeetermination/README.md#postv1employeesemployeeidterminations) - Create an employee termination
* [putV1TerminationsEmployeeId](docs/sdks/employeetermination/README.md#putv1terminationsemployeeid) - Update an employee termination

### [payrolls](docs/sdks/payrolls/README.md)

* [getV1CompaniesCompanyIdPayrollReversals](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrollreversals) - Get approved payroll reversals
* [getV1CompaniesCompanyIdPayrolls](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrolls) - Get all payrolls for a company
* [getV1CompaniesCompanyIdPayrollsPayrollId](docs/sdks/payrolls/README.md#getv1companiescompanyidpayrollspayrollid) - Get a single payroll
* [getV1CompaniesPayrollBlockersCompanyUuid](docs/sdks/payrolls/README.md#getv1companiespayrollblockerscompanyuuid) - Get all payroll blockers for a company
* [getV1PaymentReceiptsPayrollsPayrollUuid](docs/sdks/payrolls/README.md#getv1paymentreceiptspayrollspayrolluuid) - Get a single payroll receipt
* [getV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStub](docs/sdks/payrolls/README.md#getv1payrollspayrolluuidemployeesemployeeuuidpaystub) - Get an employee pay stub (pdf)
* [postV1CompaniesCompanyIdPayrolls](docs/sdks/payrolls/README.md#postv1companiescompanyidpayrolls) - Create an off-cycle payroll
* [postV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecks](docs/sdks/payrolls/README.md#postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks) - Generate payroll printable checks (pdf)
* [putApiV1CompaniesCompanyIdPayrollsPayrollIdCancel](docs/sdks/payrolls/README.md#putapiv1companiescompanyidpayrollspayrollidcancel) - Cancel a payroll
* [putV1CompaniesCompanyIdPayrolls](docs/sdks/payrolls/README.md#putv1companiescompanyidpayrolls) - Update a payroll by ID
* [putV1CompaniesCompanyIdPayrollsPayPeriodStartDatePayPeriodEndDate](docs/sdks/payrolls/README.md#putv1companiescompanyidpayrollspayperiodstartdatepayperiodenddate) - Update a payroll
* [putV1CompaniesCompanyIdPayrollsPayrollIdCalculate](docs/sdks/payrolls/README.md#putv1companiescompanyidpayrollspayrollidcalculate) - Calculate a payroll
* [putV1CompaniesCompanyIdPayrollsPayrollIdSubmit](docs/sdks/payrolls/README.md#putv1companiescompanyidpayrollspayrollidsubmit) - Submit payroll

### [departments](docs/sdks/departments/README.md)

* [deleteDepartment](docs/sdks/departments/README.md#deletedepartment) - Delete a department
* [getCompaniesDepartments](docs/sdks/departments/README.md#getcompaniesdepartments) - Get all departments of a company
* [getDepartment](docs/sdks/departments/README.md#getdepartment) - Get a department
* [postDepartments](docs/sdks/departments/README.md#postdepartments) - Create a department
* [putAddPeopleToDepartment](docs/sdks/departments/README.md#putaddpeopletodepartment) - Add people to a department
* [putDepartments](docs/sdks/departments/README.md#putdepartments) - Update a department
* [putRemovePeopleFromDepartment](docs/sdks/departments/README.md#putremovepeoplefromdepartment) - Remove people from a department

### [externalPayrolls](docs/sdks/externalpayrolls/README.md)

* [deleteV1ExternalPayroll](docs/sdks/externalpayrolls/README.md#deletev1externalpayroll) - Delete an external payroll
* [getV1CompanyExternalPayrolls](docs/sdks/externalpayrolls/README.md#getv1companyexternalpayrolls) - Get external payrolls for a company
* [getV1ExternalPayroll](docs/sdks/externalpayrolls/README.md#getv1externalpayroll) - Get an external payroll
* [getV1ExternalPayrollCalculateTaxes](docs/sdks/externalpayrolls/README.md#getv1externalpayrollcalculatetaxes) - Get tax suggestions for an external payroll
* [postV1ExternalPayroll](docs/sdks/externalpayrolls/README.md#postv1externalpayroll) - Create a new external payroll for a company
* [putV1ExternalPayroll](docs/sdks/externalpayrolls/README.md#putv1externalpayroll) - Update an external payroll

### [taxLiabilities](docs/sdks/taxliabilities/README.md)

* [getV1TaxLiabilities](docs/sdks/taxliabilities/README.md#getv1taxliabilities) - Get tax liabilities
* [putV1TaxLiabilities](docs/sdks/taxliabilities/README.md#putv1taxliabilities) - Update tax liabilities
* [putV1TaxLiabilitiesFinish](docs/sdks/taxliabilities/README.md#putv1taxliabilitiesfinish) - Finalize tax liabilities options and convert into processed payrolls

### [flows](docs/sdks/flows/README.md)

* [postV1CompanyFlows](docs/sdks/flows/README.md#postv1companyflows) - Create a flow

### [paymentConfigs](docs/sdks/paymentconfigs/README.md)

* [getV1CompanyPaymentConfigs](docs/sdks/paymentconfigs/README.md#getv1companypaymentconfigs) - Get a company's payment configs
* [putV1CompanyPaymentConfigs](docs/sdks/paymentconfigs/README.md#putv1companypaymentconfigs) - Update a company's payment configs

### [signatories](docs/sdks/signatories/README.md)

* [deleteV1CompaniesCompanyUuidSignatoriesSignatoryUuid](docs/sdks/signatories/README.md#deletev1companiescompanyuuidsignatoriessignatoryuuid) - Delete a signatory
* [getV1CompaniesCompanyUuidSignatories](docs/sdks/signatories/README.md#getv1companiescompanyuuidsignatories) - Get all company signatories
* [postV1CompaniesCompanyUuidSignatoriesInvite](docs/sdks/signatories/README.md#postv1companiescompanyuuidsignatoriesinvite) - Invite a signatory
* [postV1CompanySignatories](docs/sdks/signatories/README.md#postv1companysignatories) - Create a signatory
* [putV1CompaniesCompanyUuidSignatoriesSignatoryUuid](docs/sdks/signatories/README.md#putv1companiescompanyuuidsignatoriessignatoryuuid) - Update a signatory

### [taxRequirements](docs/sdks/taxrequirements/README.md)

* [getV1CompaniesCompanyUuidTaxRequirements](docs/sdks/taxrequirements/README.md#getv1companiescompanyuuidtaxrequirements) - Get All Tax Requirement States
* [getV1CompaniesCompanyUuidTaxRequirementsState](docs/sdks/taxrequirements/README.md#getv1companiescompanyuuidtaxrequirementsstate) - Get State Tax Requirements
* [putV1CompaniesCompanyUuidTaxRequirementsState](docs/sdks/taxrequirements/README.md#putv1companiescompanyuuidtaxrequirementsstate) - Update State Tax Requirements

### [timeOffPolicies](docs/sdks/timeoffpolicies/README.md)

* [getCompaniesCompanyUuidTimeOffPolicies](docs/sdks/timeoffpolicies/README.md#getcompaniescompanyuuidtimeoffpolicies) - Get all time off policies
* [getTimeOffPoliciesTimeOffPolicyUuid](docs/sdks/timeoffpolicies/README.md#gettimeoffpoliciestimeoffpolicyuuid) - Get a time off policy
* [postCompaniesCompanyUuidTimeOffPolicies](docs/sdks/timeoffpolicies/README.md#postcompaniescompanyuuidtimeoffpolicies) - Create a time off policy
* [postV1PayrollsPayrollIdCalculateAccruingTimeOffHours](docs/sdks/timeoffpolicies/README.md#postv1payrollspayrollidcalculateaccruingtimeoffhours) - Calculate accruing time off hours
* [putTimeOffPoliciesTimeOffPolicyUuid](docs/sdks/timeoffpolicies/README.md#puttimeoffpoliciestimeoffpolicyuuid) - Update a time off policy
* [putV1TimeOffPoliciesTimeOffPolicyUuidDeactivate](docs/sdks/timeoffpolicies/README.md#putv1timeoffpoliciestimeoffpolicyuuiddeactivate) - Deactivate a time off policy
* [putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployees](docs/sdks/timeoffpolicies/README.md#putv1timeoffpoliciestimeoffpolicyuuidremoveemployees) - Remove employees from a time off policy
* [putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployees](docs/sdks/timeoffpolicies/README.md#putversiontimeoffpoliciestimeoffpolicyuuidaddemployees) - Add employees to a time off policy
* [putVersionTimeOffPoliciesTimeOffPolicyUuidBalance](docs/sdks/timeoffpolicies/README.md#putversiontimeoffpoliciestimeoffpolicyuuidbalance) - Update employee time off hour balances

### [jobsAndCompensations](docs/sdks/jobsandcompensations/README.md)

* [deleteV1JobsJobId](docs/sdks/jobsandcompensations/README.md#deletev1jobsjobid) - Delete an individual job
* [getV1CompensationsCompensationId](docs/sdks/jobsandcompensations/README.md#getv1compensationscompensationid) - Get a compensation
* [getV1EmployeesEmployeeIdJobs](docs/sdks/jobsandcompensations/README.md#getv1employeesemployeeidjobs) - Get jobs for an employee
* [getV1JobsJobId](docs/sdks/jobsandcompensations/README.md#getv1jobsjobid) - Get a job
* [getV1JobsJobIdCompensations](docs/sdks/jobsandcompensations/README.md#getv1jobsjobidcompensations) - Get compensations for a job
* [postV1JobsJobId](docs/sdks/jobsandcompensations/README.md#postv1jobsjobid) - Create a job
* [putV1CompensationsCompensationId](docs/sdks/jobsandcompensations/README.md#putv1compensationscompensationid) - Update a compensation
* [putV1JobsJobId](docs/sdks/jobsandcompensations/README.md#putv1jobsjobid) - Update a job

### [contractorPaymentMethod](docs/sdks/contractorpaymentmethod/README.md)

* [getV1ContractorsContractorUuidBankAccounts](docs/sdks/contractorpaymentmethod/README.md#getv1contractorscontractoruuidbankaccounts) - Get all contractor bank accounts
* [getV1ContractorsContractorUuidPaymentMethod](docs/sdks/contractorpaymentmethod/README.md#getv1contractorscontractoruuidpaymentmethod) - Get a contractor's payment method
* [postV1ContractorsContractorUuidBankAccounts](docs/sdks/contractorpaymentmethod/README.md#postv1contractorscontractoruuidbankaccounts) - Create an contractor bank account
* [putV1ContractorsContractorIdPaymentMethod](docs/sdks/contractorpaymentmethod/README.md#putv1contractorscontractoridpaymentmethod) - Update a contractor's payment method

### [contractorForms](docs/sdks/contractorforms/README.md)

* [getV1ContractorForm](docs/sdks/contractorforms/README.md#getv1contractorform) - Get a contractor form
* [getV1ContractorFormPdf](docs/sdks/contractorforms/README.md#getv1contractorformpdf) - Get the contractor form pdf
* [getV1ContractorForms](docs/sdks/contractorforms/README.md#getv1contractorforms) - Get all contractor forms
* [postV1SandboxGenerate1099](docs/sdks/contractorforms/README.md#postv1sandboxgenerate1099) - Generate a 1099 form [SANDBOX]

### [employeeBenefits](docs/sdks/employeebenefits/README.md)

* [deleteV1EmployeeBenefitsEmployeeBenefitId](docs/sdks/employeebenefits/README.md#deletev1employeebenefitsemployeebenefitid) - Delete an employee benefit
* [getV1EmployeeBenefitsEmployeeBenefitId](docs/sdks/employeebenefits/README.md#getv1employeebenefitsemployeebenefitid) - Get an employee benefit
* [getV1EmployeesEmployeeIdEmployeeBenefits](docs/sdks/employeebenefits/README.md#getv1employeesemployeeidemployeebenefits) - Get all benefits for an employee
* [postEmployeeYtdBenefitAmountsFromDifferentCompany](docs/sdks/employeebenefits/README.md#postemployeeytdbenefitamountsfromdifferentcompany) - Create year-to-date benefit amounts from a different company
* [postV1EmployeesEmployeeIdEmployeeBenefits](docs/sdks/employeebenefits/README.md#postv1employeesemployeeidemployeebenefits) - Create an employee benefit
* [putV1EmployeeBenefitsEmployeeBenefitId](docs/sdks/employeebenefits/README.md#putv1employeebenefitsemployeebenefitid) - Update an employee benefit

### [employeePaymentMethod](docs/sdks/employeepaymentmethod/README.md)

* [deleteV1EmployeesEmployeeIdBankAccountsBankAccountId](docs/sdks/employeepaymentmethod/README.md#deletev1employeesemployeeidbankaccountsbankaccountid) - Delete an employee bank account
* [getV1EmployeesEmployeeIdPaymentMethod](docs/sdks/employeepaymentmethod/README.md#getv1employeesemployeeidpaymentmethod) - Get an employee's payment method
* [postV1EmployeesEmployeeIdBankAccounts](docs/sdks/employeepaymentmethod/README.md#postv1employeesemployeeidbankaccounts) - Create an employee bank account
* [putV1EmployeesEmployeeIdPaymentMethod](docs/sdks/employeepaymentmethod/README.md#putv1employeesemployeeidpaymentmethod) - Update an employee's payment method

### [employeeForms](docs/sdks/employeeforms/README.md)

* [getV1EmployeeForm](docs/sdks/employeeforms/README.md#getv1employeeform) - Get an employee form
* [getV1EmployeeFormPdf](docs/sdks/employeeforms/README.md#getv1employeeformpdf) - Get the employee form pdf
* [getV1EmployeeForms](docs/sdks/employeeforms/README.md#getv1employeeforms) - Get all employee forms
* [postV1SandboxGenerateW2](docs/sdks/employeeforms/README.md#postv1sandboxgeneratew2) - Generate a W2 form [SANDBOX]
* [putV1EmployeeFormSign](docs/sdks/employeeforms/README.md#putv1employeeformsign) - Sign an employee form

### [garnishments](docs/sdks/garnishments/README.md)

* [getV1EmployeesEmployeeIdGarnishments](docs/sdks/garnishments/README.md#getv1employeesemployeeidgarnishments) - Get garnishments for an employee
* [getV1GarnishmentsGarnishmentId](docs/sdks/garnishments/README.md#getv1garnishmentsgarnishmentid) - Get a garnishment
* [postV1EmployeesEmployeeIdGarnishments](docs/sdks/garnishments/README.md#postv1employeesemployeeidgarnishments) - Create a garnishment
* [putV1GarnishmentsGarnishmentId](docs/sdks/garnishments/README.md#putv1garnishmentsgarnishmentid) - Update a garnishment

### [employeeTaxSetup](docs/sdks/employeetaxsetup/README.md)

* [getV1EmployeesEmployeeIdFederalTaxes](docs/sdks/employeetaxsetup/README.md#getv1employeesemployeeidfederaltaxes) - Get an employee's federal taxes
* [getV1EmployeesEmployeeIdStateTaxes](docs/sdks/employeetaxsetup/README.md#getv1employeesemployeeidstatetaxes) - Get an employee's state taxes
* [putV1EmployeesEmployeeIdFederalTaxes](docs/sdks/employeetaxsetup/README.md#putv1employeesemployeeidfederaltaxes) - Update an employee's federal taxes
* [putV1EmployeesEmployeeIdStateTaxes](docs/sdks/employeetaxsetup/README.md#putv1employeesemployeeidstatetaxes) - Update an employee's state taxes

### [generatedDocuments](docs/sdks/generateddocuments/README.md)

* [getV1GeneratedDocumentsDocumentTypeRequestUuid](docs/sdks/generateddocuments/README.md#getv1generateddocumentsdocumenttyperequestuuid) - Get a generated document

### [user](docs/sdks/user/README.md)

* [getV1Me](docs/sdks/user/README.md#getv1me) - Get the current user

### [webhookSubscriptions](docs/sdks/webhooksubscriptions/README.md)

* [deleteV1WebhookSubscriptionUuid](docs/sdks/webhooksubscriptions/README.md#deletev1webhooksubscriptionuuid) - Delete a webhook subscription
* [getV1WebhookSubscriptionUuid](docs/sdks/webhooksubscriptions/README.md#getv1webhooksubscriptionuuid) - Get a webhook subscription
* [getV1WebhookSubscriptionVerificationTokenUuid](docs/sdks/webhooksubscriptions/README.md#getv1webhooksubscriptionverificationtokenuuid) - Request the webhook subscription verification_token
* [getV1WebhookSubscriptions](docs/sdks/webhooksubscriptions/README.md#getv1webhooksubscriptions) - List webhook subscriptions
* [postV1WebhookSubscription](docs/sdks/webhooksubscriptions/README.md#postv1webhooksubscription) - Create a Webhook Subscription
* [putV1VerifyWebhookSubscriptionUuid](docs/sdks/webhooksubscriptions/README.md#putv1verifywebhooksubscriptionuuid) - Verify the webhook subscription
* [putV1WebhookSubscriptionUuid](docs/sdks/webhooksubscriptions/README.md#putv1webhooksubscriptionuuid) - Update a webhook subscription
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |


## Example

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    let res;
    try {
        res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Name

You can override the default server globally by passing a server name to the `server: string` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `demo` | `https://api.gusto-demo.com` | None |
| `prod` | `https://api.gusto.com` | None |

For example:

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        server: "prod",
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        serverURL: "https://api.gusto-demo.com",
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @speakeasy-sdks/gusto import Gusto;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Gusto({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
# Authentication

## Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `authorization` | http            | HTTP Bearer     |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import { DeleteV1CompanyBenefitsCompanyBenefitIdRequest } from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto({
        security: {
            authorization: "",
        },
    });
    const companyBenefitId: string = "string";

    const res = await sdk.companyBenefits.deleteV1CompanyBenefitsCompanyBenefitId(companyBenefitId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```

## Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:

```typescript
import { Gusto } from "@speakeasy-sdks/gusto";
import {
    GetV1CompaniesCompanyIdFederalTaxDetailsRequest,
    GetV1CompaniesCompanyIdFederalTaxDetailsSecurity,
} from "@speakeasy-sdks/gusto/dist/sdk/models/operations";

(async () => {
    const sdk = new Gusto();
    const companyId: string = "string";
    const operationSecurity: GetV1CompaniesCompanyIdFederalTaxDetailsSecurity = {
        authorization: "",
    };

    const res = await sdk.federalTaxDetails.getV1CompaniesCompanyIdFederalTaxDetails(
        operationSecurity,
        companyId
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
