import { map, switchMap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Component,  OnInit } from '@angular/core';

import { GithubFollowersService } from '../services/github-followers.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        // this.service.getAll({id: id, page: page})
        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers);
  }
}
