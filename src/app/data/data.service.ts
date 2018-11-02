import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchRepos() {
    const api = 'https://wt-f72012c84caca0beb7f13a054dbfb3f1-0.sandbox.auth0-extend.com/fetchGitHubRepos';
    return this.http.get<any>(api);
  }
}
