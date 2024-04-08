import { ReactNode } from "react"

export interface AuthData {
  token: string,
  email: string,
  name: string
}
export type AuthContextData = {
    authData?: AuthData
    signin: (email: string, password: string) => Promise<AuthData>;
    signout: () => Promise<void>
}

export type AuthProvider = {
  children: ReactNode
}