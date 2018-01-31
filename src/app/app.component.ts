import { Component, OnInit } from '@angular/core';

import '../../node_modules/materialize-css/dist/js/materialize.min.js';
declare var M:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    new M.Modal(document.querySelector('.modal'));
  }
}
