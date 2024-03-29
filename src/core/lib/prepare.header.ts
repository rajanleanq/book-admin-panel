import { session } from "@/constants/token";
import { getCookie} from "cookies-next";

export const prepareProtectedHeader=(headers:Headers) => {
    const token: string | null | undefined = getCookie(session.token)
    if (token) {
      headers.set("Authorization", "Bearer " + token);
    }
    return;
  }