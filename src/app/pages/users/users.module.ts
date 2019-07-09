import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [SearchComponent, SelectComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
