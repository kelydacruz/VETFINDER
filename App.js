import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import Home from './screens/Home';
import Lista from './screens/Lista';
import Mapa from './screens/Mapa';
import Formulario from './screens/Formulario';
import Sobre from './screens/Sobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#00AEEF',              
          tabBarActiveBackgroundColor: '#E6F8FF',      
          tabBarInactiveTintColor: '#9FCBAB',            
          tabBarInactiveBackgroundColor: '#FFFFFF',      
          headerStyle: { backgroundColor: '#3ea4cdff' },   
          headerTintColor: '#FFFFFF',                  
          tabBarStyle: { backgroundColor: '#FFFFFF' }
        }}
      >
        <Tab.Screen
          name='Página Inicial'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name='house'
                size={20}
                iconStyle='solid'
                color={focused ? '#00AEEF' : '#9FCBAB'}
              />
            ),
          }}
        />

        <Tab.Screen
          name='Veterinárias'
          component={Lista}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name='list'
                size={20}
                iconStyle='solid'
                color={focused ? '#00AEEF' : '#9FCBAB'}
              />
            ),
          }}
        />

        <Tab.Screen
          name='Mapa'
          component={Mapa}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name='map-location-dot'
                size={20}
                iconStyle='solid'
                color={focused ? '#00AEEF' : '#9FCBAB'}
              />
            ),
          }}
        />

        <Tab.Screen
          name='Indicação'
          component={Formulario}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name='pen-to-square'
                size={20}
                iconStyle='solid'
                color={focused ? '#00AEEF' : '#9FCBAB'}
              />
            ),
          }}
        />

        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name='circle-info'
                size={20}
                iconStyle='solid'
                color={focused ? '#00AEEF' : '#9FCBAB'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
