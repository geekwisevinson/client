import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {User} from "../../../interfaces/user";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'geekwise-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public users = [];
  constructor(public apiService: ApiService, public authService: AuthService) { }

  ngOnInit() {
    const url = 'https://connect2me.herokuapp.com/api-users';
    this.apiService.get(url).subscribe( (res: {data: User[]}) => {
      if (res && res.data) {
        this.authService.updateUsers(res.data);
      }
    });
    this.authService.users.subscribe( users => {
      this.users = users;
    })
  }

}
