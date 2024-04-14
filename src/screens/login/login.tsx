import {
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  InputAccessoryView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GridContainer } from "../../components/grid/grid";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { signin } = useAuth();

  const openForgotPassword = () => {
    navigation.navigate("Forgot-passoword");
  };
  return (
    <View className="flex-1  items-center bg-[#FFFF]">
      <GridContainer>
        <View className=" mt-16 mb-7">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("./../../../assets/back.png")} />
          </TouchableOpacity>
        </View>
        <View className="mb-12">
          <Text className="text-[24px] font-bold w-[290px] text-[#1E232C]">
            Bem-vindo de volta! É um prazer voltar a ver-te!
          </Text>
        </View>

        <View className="flex flex-col space-y-5 mb-8">
          <TextInput
            className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
            placeholder="Digite o seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
            placeholder="Digite a sua password"
            value={password}
            onChangeText={setPassword}
            keyboardType="email-address"
          />
        </View>

        <View className="flex flex-col space-y-8 w-full mb-9">
          <TouchableOpacity onPress={openForgotPassword}>
            <Text className="text-[14px] font-semibold text-[#6A707C] flex ml-[150px]">
              Esqueceu-se da palavra-passe?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => signin(email, password)}
            className="px-32 py-4 rounded-md h-[56px] items-center bg-[#1E232C]"
          >
            <Text className="text-[15px] font-semibold text-[#FFFF]">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full items-center flex space-y-6 mb-44">
          <Image source={require("./../../../assets/types.png")} />
          <View className=" flex flex-row space-x-2">
            <TouchableOpacity className="w-28 h-14 border-[#E8ECF4] border-[1px] rounded-[8px] flex justify-center items-center">
              <Image source={require("./../../../assets/facebook_ic.png")} />
            </TouchableOpacity>

            <TouchableOpacity className="w-28 h-14 border-[#E8ECF4] border-[1px] rounded-[8px] flex justify-center items-center">
              <Image source={require("./../../../assets/google_ic.png")} />
            </TouchableOpacity>

            <TouchableOpacity className="w-28 h-14 border-[#E8ECF4] border-[1px] rounded-[8px] flex justify-center items-center">
              <Image source={require("./../../../assets/cib_apple.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row space-x-1 w-full   justify-center">
          <Text className="text-[15px] font-normal text-[#1E232C]">
            Não tem uma conta?{" "}
          </Text>
          <Text className="text-[15px]  text-[#8C61E9] font-semibold">
            Registar agora
          </Text>
        </View>
      </GridContainer>

      <Image
        source={require("./../../../assets/brose.png")}
        className="absolute bottom-0 left-0"
      />

      <StatusBar />
    </View>
  );
}
