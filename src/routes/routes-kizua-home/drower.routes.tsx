import {createDrawerNavigator} from '@react-navigation/drawer'
import {Feather} from '@expo/vector-icons'
import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'


const Drowers = createDrawerNavigator()



export default function DrowersRoutesKizuaHome(){
    return(
        <Drowers.Navigator screenOptions={{ title: ''}}>

            <Drowers.Screen 
             name='home'
             component={TabRoutes}
             options={
                {
                    drawerIcon: ({color, size}) => <Feather color={color} size={size}  name='home'/>,
                    drawerLabel: 'Inicio'
                }
              }
            />
            <Drowers.Screen 
             name='profile'
             component={StackRoutes}
             options={
                {
                    drawerIcon: ({color, size}) => <Feather color={color} size={size}  name='user'/>,
                    drawerLabel: 'Meu perfil'
                }
              }
            />
             <Drowers.Screen 
             name='history'
             component={StackRoutes}
             options={
                {
                    drawerIcon: ({color, size}) => <Feather color={color} size={size}  name='clock'/>,
                    drawerLabel: 'Historico'
                }
              }
            />
        </Drowers.Navigator>
    )
}
