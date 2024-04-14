import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { View, Text, TouchableOpacity, Alert, Button, StyleSheet, Easing } from 'react-native';
import { Wave } from '../../components/wave/wave';



 
export function Home() {
  const navigation = useNavigation();

  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Wave />
      <StatusBar style="auto" />
    </View>
  );
}


