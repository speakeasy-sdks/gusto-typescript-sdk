/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Demo
 */
export const ServerDemo = "demo";
/**
 * Production
 */
export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList: Record<string, string> = {
    [ServerDemo]: "https://api.gusto-demo.com",
    [ServerProd]: "https://api.gusto.com",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2023-03-01";
    sdkVersion = "0.50.3";
    genVersion = "2.118.1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Gusto API: Welcome to Gusto's Embedded Payroll API documentation!
 */
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

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const server = props?.server ?? ServerDemo;

        if (!serverURL) {
            serverURL = ServerList[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.bankAccounts = new BankAccounts(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.companyBenefits = new CompanyBenefits(this.sdkConfiguration);
        this.companyForms = new CompanyForms(this.sdkConfiguration);
        this.contractorForms = new ContractorForms(this.sdkConfiguration);
        this.contractorPaymentMethod = new ContractorPaymentMethod(this.sdkConfiguration);
        this.contractorPayments = new ContractorPayments(this.sdkConfiguration);
        this.contractors = new Contractors(this.sdkConfiguration);
        this.departments = new Departments(this.sdkConfiguration);
        this.earningTypes = new EarningTypes(this.sdkConfiguration);
        this.employeeBenefits = new EmployeeBenefits(this.sdkConfiguration);
        this.employeeForms = new EmployeeForms(this.sdkConfiguration);
        this.employeePaymentMethod = new EmployeePaymentMethod(this.sdkConfiguration);
        this.employeeTaxSetup = new EmployeeTaxSetup(this.sdkConfiguration);
        this.employeeTermination = new EmployeeTermination(this.sdkConfiguration);
        this.employees = new Employees(this.sdkConfiguration);
        this.externalPayrolls = new ExternalPayrolls(this.sdkConfiguration);
        this.federalTaxDetails = new FederalTaxDetails(this.sdkConfiguration);
        this.flows = new Flows(this.sdkConfiguration);
        this.garnishments = new Garnishments(this.sdkConfiguration);
        this.generatedDocuments = new GeneratedDocuments(this.sdkConfiguration);
        this.industrySelection = new IndustrySelection(this.sdkConfiguration);
        this.jobsAndCompensations = new JobsAndCompensations(this.sdkConfiguration);
        this.locations = new Locations(this.sdkConfiguration);
        this.paySchedules = new PaySchedules(this.sdkConfiguration);
        this.paymentConfigs = new PaymentConfigs(this.sdkConfiguration);
        this.payrolls = new Payrolls(this.sdkConfiguration);
        this.signatories = new Signatories(this.sdkConfiguration);
        this.taxLiabilities = new TaxLiabilities(this.sdkConfiguration);
        this.taxRequirements = new TaxRequirements(this.sdkConfiguration);
        this.timeOffPolicies = new TimeOffPolicies(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.webhookSubscriptions = new WebhookSubscriptions(this.sdkConfiguration);
    }
}
