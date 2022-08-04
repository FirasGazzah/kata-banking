import { Component, OnInit } from '@angular/core';
import { ClientModel } from './shared/models/client.model';
import { ClientService } from './shared/services/clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'kata-bank';
  public connected = '';
  public client?: ClientModel;
  balance = 0

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClient().subscribe((client)=>{
      if(client.account){
        this.client = client
        alert('Welcome to our BANK')
      }
    })
  }

  myBalance(balance){
    this.balance = balance;
  }
}
