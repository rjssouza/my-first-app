import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = 'robsonjs';
  
  emptyUsername(){
    return this.username == '';
  }

  reset() : void{
    this.username = '';
  }
}
