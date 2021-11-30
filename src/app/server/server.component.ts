import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles:[`
    .online {
      background-color: green;
    }
  `]
})
export class ServerComponent implements OnInit {
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.random();
  }

  ngOnInit(): void {
  }

  getColor(): string{
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

  serverId: number;
  serverStatus: string;
}