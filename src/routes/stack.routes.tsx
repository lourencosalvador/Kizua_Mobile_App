import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/home";
import { SettingScreen } from "../screens/configuration/configuration";
import { CameraScreen } from "../screens/camera/camera";



const Stack = createNativeStackNavigator()

export default function Stackroutes(){
    return(
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraScreen} />
         <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator> 
    )
}