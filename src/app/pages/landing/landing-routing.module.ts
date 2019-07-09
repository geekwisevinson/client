import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedOutComponent} from "./logged-out/logged-out.component";
import {LoggedInComponent} from "./logged-in/logged-in.component";
import {IsLoggedInGuard} from "../../guards/is-logged-in.guard";

const routes: Routes = [
  { path: 'logged-out', component: LoggedOutComponent},
  { path: 'logged-in', component: LoggedInComponent, canActivate: [IsLoggedInGuard]},
  {path: '**', redirectTo: 'logged-out'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
