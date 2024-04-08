
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/Auth';
 
 export function SettingScreen() {
  const {signout} = useAuth()
  return(
    <View className="flex-1  items-center justify-center bg-white">
      <Text className="text-lg font-semibold mb-4" >Configurações</Text>
      <TouchableOpacity onPress={signout} className="px-32 py-4 bg-red-600 rounded-md">
      <Text className=" text-[14px] text-slate-200">Sair do App</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
 }