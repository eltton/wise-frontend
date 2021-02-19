import { execute } from "../execute";
import * as commands from "../user/commands";
import * as handlers from "../user/handlers";

async function login(username: string, password: string): Promise<void> {
  await execute(commands.login(username, password), handlers.login);
}

export { login };
