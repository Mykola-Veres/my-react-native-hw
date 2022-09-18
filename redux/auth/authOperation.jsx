import db from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authSignUpUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
const authSignInUser = () => async (dispatch, getState) => {};
const authSignOutUser = () => async (dispatch, getState) => {};
