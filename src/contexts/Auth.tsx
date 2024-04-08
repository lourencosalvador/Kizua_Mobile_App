
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContextData, AuthData, AuthProvider } from "./@types";
import { authService } from "../services/auth-service";
import { Alert } from "react-native";

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)



export const AuthProvide= ({children}: AuthProvider) => {
    const [authData, setAuth] = useState<AuthData>()

    useEffect(()=> {
      loadFromStorage()
    }, [])

    const loadFromStorage = async() => {
      const auth = await AsyncStorage.getItem('@AuthData')
      auth && setAuth(JSON.parse(auth) as AuthData)
   }

    const signin = async(email: string, password: string) => {
      try {
        const auth = await authService.signIn(email, password)
        setAuth(auth)
        AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
      return auth
      } catch (error) {
         Alert.alert(error.message, 'tente novamente')
      }
    }

    const signout = async(): Promise<void> => {
     setAuth(undefined);
    AsyncStorage.removeItem('@AuthData')
     return;
    }
  return(
    <AuthContext.Provider value={{authData, signin, signout}}>
    {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}