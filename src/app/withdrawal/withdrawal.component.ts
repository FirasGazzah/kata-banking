import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientModel } from '../shared/models/client.model';
import { ClientService } from '../shared/services/clients.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  client: ClientModel = new ClientModel()
  @Output() balance: EventEmitter<any> = new EventEmitter<any>();
  amount?: number;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClient().subscribe((client)=>{
      this.client = client
    })
  }

  withdrawal(){
    if(this.amount > 0){
      const randomId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      let operation = {id: randomId, date: new Date(), amount: Number(this.amount), balance: this.client.account.balance, type: 'withdrawal'}
      this.client.account.operation.push(operation);
      this.client.account.balance = this.client.account.balance - Number(this.amount);
      this.balance.emit(this.client.account.balance);
      localStorage.setItem('client', JSON.stringify(this.client));
    }
  }

}
