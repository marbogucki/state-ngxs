import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { UsersRoutingModule } from './users-routing.module';
import { UsersState } from './store/users.state';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([UsersState]),
    UsersRoutingModule,
  ]
})
export class UsersModule { }
