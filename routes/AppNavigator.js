import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';


const {Navigator , Screen} = createNativeStackNavigator();

const AppNavigator =() => (

    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="WelcomePage" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Forget" component={Forget} />
      </Navigator>
    </NavigationContainer>
  )


export default AppNavigator;
