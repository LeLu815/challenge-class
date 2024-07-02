"use client";

import { User } from "@supabase/supabase-js";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "./supabase.context";

type AuthContextValue = {
  isInitailized: boolean;
  isLoggedIn: boolean;
  user: User | null;
};

const initalValue: AuthContextValue = {
  isInitailized: false,
  isLoggedIn: false,
  user: null,
};

const AuthContext = createContext(initalValue);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: PropsWithChildren) {
  const [isInitailized, setIsInitailized] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const isLoggedIn = !!user;

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("event, session :", event, session);

      if (event === "INITIAL_SESSION") {
        // handle initial session
        setUser(session?.user || null);
      } else if (event === "SIGNED_IN") {
        // handle sign in event
        setUser(session?.user || null);
      } else if (event === "SIGNED_OUT") {
        // handle sign out event
        setUser(null);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
        setUser(session!.user);
      }
      setIsInitailized(true);
    });
  }, []);

  const value = { isLoggedIn, user, isInitailized };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
