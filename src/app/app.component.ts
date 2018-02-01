import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import '../../node_modules/materialize-css/dist/js/materialize.min.js';
declare var M:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
 
  ngOnInit() {
    new M.Modal(document.querySelector('.modal'));
    new M.Sidenav(document.querySelector('.sidenav'));
  }

  sendEvent() {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }

}
