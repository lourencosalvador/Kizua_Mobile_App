import { NavigationContainer,  } from "@react-navigation/native";
import Stackroutes from "./stack.routes";
import AuthStack from "./auth-stack";
import { useContext } from "react";
import { AuthContext, useAuth } from "../contexts/Auth";


export default function Routes() {
  const  {authData} = useAuth()
  return (
    <NavigationContainer>
     {authData ? <Stackroutes /> : <AuthStack />}
    </NavigationContainer>
  );
}