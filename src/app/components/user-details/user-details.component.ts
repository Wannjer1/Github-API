import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  username: string;
  constructor(
    private active: ActivatedRoute,
    private githubService: GithubService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      this.username = params['id'];
    });
  }
}
