import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountModel } from '../shared/models/account.model';
import { ClientService } from '../shared/services/clients.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  public clientForm!: FormGroup;
  constructor( private fb: FormBuilder, private clientService: ClientService) { }
  @Output() client: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      phoneNumber: [null],
      account: [null],
      password: [null, [Validators.required]],
    });
  }

  createClient(){
    if(this.clientForm.valid){
      this.clientForm.controls['account'].setValue(this.createClientAccount());
      this.clientService.addClient(this.clientForm.value);
    } else {
      alert('invalid input')
    }
  }
  createClientAccount(){
    const account = new AccountModel();
    account.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    account.balance = 0;
    let operation = {id: account.id, date: new Date(), amount: 0, balance: 0}
    account.operation.push(operation);
    return account;
  }
}
