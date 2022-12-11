import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList,Image } from 'react-native';

import FindEventsScreen from './screens/FindEventsScreen';
import FindBirthsScreen from './screens/FindBirthsScreen';
import FindDeathsScreen from './screens/FindDeathsScreen';
import EventsScreen from './screens/EventsScreen';
import BirthsScreen from './screens/BirthsScreen';
import DeathsScreen from './screens/DeathsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './components/constants/styles';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function BulEkranlari(){
  return(
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: GlobalStyles.colors.tabBarBorder,
        tabBarLabelStyle:{
          color: GlobalStyles.colors.tabBarLabel,
          fontSize: 15,
          fontFamily: 'sans-serif-medium',
          fontWeight: 'bold'
        },
        tabBarStyle:{
          height:53
        },
        tabBarActiveBackgroundColor: GlobalStyles.colors.bottomActiveTabBar,
        tabBarIcon: ({focused})=>{
          return(
            <Image 
              style={styles.bottomTabImage}
              source={{
                //uri: 'https://iconarchive.com/download/i31640/sykonist/popular-sites/Wikipedia.ico'
                uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968992.png'
                
              }}
            />
          );
        },
      }}
    >
    <BottomTabs.Screen 
      name="OlaylariGetirEkrani"
      component={FindEventsScreen}
      options={{title: 'Find Events'}}
    />
    <BottomTabs.Screen 
      name="DogumlariGetirEkrani"
      component={FindBirthsScreen}
      options={{title: 'Find Births'}}
    />
    <BottomTabs.Screen 
      name="OlumleriGetirEkrani"
      component={FindDeathsScreen}
      options={{title: 'Find Deaths'}}
    />   
    </BottomTabs.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
     <Stack.Navigator
      screenOptions={{headerShown: false, headerBackVisible:true}}
     >
      <Stack.Screen 
        name="BulEkranlari"
        component={BulEkranlari}
      />
      <Stack.Screen 
        name="OlaylarEkrani"
        component={EventsScreen}
      />
      <Stack.Screen 
        name="DogumlarEkrani"
        component={BirthsScreen}
      />
      <Stack.Screen 
        name="OlumlerEkrani"
        component={DeathsScreen}
      />
     </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
    bottomTabImage:{
        height: 30,
        width: 30
    }
});
