import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import UserDashboard from '../components/UserDashboard';
import AddNewRequest from '../components/AddNewRequest';
import Dashboard from '../components/Dashboard';
import RequestsDetail from '../components/RequestsDetail';
import AdminDashboard from '../components/adminscreens/AdminDashboard';
import AddNewUser from '../components/adminscreens/AddNewUser';
import UserslistPage from '../components/adminscreens/UserslistPage';
import RequestlistPage from '../components/adminscreens/RequestlistPage';



const {Navigator , Screen} = createNativeStackNavigator();

const AppNavigator =() => (

    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="WelcomePage" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Forget" component={Forget} />
        <Screen name="UserDashboard" component={UserDashboard} />
        <Screen name="AddNewRequest" component={AddNewRequest} />
        <Screen name="Dashboard" component={Dashboard} />
        <Screen name="RequestsDetail" component={RequestsDetail} />
        <Screen name="AdminDashboard" component={AdminDashboard} />
        <Screen name="AddNewUser" component={AddNewUser} />
        <Screen name="UserslistPage" component={UserslistPage} />
        <Screen name="RequestlistPage" component={RequestlistPage} />
        
      </Navigator>
    </NavigationContainer>
  )


export default AppNavigator;
