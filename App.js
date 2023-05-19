import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';

import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const App = () => {
  const [user, setUser] = useState('');

  useEffect(()=> {
    const userCheck = auth().onAuthStateChanged(userExist=>{
      if(userExist)
        setUser(userExist)
      else setUser("")
    })
    return () => {
      userCheck()
      console.log(user);
    }
  },[])

 return(
 
 <NavigationContainer >
       <Stack.Navigator screenOptions = {{ 
         headerStyle: {
           backgroundColor: '#3C486B',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       }}>
       
        <Stack.Screen name="Signin" component={SigninScreen} options={() => ({
         headerBackVisible: false,
         headerShown: false,
       })}/>
       
       <Stack.Screen name="Signup" component={SignupScreen} options={() => ({
         headerBackVisible: false,
         headerShown: false,
       })}/>
       
       
       
     </Stack.Navigator>
</NavigationContainer>
)};




export default App;

const styles = StyleSheet.create({
  image: {
   flex: 1,
   width: 30,
   height: 30,
   resizeMode: 'contain',
 },
 iconColor: {
   color: '009387',
 }
});


