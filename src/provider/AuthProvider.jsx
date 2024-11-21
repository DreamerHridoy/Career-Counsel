import { createContext, useEffect, useState, useMemo } from "react";
import app from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(
          "Account created successfully! Welcome, " +
            (user.displayName || user.email)
        );
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message || "Something went wrong.";
        toast.error("Error creating account: " + errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        toast.success("Welcome back, " + (user.displayName || user.email));
        setUser(user);
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message || "Something went wrong.";
        toast.error("Error logging in: " + errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        const errorMessage = error.message || "Something went wrong.";
        toast.error("Error logging out: " + errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = useMemo(
    () => ({
      user,
      setUser,
      createNewUser,
      logOut,
      userLogin,
      loading,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
