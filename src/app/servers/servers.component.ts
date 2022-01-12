import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[custom-attribute]', e.g. <div custom-attribute>
  // selector: '.custom-class', e.g. <div class="custom-class">
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
