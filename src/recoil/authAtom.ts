import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface userProps {
  id: null | number;
  name: null | string;
  mobile: null | number;
  role: null | "ADMIN" | "USER";
}
interface AuthState {
  isLoggedin: Boolean;
  user: userProps;
}

export const authAtom = atom<AuthState>({
  key: "auth",
  default: {
    isLoggedin: false,
    user: { id: null, mobile: null, name: null, role: null },
  },
  effects_UNSTABLE: [persistAtom],
});
