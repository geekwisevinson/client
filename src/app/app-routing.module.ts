import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IsLoggedInGuard} from "./guards/is-logged-in.guard";

const routes: Routes = [
  {path: 'home', loadChildren: './pages/landing/landing.module'},
  {path: 'users', loadChildren: './pages/users/users.module#UsersModule',
    canActivateChild: [IsLoggedInGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
