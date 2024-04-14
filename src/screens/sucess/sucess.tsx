
import React from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Sucess(){
  const navigation  = useNavigation()
  return(
   <View className='flex-1 py-32 bg-[#FFFFFF]'>
    <View className='flex justify-center items-center '>
     <LottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        source={require("./../../../sucess.json")}
      />
     </View> 
     
     <View className='flex justify-center items-center space-y-2'>
        <Text className='text-[26px] font-bold text-[#1E232C]'>Palavra-passe alterada!</Text>
        <Text  className='text-[15px] font-medium text-[#8391A1] w-[226px] text-center leading-5'>A sua palavra-passe foi alterada com sucess</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
            className="px-32 py-4  rounded-md h-[56px] items-center bg-[#1E232C]"
          >
            <Text className="text-[15px] font-semibold text-[#FFFF]">
            Voltar ao Login
            </Text>
          </TouchableOpacity>
      </View>
       
       <Image
        source={require("./../../../assets/brose.png")}
        className="absolute bottom-0 left-0"
      />
     
   </View>
  );
}
