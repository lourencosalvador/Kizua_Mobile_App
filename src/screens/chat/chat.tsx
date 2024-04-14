import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { View, Text, TouchableOpacity, Alert, Button, StyleSheet, Image } from 'react-native'; 
import { Wave } from '../../components/wave/wave';
import { Easing } from 'react-native-reanimated';

const _color = "#6E01EF"
const _size = 100

export function Chat() {
  const navigation = useNavigation();

  


  return (
    <View 
    className='flex-1 items-center justify-center bg-[#FFFF]'
    >
     
      <View>
       <Text>Chat</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  }
})

