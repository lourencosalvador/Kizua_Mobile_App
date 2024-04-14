import { MotiView } from "moti"
import { View, StyleSheet, Image} from "react-native"
import { Easing } from "react-native-reanimated"


const _color = "#6E01EF"
const _size = 100

export function Wave(){
  return(
    <>
     <View style={[styles.dot]}>
       {[...Array(10).keys()].map((index) => {
        return(
          <MotiView 
          from={{
            opacity: 0.7,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 4
          }}
          transition={{
            type: 'timing',
            duration: 2000,
            delay: index * 400,
            repeatReverse: false,
            loop: true,
            easing: Easing.out(Easing.ease)
          }}
           key={index}
           style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        )
       })}
        <View className='w-[100px] h-[100px] rounded-full overflow-hidden'>
          <Image
          className="w-[100px] h-[100px] object-cover"
           source={require("../../../assets/photo-perfil.jpg")}/>
        </View>
      </View>
    </>
  )
} 



const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  }
})
