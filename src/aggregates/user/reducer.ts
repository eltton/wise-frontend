import initialState from "./initialState";
import Store from "../../store";

import { IUserLoggedIn } from "./events.d";
import { IUserNotLoggedIn } from "./events.d";
import { types as eventTypes } from "./events.d";
import { IUserReducer } from "./reducer.d";
import { IUserState } from "./state.d";

const eventsMap: IUserReducer = {
  [eventTypes.USER_LOGGED_IN]: (
    state: IUserState | undefined,
    event: IUserLoggedIn
  ): IUserState => {
    if (state === undefined) {
      return initialState;
    }

    return {
      ...state,
      isAuthorized: true,
      isAuthorizing: false,
      loginError: null,
      username: event._target,
    };
  },

  [eventTypes.USER_LOGGING_IN]: (state: IUserState | undefined): IUserState => {
    if (state === undefined) {
      return initialState;
    }

    return {
      ...state,
      isAuthorizing: true,
      loginError: null,
    };
  },

  [eventTypes.USER_NOT_LOGGED_IN]: (
    state: IUserState | undefined,
    event: IUserNotLoggedIn
  ): IUserState => {
    if (state === undefined) {
      return initialState;
    }
    return {
      ...state,
      isAuthorized: false,
      isAuthorizing: false,
      loginError: event.reason,
    };
  },
};

const reducer = Store.createReducer(initialState, eventsMap);
export default reducer;
