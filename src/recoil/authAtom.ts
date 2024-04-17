// import { atom } from 'recoil';
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

// // interface AuthState {
// //   isLoggedin: boolean;
// //   user: string | null; 
// // }

// export const authAtom = atom<any>({
//   key: 'auth',
//   default: "kaif",
//   effects_UNSTABLE: [persistAtom],
// });


import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface userProps{
  id: null | number
  name: null | string
  role: null | "ROLE_USER" | "ROLE_ADMIN"
  mobile: null | number
}
interface AuthState {
  isLoggedin: boolean;
  user: null | userProps 
}

export const authAtom = atom<AuthState>({
  key: 'auth',
  default:{
    isLoggedin: false,
    user: null
  },
  effects_UNSTABLE: [persistAtom],
});



