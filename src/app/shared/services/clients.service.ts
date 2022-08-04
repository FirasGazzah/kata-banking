import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientModel } from '../models/client.model';

@Injectable({providedIn: 'root'})
export class ClientService {
  private client = new BehaviorSubject(new ClientModel());

  constructor() { }

  public addClient(client: ClientModel){
    this.client.next(client)
  }
  public getClient(){
    return this.client
  }

}
