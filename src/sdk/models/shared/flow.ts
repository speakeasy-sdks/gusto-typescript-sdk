import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// Flow
/** 
 * The representation of a flow in Gusto white-label UI.
**/
export class Flow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}