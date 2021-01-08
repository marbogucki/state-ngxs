import { User } from "../models/User";

enum UsersActions {
    FETCH_USERS = '[Users] Fetch',
    FETCH_USERS_SUCCESS = '[Users] Fetch Success',
    FETCH_USERS_FAILURE = '[Users] Fetch Failure'
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
