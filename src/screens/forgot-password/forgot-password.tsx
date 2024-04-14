import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "moti";
import { GridContainer } from "../../components/grid/grid";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as SMS from "expo-sms";

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const navigation = useNavigation();

  const checkSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable) {
      Alert.alert("SMS is available on this device");
    } else {
      Alert.alert("SMS is not available on this device");
    }
  };

  const sendSMS = async () => {
    const message: string = "4956";
    const { result } = await SMS.sendSMSAsync(number, message);
    if (result === "sent") {
      Alert.alert("Messagem enviada com Sucesso!");
      navigation.navigate("OTP-verification")
  }
}

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
          <Text className="text-[15px] font-normal w-[331px]  text-[#8391A1]">
            Não se preocupe! Isso acontece. Introduza o endereço de correio
            eletrónico associado à sua conta.
          </Text>

          <TextInput
            className="w-[361px] h-14 mb-4 rounded-md border-[#E8ECF4] border-[1px] px-4 placeholder:text-[15px]"
            placeholder="Digite o seu numero"
            value={number}
            onChangeText={setNumber}
            keyboardType="phone-pad"
          />

          <TouchableOpacity
            className="px-32 py-4 rounded-md h-[56px] items-center bg-[#652285]"
            onPress={sendSMS}
          >
            <Text className="text-[15px] font-semibold text-[#FFFF]">
              Enviar código
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={checkSMS}
            className="px-32 py-4 rounded-md h-[56px] items-center bg-[#1E232C]"
          >
            <Text className="text-[15px] font-semibold text-[#FFFF]">
              Avaliar o envio
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row space-x-1 w-full mt-80  justify-center">
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
