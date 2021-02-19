import Store from "../store";

import { IHandler } from "./index.d";

async function execute<C>(command: C, handler: IHandler<C>): Promise<void> {
  for await (const event of handler(command, Store.getState())) {
    Store.dispatch(event);
  }
}

export { execute };
