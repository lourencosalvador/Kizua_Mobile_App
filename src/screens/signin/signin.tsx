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

import { Buttom } from "../../components/layout/buttom/buttom";
import { MotiImage, MotiText, MotiView } from "moti";
import { useNavigation } from "@react-navigation/native";
import { GridContainer } from "../../components/grid/grid";
import { Input } from "../../components/layout/input/input";


export function SigninScreen() {
  const navigation = useNavigation();
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
        <Input placeholder="Digte o seu nome"/>
          <Input placeholder="Digte o seu email"/>
          <Input placeholder="Digte a sua password"/>
          <Input placeholder="Confirmar a  password"/>
        </View>

        <View className="flex flex-col space-y-8 w-full mb-9">
         
          <Buttom 
          className="h-[56px] items-center bg-[#1E232C]"
          text="Registrar"
          classNameText="text-[15px] font-semibold"
          />
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
        <Text className="text-[15px] font-normal text-[#1E232C]">Não tem uma conta? </Text>
        <Text className="text-[15px]  text-[#8C61E9] font-semibold">Registar agora</Text>
      </View>
       
      </GridContainer>
      
  
      <Image source={require("./../../../assets/brose.png")} className="absolute bottom-0 left-0 "/>
     
      <StatusBar />
    </View>
  );
}



