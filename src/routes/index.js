import { StyleSheet, Text, View } from 'react-native';
import Routes from './StackRoutes'
import Novidades from '../pages/notifications/'
import Alunos from '../pages/students/'
import Cadastrar from '../pages/students_signup'
import Conta from '../pages/account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false,
          tabBarShowLabel:true,
          tabBarLabelStyle:{
            fontFamily: 'Trap-Medium',
            fontSize: 15,
            marginBottom: 10,
            position: 'relative'
          },
          tabBarActiveTintColor:"#720CF7",
          tabBarInactiveTintColor:'#707070',
          tabBarStyle:{
            backgroundColor:"white",
            height: '9vh',
            }
          }}
       >
          <Tab.Screen name = "Home" component={Routes} 
          options = 
          {{tabBarIcon: ({color}) => {
            return <Octicons name="home" size={32} color={color}/>
          }}}/>

          <Tab.Screen name = "Novidades" component={Novidades} options = {{
            tabBarIcon:({color,size}) => {
              return   <MaterialCommunityIcons name="bell-outline" size={32} color={color} />
            }
          }}
          />
          <Tab.Screen name ="Alunos" component ={Cadastrar}
            options = 
            {{tabBarIcon: ({color,size}) => {
              return <MaterialIcons name="person-outline" size={35} color={color} />
            } }}
          />
          <Tab.Screen name ="Conta" component ={Conta}
            options = 
            {{tabBarIcon: ({color,size}) => {
            return <Ionicons name="ios-settings-outline" size={32} color={color} />
            } 
          }}
          />
      </Tab.Navigator>   



   
  );
}


