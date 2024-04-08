import { NavigationContainer } from "@react-navigation/native";

import { Sliders } from "../components/sliders/sliders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SigninScreen } from "../screens/signin/signin";
import { LoginScreen } from "../screens/login/login";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Sliders} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
