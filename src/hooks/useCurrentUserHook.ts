import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const useCurrentUserHook = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const auth = firebase.auth();

    const unsubscribe = auth.onAuthStateChanged((e) => {
      setUser(e);
    });

    return unsubscribe;
  }, []);
  return user;
};

export default useCurrentUserHook;
