import {
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { Buttom } from "../../components/layout/buttom/buttom";
import { MotiImage, MotiText, MotiView } from "moti";
import { useNavigation } from "@react-navigation/native";

export function ChossingScreen() {
  const navigation = useNavigation();

  const openSignin = () => {
    navigation.navigate("Signin");
  };

  const openLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1  justify-center bg-[#2D293E]">
      <ImageBackground
        source={require("./../../../assets/img.png")}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      ></ImageBackground>

      <View className="absolute top-96  left-2 w-screen h-auto flex flex-col gap-3  justify-center items-center">
        <MotiImage
          from={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            type: "timing",
            duration: 1000,
          }}
          source={require("./../../../assets/logo.png")}
        />

        <TouchableOpacity className="relative" onPress={openLogin}>
          <MotiView
            from={{
              width: 0,
            }}
            animate={{
              width: 331,
            }}
            transition={{
              type: "timing",
              duration: 1000,
            }}
            className="absolute z-30 bg-violet-600 w-[331px] h-[56px] flex items-center justify-center rounded-[8px]"
          >
            <Text className="text-[15px] text-slate-200 font-semibold">
              Login
            </Text>
          </MotiView>
          <Buttom className="bg-[#FFF] w-[331px] h-[56px] flex items-center rounded-[8px]" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openSignin}
          className="bg-[#FFFFFF] w-[331px] h-[56px] flex justify-center items-center rounded-[8px] mb-8"
        >
          <Text className="text-[15px] font-semibold text-[#1E232C] ">
            Registrar
          </Text>
        </TouchableOpacity>
        <Text className="text-[#FFFF] text-[14px] font-semibold ">
          Continuar como convidado
        </Text>
      </View>

      <StatusBar />
    </View>
  );
}
