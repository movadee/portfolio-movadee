import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  projects = [
    {
      "name": "modavee",
      "url": "http://movadee.com/home",
      "framework": "Angular5",
      "styling_library": "Materializecss",
      "hosting": "GitHub Pages",
      "backend": "None",
      "site_analytics": "Google Analytics",
      "email_service": "Google Apps Mail Scripting",
      "summary": "Personal portfolio responsive website",
      "description": ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  openProjectPage() {
    console.log("project page opened");
  }

}
