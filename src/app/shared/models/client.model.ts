import { AccountModel } from "./account.model";

export class ClientModel{
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  account?: AccountModel;
}
