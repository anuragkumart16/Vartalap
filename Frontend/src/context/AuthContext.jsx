import { createContext ,useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  return (
    <AuthContext.Provider
      value={{ username, setUsername, email, setEmail, userId, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  )
}
