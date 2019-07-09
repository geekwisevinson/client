import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'geekwise-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public users = [];
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    const url = 'https://connect2me.herokuapp.com/api-users';
    this.apiService.get(url).subscribe( (res: {data: User[]}) => {
      if (res && res.data) {
        this.users = res.data;
      }
    });
  }

}
