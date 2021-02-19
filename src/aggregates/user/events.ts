import { _aggregates } from "../index.d";
import { IUserLoggedIn } from "./events.d";
import { IUserLoggedOut } from "./events.d";
import { IUserLoggingIn } from "./events.d";
import { IUserLoggingOut } from "./events.d";
import { IUserNotLoggedIn } from "./events.d";
import { types } from "./events.d";
import { loginErrors } from "./state.d";

function userLoggedIn(username: string): IUserLoggedIn {
  return {
    _aggregate: _aggregates.USER,
    _name: types.USER_LOGGED_IN,
    _target: username,
    type: types.USER_LOGGED_IN,
  };
}

function userLoggedOut(): IUserLoggedOut {
  return {
    _aggregate: _aggregates.USER,
    _name: types.USER_LOGGED_OUT,
    _target: null,
    type: types.USER_LOGGED_OUT,
  };
}

function userLoggingIn(): IUserLoggingIn {
  return {
    _aggregate: _aggregates.USER,
    _name: types.USER_LOGGING_IN,
    _target: null,
    type: types.USER_LOGGING_IN,
  };
}

function userLoggingOut(): IUserLoggingOut {
  return {
    _aggregate: _aggregates.USER,
    _name: types.USER_LOGGING_OUT,
    _target: null,
    type: types.USER_LOGGING_OUT,
  };
}

function userNotLoggedIn(reason: loginErrors): IUserNotLoggedIn {
  return {
    _aggregate: _aggregates.USER,
    _name: types.USER_NOT_LOGGED_IN,
    _target: null,
    reason,
    type: types.USER_NOT_LOGGED_IN,
  };
}

export {
  userLoggedIn,
  userLoggedOut,
  userLoggingIn,
  userLoggingOut,
  userNotLoggedIn,
};
