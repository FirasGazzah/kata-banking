import { OperationModel } from "./operation.model";

export class AccountModel{
  id?: number;
  operation?: OperationModel[] = [];
  balance?: number;
}
