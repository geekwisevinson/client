import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from '../interfaces/user';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject<User>(null);
  constructor(private router: Router) { }

  public updateUser(user: User) {
    this.user.next(user);
    console.log(user);

    if (user) {
      this.router.navigateByUrl('home/logged-in')
    } else {
      this.router.navigate(['home', 'logged-out'])
    }
  }
}
