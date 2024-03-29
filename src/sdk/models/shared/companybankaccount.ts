/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Bank account type
 */
export enum CompanyBankAccountAccountType {
    Checking = "Checking",
    Savings = "Savings",
}

/**
 * The Plaid connection status of the bank account. Only applies when verification type is Plaid.
 */
export enum CompanyBankAccountPlaidStatus {
    Connected = "connected",
    Disconnected = "disconnected",
}

/**
 * The verification status of the bank account.
 *
 * @remarks
 *
 * 'awaiting_deposits' means the bank account is just created and money is being transferred.
 * 'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
 * 'verified' means the bank account is verified.
 */
export enum CompanyBankAccountVerificationStatus {
    AwaitingDeposits = "awaiting_deposits",
    ReadyForVerification = "ready_for_verification",
    Verified = "verified",
}

/**
 * The verification type of the bank account.
 *
 * @remarks
 *
 * 'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
 * 'plaid' means the bank account is connected through Plaid.
 */
export enum CompanyBankAccountVerificationType {
    BankDeposits = "bank_deposits",
    Plaid = "plaid",
    PlaidExternal = "plaid_external",
}

/**
 * The company bank account
 */
export class CompanyBankAccount extends SpeakeasyBase {
    /**
     * Bank account type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_type" })
    accountType?: CompanyBankAccountAccountType;

    /**
     * The balance fetch date associated with the last_cached_balance. Only applies when verification type is Plaid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "balance_fetched_date" })
    balanceFetchedDate?: string;

    /**
     * UUID of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_uuid" })
    companyUuid?: string;

    /**
     * Masked bank account number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hidden_account_number" })
    hiddenAccountNumber?: string;

    /**
     * The last fetch balance for the bank account. Please be aware that this amount does not reflect the most up-to-date balance and only applies when the verification type is Plaid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_cached_balance" })
    lastCachedBalance?: string;

    /**
     * The Plaid connection status of the bank account. Only applies when verification type is Plaid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "plaid_status" })
    plaidStatus?: CompanyBankAccountPlaidStatus;

    /**
     * The bank account's routing number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "routing_number" })
    routingNumber?: string;

    /**
     * UUID of the bank account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid?: string;

    /**
     * The verification status of the bank account.
     *
     * @remarks
     *
     * 'awaiting_deposits' means the bank account is just created and money is being transferred.
     * 'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
     * 'verified' means the bank account is verified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "verification_status" })
    verificationStatus?: CompanyBankAccountVerificationStatus;

    /**
     * The verification type of the bank account.
     *
     * @remarks
     *
     * 'bank_deposits' means the bank account is connected by entering routing and accounting numbers and verifying through micro-deposits.
     * 'plaid' means the bank account is connected through Plaid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "verification_type" })
    verificationType?: CompanyBankAccountVerificationType;
}
