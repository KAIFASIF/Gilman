import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface userProps {
  id: null | number;
  name: null | string;
  mobile: null | number;
}
interface AuthState {
  isLoggedin: Boolean;
  role: null | "ADMIN" | "USER";
  user: null | userProps;
}

export const authAtom = atom<AuthState>({
  key: "auth",
  default: {
    isLoggedin: false,
    role: null,
    user: null,
  },
  effects_UNSTABLE: [persistAtom],
});
