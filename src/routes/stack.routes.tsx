import { NavigationContainer } from "@react-navigation/native";

import { Sliders } from "../components/sliders/sliders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../screens/configuration/configuration";
import { Home } from "../screens/home/home";

const Stack = createNativeStackNavigator()

export default function Stackroutes(){
    return(
       <Stack.Navigator >
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator> 
    )
}