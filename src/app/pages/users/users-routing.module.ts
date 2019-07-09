import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {SelectComponent} from "./select/select.component";
import {IsLoggedInGuard} from "../../guards/is-logged-in.guard";

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', component: SelectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
