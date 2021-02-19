import api from "../../services/api";

import { AxiosResponse } from "axios";
import { IResponseData } from "./state.d";

async function authenticate(
  email: string,
  password: string
): Promise<string | null> {
  const result: AxiosResponse<IResponseData[]> = await api.get("/user");
  console.log(result);

  const valid = validateUser(result.data, email, password);

  return valid;
}

function validateUser(
  data: IResponseData[],
  email: string,
  password: string
): string | null {
  let indexElement = -1;

  const exists = data.some((e, index) => {
    indexElement = index;
    return e.email === email;
  });

  if (exists === false) {
    return null;
  }

  const responsePassword = data[indexElement]?.password;

  if (responsePassword === password) {
    return data[indexElement].email;
  }

  return null;
}

export { authenticate };
