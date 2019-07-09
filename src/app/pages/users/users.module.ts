import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [SearchComponent, SelectComponent, AddUserComponent, DisplayUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
