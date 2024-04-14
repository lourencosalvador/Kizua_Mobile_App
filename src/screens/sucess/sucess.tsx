import React from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView, View } from 'moti';

export function Sucess(){
  return(
   <View className='flex-1 justify-center items-center bg-[#131417]'>
      <LottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        source={require("./../../../sucess.json")}
      />
   </View>
  );
}
