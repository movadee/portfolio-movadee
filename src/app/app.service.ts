import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Project {
  constructor(
    public id: number, 
    public name: string,
    public url: string,
    public github: string,
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
  new Project( 1, 'movadee', 'http://movadee.com/home', 'https://github.com/movadee/portfolio-movadee', 'Angular5', 'MaterializeCss', 'GitHub Pages', 
              'None', 'Google Analytic', 'Google Apps Mail Scripting', 'Personal portfolio responsive website',
              'This is my personal online portfolio project. I created it using Angular5 and other cool stuff. I feel like it is more fun to learn new' + 
              'programming concepts or just experiment on some "real world" project, therefore I created this portfolio. I also want to describe my' +
              'thought process ofother projects I was or will be working on.')
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