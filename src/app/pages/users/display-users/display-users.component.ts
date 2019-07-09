import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'geekwise-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  @Input() public users;
  constructor() { }

  ngOnInit() {
  }

}
