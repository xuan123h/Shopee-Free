// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   // apiKey: "AIzaSyBS7xMl386a29HWWMGMD0za42_K4S8UCJY",
//   // authDomain: "shopee-2022.firebaseapp.com",
//   // projectId: "shopee-2022",
//   // storageBucket: "shopee-2022.appspot.com",
//   // messagingSenderId: "621522232521",
//   // appId: "1:621522232521:web:c4daf954df0ceaaf63d918",
//   apiKey: "AIzaSyDiwulM5WprWP9_R_0Sn-ENBu7wdghTx2A",
//   authDomain: "sendo-441fc.firebaseapp.com",
//   projectId: "sendo-441fc",
//   storageBucket: "sendo-441fc.appspot.com",
//   messagingSenderId: "229142945048",
//   appId: "1:229142945048:web:6443db0a91167f4f8e526d",
// };
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: "AIzaSyDS0i-OfrWl-HUpwCGUT4zt6xgcExeyFcY",
  // authDomain: "fptshop-eaa55.firebaseapp.com",
  // projectId: "fptshop-eaa55",
  // storageBucket: "fptshop-eaa55.appspot.com",
  // messagingSenderId: "470736680462",
  // appId: "1:470736680462:web:777258dc80ed17fdeeae5f",
  apiKey: "AIzaSyDiwulM5WprWP9_R_0Sn-ENBu7wdghTx2A",
  authDomain: "sendo-441fc.firebaseapp.com",
  projectId: "sendo-441fc",
  storageBucket: "sendo-441fc.appspot.com",
  messagingSenderId: "229142945048",
  appId: "1:229142945048:web:6443db0a91167f4f8e526d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
