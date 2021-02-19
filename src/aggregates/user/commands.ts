import { _aggregates } from "../index.d";
import { IUserLogin } from "../user/commands.d";
import { IUserLogout } from "../user/commands.d";
import { _names } from "../user/commands.d";

function login(username: string, password: string): IUserLogin {
  return {
    _aggregate: _aggregates.USER,
    _name: _names.USER_LOGIN,
    _target: null,
    password,
    username,
  };
}

function logout(): IUserLogout {
  return {
    _aggregate: _aggregates.USER,
    _name: _names.USER_LOGOUT,
    _target: null,
  };
}

export { login, logout };
