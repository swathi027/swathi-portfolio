import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/swathi027/swathi-portfolio';
  constructor(private http: HttpClient) { }
  getRepositories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
