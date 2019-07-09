import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'geekwise-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() public users;
  public userForm: FormGroup;
  constructor(public fb: FormBuilder, public apiService: ApiService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      avatar: ['', Validators.compose([Validators.required])],
      token: ['', Validators.compose([Validators.required])],
    });
  }

  public onSubmit() {
    const url = 'https://connect2me.herokuapp.com/api-users';
    this.apiService.post(url, this.userForm.value).subscribe( res => {
      console.log(res);
    });
  }

}
