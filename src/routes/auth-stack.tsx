import { NavigationContainer } from "@react-navigation/native";

import { Sliders } from "../components/sliders/sliders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SigninScreen } from "../screens/signin/signin";
import { LoginScreen } from "../screens/login/login";
import { ForgotPasswordScreen } from "../screens/forgot-password/forgot-password";
import { OTPverification } from "../screens/otp-verification/otp-verification";
import { NewPassScreen } from "../screens/new-pass/new-pass";
import { Sucess } from "../screens/sucess/sucess";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={Sliders} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forgot-passoword" component={Sucess} />
      <Stack.Screen name="OTP-verification" component={OTPverification} />
      <Stack.Screen name="New-passoword" component={NewPassScreen} />
    </Stack.Navigator>
  );
}
