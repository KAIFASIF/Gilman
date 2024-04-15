import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// interface AuthState {
//   isLoggedin: boolean;
//   user: string | null; 
// }

export const authAtom = atom<any>({
  key: 'auth',
  default: "kaif",
  effects_UNSTABLE: [persistAtom],
});


// import { atom } from 'recoil';
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

// interface userProps{
//   name: null | string
//   mobile: null | number
// }
// interface AuthState {
//   isLoggedin: boolean;
//   user: userProps 
// }

// export const authAtom = atom<AuthState>({
//   key: 'auth',
//   default:{
//     isLoggedin: false,
//     user: {
//       name:null,
//       mobile:null
//     }
//   },
//   effects_UNSTABLE: [persistAtom],
// });



