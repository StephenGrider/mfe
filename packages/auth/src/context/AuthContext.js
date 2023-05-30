import { createContext } from "react"

const AuthContext = createContext({ status: null, onSignIn: () => { }, logout: () => { } });
export default AuthContext