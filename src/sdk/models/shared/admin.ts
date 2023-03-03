import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// Admin
/** 
 * The representation of an admin user in Gusto.
**/
export class Admin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid?: string;
}