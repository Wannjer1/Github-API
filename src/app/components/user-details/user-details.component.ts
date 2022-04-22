import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  username: string;
  userDetail: any;
  repos: any = [];

  constructor(
    private active: ActivatedRoute,
    private githubService: GithubService,
    private route: Router,
    private repoService: ReposService
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      this.username = params['id'];
      // console.log('params -', this.username);
    });

    this.githubService.getUser(this.username).subscribe({
      complete: () => {
        // console.log('successfully done');
      },
      error: () => {
        alert('You have entered a wrong username!');
        this.route.navigate(['search']);
      },
      next: (data: any = []) => {
        this.userDetail = data;
        // console.log(this.userDetail);
      },
    });
    this.reposArray();
  }

  reposArray() {
    this.repoService
      .getRepos(this.username)
      .subscribe((repos) => (this.repos = repos));
  }
}
