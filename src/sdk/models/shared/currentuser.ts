import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompanyAddress } from "./companyaddress";
import { Expose, Type } from "class-transformer";

export class CurrentUserRolesPayrollAdminCompanies extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "is_partner_managed" })
  isPartnerManaged?: boolean;

  @SpeakeasyMetadata({ elemType: CompanyAddress })
  @Expose({ name: "locations" })
  @Type(() => CompanyAddress)
  locations?: CompanyAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tier" })
  tier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "trade_name" })
  tradeName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}

export class CurrentUserRolesPayrollAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CurrentUserRolesPayrollAdminCompanies })
  @Expose({ name: "companies" })
  @Type(() => CurrentUserRolesPayrollAdminCompanies)
  companies?: CurrentUserRolesPayrollAdminCompanies[];
}

// CurrentUserRoles
/**
 * An object containing each of the user's permissions.
 **/
export class CurrentUserRoles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payroll_admin" })
  @Type(() => CurrentUserRolesPayrollAdmin)
  payrollAdmin?: CurrentUserRolesPayrollAdmin;
}

export class CurrentUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "roles" })
  @Type(() => CurrentUserRoles)
  roles?: CurrentUserRoles;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}
