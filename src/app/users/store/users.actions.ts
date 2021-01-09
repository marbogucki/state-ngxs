import { User } from "../models/User";

enum UsersActions {
    FETCH_USERS = '[Users] Fetch',
    FETCH_USERS_SUCCESS = '[Users] Fetch Success',
    FETCH_USERS_FAILURE = '[Users] Fetch Failure',
    ADD_USER = '[Users] Add',
    ADD_USER_SUCCESS = '[Users] Add Success',
    ADD_USER_FAILURE = '[Users] Add Failure'
}

export class FetchUsers {
    static readonly type = UsersActions.FETCH_USERS;
    constructor() {}
}

export class FetchUsersSuccess {
    static readonly type = UsersActions.FETCH_USERS_SUCCESS;
    constructor(public payload: { users: User[] }) {}
}

export class FetchUsersFailure {
    static readonly type = UsersActions.FETCH_USERS_FAILURE;
    constructor(public payload: { error: unknown }) {}
}

export class AddUser {
    static readonly type = UsersActions.ADD_USER;
    constructor(public payload: { user: Partial<User> }) {}
}

export class AddUserSuccess {
    static readonly type = UsersActions.ADD_USER_SUCCESS;
    constructor(public payload: { user: User }) {}
}

export class AddUserFailure {
    static readonly type = UsersActions.ADD_USER_FAILURE;
    constructor(public payload: { error: unknown }) {}
}
