import * as events from "./events";
import { authenticate } from "./utils";
import { IEvent } from "../index.d";
import { IUserLogin } from "./commands.d";
import { loginErrors } from "./state.d";

async function* login(command: IUserLogin): AsyncIterable<IEvent> {
  yield events.userLoggingIn();

  const result = await authenticate(command.username, command.password);

  if (result === null) {
    yield events.userNotLoggedIn(loginErrors.AUTHENTICATION);
    return;
  }

  yield events.userLoggedIn(result);
}

export { login };
