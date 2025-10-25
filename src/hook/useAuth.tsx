import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  removeUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const removeUser = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
