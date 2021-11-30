import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.css']
})
export class AlertWarningComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
