import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('GithubProfile OnInit');
    /* this.route.paramMap
      .subscribe(params => {
        let userId = +params.get('userId');
        console.log('userId: ', userId);
      }); */
  }

  submit(): void {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }


}
