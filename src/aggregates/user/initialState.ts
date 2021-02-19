import { IUserState } from "./state.d";

const initialState: IUserState = {
  isAuthorized: false,
  isAuthorizing: false,
  loginError: null,
  password: null,
  username: null,
};

export default initialState;
