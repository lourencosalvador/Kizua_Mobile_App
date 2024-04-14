"use client";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "moti";
import { GridContainer } from "../../components/grid/grid";
import { TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { OTPInput } from "../../components/otp/otp";



export function OTPverification() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center bg-[#FFFF]">
      <GridContainer>
        <View className=" mt-16 mb-7">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("./../../../assets/back.png")} />
          </TouchableOpacity>
        </View>

        <View className="mb-12 flex gap-3">
          <Text className="text-[24px] font-bold  text-[#1E232C]">
            Esqueceu a palavra-passe?
          </Text>
          <Text className="text-[15px] font-normal w-[331px] mb-5  text-[#8391A1]">
            Não se preocupe! Isso acontece. Introduza o endereço de correio
            eletrónico associado à sua conta.
          </Text>
          
          <OTPInput length={4}/>

          
        </View>

        <View className="flex flex-row space-x-1 w-full mt-96  justify-center">
          <Text className="text-[15px] font-normal text-[#1E232C]">
            Lembras palavra-passe
          </Text>
          <Text className="text-[15px]  text-[#8C61E9] font-semibold">
            Iniciar sessão
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
