import { Action } from "redux";
import { IUserState } from "./user/state.d";

export enum _aggregates {
  USER = "user",
}

export interface IAppState {
  user: IUserState;
}

export interface ICommand {
  _aggregate: string;
  _name: string;
  _target: number | string | null;
}

export interface ICommandCreator<C> {
  (...args: any[]): C;
}

export interface IEvent extends Action {
  _aggregate: string;
  _name: string;
  _target: number | string | null;
  type: string;
}

export interface IEventCreator<E> {
  (...args: any[]): E;
}

export interface IHandler<C> {
  (command: C, state: IAppState): AsyncIterable<IEvent>;
}
