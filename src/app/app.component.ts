import { Component, OnInit } from '@angular/core';
import { GithubService } from './shared/services/github.service';
import { UserInfo } from './shared/types/user-info.type';
import { Observable } from 'rxjs';
import { UserRepo } from './shared/types/user-repos.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  useInfo$: Observable<UserInfo>;
  useRepos$: Observable<UserRepo[]>

  constructor(private githubService: GithubService) { }

  public ngOnInit(): void {
    this.getUserInfo();
    this.getUserRepos();
  }

  public getUserInfo(): void {
    this.useInfo$ = this.githubService.getUserInfo('vtrajanodev');
  }

  public getUserRepos(): void{
    this.useRepos$ = this.githubService.getUserRepos('vtrajanodev')
  }
}
