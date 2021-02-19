import { Reducer } from "redux";
import * as IEvents from "src/aggregates/user/events.d";
import { IUserState } from "src/aggregates/user/state.d";

export interface IUserReducer {
  [key: string]: Reducer<IUserState, IEvents>;
}
