import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  getRepos(username: string) {
    return this.http.get(this.url + username + '/repos');
  }
}

// "https://api.github.com/users/Wannjer1/repos",
