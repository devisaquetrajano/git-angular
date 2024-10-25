import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../types/user-info.type';
import { UserRepo } from '../types/user-repos.type';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  public getUserInfo(usename: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(`https://api.github.com/users/${usename}`)
  }

  public getUserRepos(username: string): Observable<UserRepo[]>{
    return this.httpClient.get<UserRepo[]>(`https://api.github.com/users/${username}/repos`)
  }
}
