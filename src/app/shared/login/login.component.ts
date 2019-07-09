import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'geekwise-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe( (user) => {
      this.user = user;
    });
  }

  public onLogIn() {
    this.authService.updateUser({username: 'vinson', avatar: 'url', token: 'jajl'})
  }

  public onLogOut() {
    this.authService.updateUser(null);
  }
}
