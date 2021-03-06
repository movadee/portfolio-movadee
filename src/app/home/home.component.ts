import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Project, AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AppService],
  styles: []
})
export class HomeComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppService
  ) { }

  ngOnInit() {
    this.projects$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getProjects());
  }

  openProjectPage() {
    console.log("project page opened");
  }

}
