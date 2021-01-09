import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { FetchUsers } from '../../store/users.actions';
import { UsersState } from '../../store/users.state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Select(UsersState.users) users$: Observable<User[]>;
  @Select(UsersState.loading) loading$: Observable<boolean>;
  @Select(UsersState.error) error$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchUsers());
  }
}
