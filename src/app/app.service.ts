import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Project {
  constructor(
    public id: number, 
    public name: string,
    public url: string,
    public framework: string,
    public stylingLibrary: string,
    public hosting: string,
    public backend: string,
    public siteAnalytics: string,
    public emailService: string,
    public summary: string,
    public description: string
  ) { }
}

const PROJECTS = [
  new Project( 1, 'modavee', 'http://movadee.com/home', 'Angular5', 'MaterializeCss', 'GitHub Pages', 
              'None', 'Google Analytic', 'Google Apps Mail Scripting', 'Personal portfolio responsive website',
              '')
];

@Injectable()
export class AppService {
  
  getProjects() { return Observable.of(PROJECTS); }

  getProject(id: number | string) {
    return this.getProjects()
      // (+) before `id` turns the string into a number
      .map(projects => projects.find(project => project.id === +id));
  }
}