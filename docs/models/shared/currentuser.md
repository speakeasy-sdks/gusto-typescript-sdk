# CurrentUser


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `email`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The email address of the authenticated user.                |
| `roles`                                                     | [CurrentUserRoles](../../models/shared/currentuserroles.md) | :heavy_minus_sign:                                          | An object containing each of the user's permissions.        |
| `uuid`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The UUID of the current user.                               |