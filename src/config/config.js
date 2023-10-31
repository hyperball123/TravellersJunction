// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTqaa0ZR_ukjD-jT4BepQox_G1Cg57eTM",
  authDomain: "travellersjunction-65729.firebaseapp.com",
  projectId: "travellersjunction-65729",
  storageBucket: "travellersjunction-65729.appspot.com",
  messagingSenderId: "509314835722",
  appId: "1:509314835722:web:d798f4a6e72214ccb346f3",
  measurementId: "G-8MJR692WRL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       alert(error.msg);
//     });
// };

// export async function signInWithGoogle() {
//   try {
//     await signInWithPopup(auth, googleProvider);
//     console.log("Sign in with Google successful.");
//     // Close the popup after successful sign-in
//     //  window.location.href = "/confirmation.html";
//   } catch (err) {
//     console.error(err);
//   }
// }
