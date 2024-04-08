import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAuth } from "../../contexts/Auth";
import { useState } from "react";

export function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();
  return (
    <View className="flex-1  items-center justify-center bg-white">
      <Text className="text-lg font-semibold mb-4">Signin Kizua ❤️👌</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        className="w-9/12 rouded-md p-4 mb-4 border-[#dedede] border-[1px]"
        placeholder="Digite o seu email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        className="w-9/12 rouded-md p-4 mb-4 border-[#dedede] border-[1px]"
        placeholder="Digite a sua senha"
      />
      <TouchableOpacity
        onPress={() => signin(email, password)}
        className="px-32 py-4 bg-violet-600 rounded-md"
      >
        <Text className=" text-[14px] text-slate-200">Sgnin App</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
}
