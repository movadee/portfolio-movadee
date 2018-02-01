import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styles: []
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openProjectPage() {
    console.log("project page opened");
  }
}
