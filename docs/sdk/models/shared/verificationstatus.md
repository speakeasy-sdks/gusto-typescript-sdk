# VerificationStatus

The verification status of the bank account.

'awaiting_deposits' means the bank account is just created and money is being transferred.
'ready_for_verification' means the micro-deposits are completed and the verification process can begin by using the verify endpoint.
'verified' means the bank account is verified.


## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AwaitingDeposits`     | awaiting_deposits      |
| `ReadyForVerification` | ready_for_verification |
| `Verified`             | verified               |