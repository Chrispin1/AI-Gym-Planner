import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "../types";
import { authClient } from "../lib/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeonUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadUser() {
      setIsLoading(true);
      try {
        const result = await authClient.getSession();
        if (result && result.data?.user) {
          setNeonUser(result.data.user);
        }
      } catch (error) {
        setNeonUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser, isLoading }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}
