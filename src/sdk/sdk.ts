import * as utils from "../internal/utils";
import { BankAccounts } from "./bankaccounts";
import { Companies } from "./companies";
import { CompanyBenefits } from "./companybenefits";
import { CompanyForms } from "./companyforms";
import { ContractorForms } from "./contractorforms";
import { ContractorPaymentMethod } from "./contractorpaymentmethod";
import { ContractorPayments } from "./contractorpayments";
import { Contractors } from "./contractors";
import { Departments } from "./departments";
import { EarningTypes } from "./earningtypes";
import { EmployeeBenefits } from "./employeebenefits";
import { EmployeeForms } from "./employeeforms";
import { EmployeePaymentMethod } from "./employeepaymentmethod";
import { Employees } from "./employees";
import { EmployeeTaxSetup } from "./employeetaxsetup";
import { EmployeeTermination } from "./employeetermination";
import { ExternalPayrolls } from "./externalpayrolls";
import { FederalTaxDetails } from "./federaltaxdetails";
import { Flows } from "./flows";
import { Garnishments } from "./garnishments";
import { GeneratedDocuments } from "./generateddocuments";
import { IndustrySelection } from "./industryselection";
import { JobsAndCompensations } from "./jobsandcompensations";
import { Locations } from "./locations";
import * as shared from "./models/shared";
import { PaymentConfigs } from "./paymentconfigs";
import { Payrolls } from "./payrolls";
import { PaySchedules } from "./payschedules";
import { Signatories } from "./signatories";
import { TaxLiabilities } from "./taxliabilities";
import { TaxRequirements } from "./taxrequirements";
import { TimeOffPolicies } from "./timeoffpolicies";
import { User } from "./user";
import { WebhookSubscriptions } from "./webhooksubscriptions";
import axios, { AxiosInstance } from "axios";

export const ServerDemo = "demo";
export const ServerProd = "prod";

export const ServerList: Record<string, string> = {
	[ServerDemo]: "https://api.gusto-demo.com",
	[ServerProd]: "https://api.gusto.com",
} as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}

/* SDK Documentation: Welcome to Gusto's Embedded Payroll API documentation!*/
export class Gusto {
  public bankAccounts: BankAccounts;
  public companies: Companies;
  public companyBenefits: CompanyBenefits;
  public companyForms: CompanyForms;
  public contractorForms: ContractorForms;
  public contractorPaymentMethod: ContractorPaymentMethod;
  public contractorPayments: ContractorPayments;
  public contractors: Contractors;
  public departments: Departments;
  public earningTypes: EarningTypes;
  public employeeBenefits: EmployeeBenefits;
  public employeeForms: EmployeeForms;
  public employeePaymentMethod: EmployeePaymentMethod;
  public employeeTaxSetup: EmployeeTaxSetup;
  public employeeTermination: EmployeeTermination;
  public employees: Employees;
  public externalPayrolls: ExternalPayrolls;
  public federalTaxDetails: FederalTaxDetails;
  public flows: Flows;
  public garnishments: Garnishments;
  public generatedDocuments: GeneratedDocuments;
  public industrySelection: IndustrySelection;
  public jobsAndCompensations: JobsAndCompensations;
  public locations: Locations;
  public paySchedules: PaySchedules;
  public paymentConfigs: PaymentConfigs;
  public payrolls: Payrolls;
  public signatories: Signatories;
  public taxLiabilities: TaxLiabilities;
  public taxRequirements: TaxRequirements;
  public timeOffPolicies: TimeOffPolicies;
  public user: User;
  public webhookSubscriptions: WebhookSubscriptions;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.3.1";
  private _genVersion = "1.9.2";

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[ServerDemo];

    this._defaultClient = props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.bankAccounts = new BankAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companies = new Companies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companyBenefits = new CompanyBenefits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companyForms = new CompanyForms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contractorForms = new ContractorForms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contractorPaymentMethod = new ContractorPaymentMethod(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contractorPayments = new ContractorPayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contractors = new Contractors(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.departments = new Departments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.earningTypes = new EarningTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeBenefits = new EmployeeBenefits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeForms = new EmployeeForms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeePaymentMethod = new EmployeePaymentMethod(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeTaxSetup = new EmployeeTaxSetup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employeeTermination = new EmployeeTermination(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.employees = new Employees(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.externalPayrolls = new ExternalPayrolls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.federalTaxDetails = new FederalTaxDetails(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.flows = new Flows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.garnishments = new Garnishments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generatedDocuments = new GeneratedDocuments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.industrySelection = new IndustrySelection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jobsAndCompensations = new JobsAndCompensations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.locations = new Locations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paySchedules = new PaySchedules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentConfigs = new PaymentConfigs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payrolls = new Payrolls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.signatories = new Signatories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taxLiabilities = new TaxLiabilities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taxRequirements = new TaxRequirements(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.timeOffPolicies = new TimeOffPolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhookSubscriptions = new WebhookSubscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}