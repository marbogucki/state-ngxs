import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/User';
import { FetchUsers, FetchUsersSuccess, FetchUsersFailure } from './users.actions';
import { UsersService } from './users.service';

interface UsersStateModel {
  users: User[];
  loading: boolean;
  error: unknown;
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: [],
    loading: false,
    error: undefined
  }
})
@Injectable()
export class UsersState {

  @Selector()
  static users(state: UsersStateModel) {
    return state.users;
  }

  @Selector()
  static loading({ loading }: UsersStateModel) {
    return loading;
  }

  @Selector()
  static error({ error }: UsersStateModel) {
    return error;
  }

  constructor(private usersService: UsersService) {}

  @Action(FetchUsers)
  FetchUsers(ctx: StateContext<UsersStateModel>) {
    ctx.patchState({
      loading: true
    });

    this.usersService.fetchUsers().pipe(
      tap((users: User[]) => ctx.dispatch(new FetchUsersSuccess({ users }))),
      catchError((error: unknown) => ctx.dispatch(new FetchUsersFailure({ error })))
    ).subscribe();
  }

  @Action(FetchUsersSuccess)
  FetchUsersSuccess(
    { patchState }: StateContext<UsersStateModel>,
    { payload: { users } }: FetchUsersSuccess
  ) {
    patchState({ loading: false, users });
  }

  @Action(FetchUsersFailure)
  FetchUsersFailure(
    { patchState }: StateContext<UsersStateModel>,
    { payload: { error } }: FetchUsersFailure
  ) {
    patchState({ loading: false, users: [], error });
  }
}