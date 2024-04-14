import { TouchableOpacity, View, Text, TextInput, Image, StatusBar} from "react-native";
import { GridContainer } from "../../components/grid/grid";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/Auth";
import { useCallback, useState } from "react";

export function NewPassScreen(){
  const navigation = useNavigation();
  const [password, setPassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const {  authData, signin} = useAuth();

  const changePassword = useCallback(()=> {
    if(password === newpassword){
      signin("", password)
    }
  }, [])
  return(
    <View className="flex-1  items-center bg-[#FFFF]">
      <GridContainer>
        <View className=" mt-16 mb-7">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("./../../../assets/back.png")} />
          </TouchableOpacity>
        </View>
        <View className="mb-5 flex gap-3">
          <Text className="text-[27px] font-bold  text-[#1E232C]">
          Criar nova palavra-passe
          </Text>

          <Text className="text-[15px] font-normal w-[331px] mb-5  text-[#8391A1]">
          A sua nova palavra-passe deve ser única em relação às utilizadas anteriormente.
          </Text>
        </View>

        <View className="flex flex-col space-y-5 mb-8">
          <TextInput
            className="w-[361px] h-14  rounded-md border-[#E8ECF4] border-[1px] p-4  placeholder:text-[15px]"
            placeholder="Digite a sua nova password"
            value={password}
            onChangeText={setPassword}
            multiline
          />
          <TextInput
            className="w-[361px] h-14 rounded-md border-[#E8ECF4] border-[1px] p-4 placeholder:text-[15px]"
            placeholder="Confirmar a password"
            value={newpassword}
            onChangeText={setNewpassword}
            multiline
          />
        </View>

        <View className="flex flex-col space-y-8 w-full mb-9">
       

          <TouchableOpacity
           onPress={changePassword}
            className="px-32 py-4 rounded-md h-[56px] items-center bg-[#1E232C]"
          >
            <Text className="text-[15px] font-semibold text-[#FFFF]">
            Repor a palavra-passe
            </Text>
          </TouchableOpacity>
        </View>

  
      </GridContainer>

      <Image
        source={require("./../../../assets/brose.png")}
        className="absolute bottom-0 left-0"
      />

      <StatusBar />
    </View>
  )
}