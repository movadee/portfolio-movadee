import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Project, AppService } from '../app.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [AppService],
  styles: []
})
export class ProjectComponent implements OnInit {

  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AppService
  ) { }

  ngOnInit() {
    this.project$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getProject(params.get('id')));
  }

}
