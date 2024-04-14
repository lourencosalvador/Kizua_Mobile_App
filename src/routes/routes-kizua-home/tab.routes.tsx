import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'
import { Home } from '../../screens/home/home'
import { Chat } from '../../screens/chat/chat'

const Tap = createBottomTabNavigator()


export default function TabRoutes(){
    return(
        <Tap.Navigator screenOptions={{ headerShown: false}}>
            <Tap.Screen 
              name='home'
              component={Home}
              options={
                {
                    tabBarIcon: ({color, size}) => <Feather color={color} size={size}  name='home'/>,
                    tabBarLabel: 'Inicio'
                }
              }
            />
            
            <Tap.Screen 
              name='chat'
              component={Chat}
              options={
                {
                    tabBarIcon: ({color, size}) => <Feather color={color} size={size}   name='plus'/>,
                    tabBarLabel: 'Novo'
                }
              }
            />
        </Tap.Navigator>
    )
}