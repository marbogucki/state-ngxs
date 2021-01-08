import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { UsersRoutingModule } from './users-routing.module';
import { UsersState } from './store/users.state';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forRoot([UsersState]),
    UsersRoutingModule,
  ]
})
export class UsersModule { }
