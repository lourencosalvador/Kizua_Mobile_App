import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { View, Text, TouchableOpacity, Alert, Button, StyleSheet, Easing } from 'react-native';


const _color = "#6E01EF"
const _size = 100
 
export function Home() {
  const navigation = useNavigation();

  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <View>
        {[...Array(10).keys()].map(index => {
           return (
            <MotiView 
            from={{
              opacity: 0.7,
              scale: 1
            }}
            animate={{
              opacity: 0,
              scale: 4
            }}
            key={index}
              style={[
               StyleSheet.absoluteFillObject,
               styles.dot
              ]}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                loop: true,
                delay: index * 400,
                repeatReverse: false
              }}
            />
           )
        })}
        <View className='w-[100px] h-[100px] bg-[#8C61E9] rounded-full'>
        </View>
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