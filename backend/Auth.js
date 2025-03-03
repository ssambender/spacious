import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail, onAuthStateChanged } from "firebase/auth";

// Is email already in use?
export async function isEmailInUse(email) {
    const auth = getAuth();
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
}

// Create user in database from email and password
export async function register(email, password, setUser) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  }

  // Cross examine firebase auth database for a matching user email and password
  export async function login(email, password, setUser) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { user: userCredential.user, error: null }
      } catch (error) {
        return { user: null, error: error.message }
      }
  }

  // Check to see when user is logged in and save
  export function initializeAuthListener(setUser, setIsLoggedIn) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }