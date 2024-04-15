import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export function CameraScreen(){
  return(
    <View className="flex-1 justify-center items-center bg-[#ee2]">
      <Text className="text-[24px] font-bold">Hello Camera</Text>
   <StatusBar />
    </View>
  )
}