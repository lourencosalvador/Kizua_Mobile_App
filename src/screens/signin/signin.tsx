import {
  View,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  InputAccessoryView,
  TextInput,
  StyleSheet,
} from "react-native";

import { Buttom } from "../../components/layout/buttom/buttom";
import { MotiImage, MotiText, MotiView } from "moti";
import { useNavigation } from "@react-navigation/native";
import { GridContainer } from "../../components/grid/grid";
import { Input } from "../../components/layout/input/input";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { useAuth } from "../../contexts/Auth";

export function SigninScreen() {

  const bottomRef = useRef<BottomSheet>(null);
  const snapPoint = useMemo(() => ["80%", "50%"], []);
  const navigation = useNavigation();


  const handleCloseAction = () => bottomRef.current?.close();
  const handleOpenPress = () => bottomRef.current?.expand();

  const handleChange = useCallback((index: any) => {
    console.log("O estado atual", index);
  }, []);
  return (
    <GestureHandlerRootView className="flex-1">
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
              placeholder="Digite o seu nome"
              
            />
            <TextInput
              className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
              placeholder="Digite o seu email"
              keyboardType="email-address"
            />
            <TextInput
              className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
              placeholder="Digite o sua password"
              keyboardType="visible-password"
            />
            <TextInput
              className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
              placeholder="Confirma a password"
              keyboardType="visible-password"
            />
          </View>

          <View className="flex flex-col space-y-8 w-full mb-9">
            <TouchableOpacity
              onPress={handleOpenPress}
              className="px-32 py-4 rounded-md h-[56px] items-center bg-[#1E232C]"
            >
              <Text className="text-[15px] font-semibold text-[#FFFF]">
                Registrar-se
              </Text>
            </TouchableOpacity>
          </View>

          <View className="w-full items-center flex space-y-6 mb-20">
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
          className="absolute bottom-0 left-0 "
        />

        <BottomSheet
          ref={bottomRef}
          index={0}
          snapPoints={snapPoint}
          backgroundStyle={{ backgroundColor: "transparent" }}
          enablePanDownToClose={true}
        >
          <View className="relative h-screen w-full items-center bg-[#131417] rounded-l-[25px] rounded-r-[25px]">
            <Image
              source={require("./../../../assets/gost.png")}
              resizeMode="cover"
              className="w-screen rounded-l-[25px] rounded-r-[25px]"
            ></Image>

            <View className=" flex px-8   absolute top-96 h-auto space-y-5">
              <Text className="text-[17px] leading-6 text-center  font-normal text-[#FFFF]">
                Por motivos de geneticas, por alguns serem surdos e outros
                mudos, pretendemos saber se{" "}
                <Text className="font-semibold text-[#F96EDA]">Lourenço </Text>
                apresenta os mesmo problemas, se sim clica em continuar se não
                apenas cancelar.
              </Text>
              <TouchableOpacity
               onPress={handleCloseAction}
                className="px-32 py-4 rounded-md h-[56px] flex items-center justify-center  bg-[#652285]"
              >
                <Text className="text-[15px] font-semibold text-[#FFFF]">
                  Continuar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={handleCloseAction}
                className="px-32 py-4 rounded-md h-[56px] flex items-center justify-center bg-[#1E232C]"
              >
                <Text className="text-[15px] font-semibold text-[#FFFF]">
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>

        <StatusBar />
      </View>
    </GestureHandlerRootView>
    
  );
}
