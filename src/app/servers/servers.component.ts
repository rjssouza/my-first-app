import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  static readonly SERVELESS_STATUS: string = "Nenhum servidor criado";
  static readonly SERVER_STATUS: string = "Servidor criado";

  allowNewServer = false;
  serverCreationStatus: string = ServersComponent.SERVELESS_STATUS;
  serverName = '';
  serverCreated: boolean = false;
  servers : Array<string> = ['Server 1', 'Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  createServer(): void{
    this.serverCreationStatus = ServersComponent.SERVER_STATUS;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }
 
  onUpdateServerName(event: Event){ 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
