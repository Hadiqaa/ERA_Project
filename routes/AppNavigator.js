import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const {Navigator, Screen} = createNativeStackNavigator();

const LogOut = () => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          (async () => {
            try {
              await AsyncStorage.removeItem('user');
              navigation.navigate('WelcomePage');
            } catch (e) {
              console.log(e);
            }
          })();
        }}
        activeOpacity={0.5}
        style={styles.loginbtn}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

const AppNavigator = () => {
  const optionsObject = {
    headerRight: () => {
      return <LogOut />;
    },
    headerBackVisible: false,
    headerBackButtonMenuEnabled: false,
  };

  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="WelcomePage" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Forget" component={Forget} />
        <Screen name="UserDashboard" component={UserDashboard} />
        <Screen name="AddNewRequest" component={AddNewRequest} />
        <Screen name="Dashboard" component={Dashboard} options={optionsObject} />
        <Screen name="RequestsDetail" component={RequestsDetail} />
        <Screen name="AdminDashboard" component={AdminDashboard} />
        <Screen name="AddNewUser" component={AddNewUser} />
        <Screen name="UserslistPage" component={UserslistPage} />
        <Screen name="RequestlistPage" component={RequestlistPage} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(59,59,59,255)',
    alignItems: 'center',
  },

  loginbtn: {
    backgroundColor: '#0e8c7f',
    width: 130,
    marginBottom: 0,
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },

  buttonText: {
    color: '#323232',
    fontSize: 20,
    fontWeight: '500',
  },

  txt_container: {
    marginBottom: 80,
    marginTop: 60,
  },

  txt: {
    color: '#939393',
    fontSize: 50,
    fontWeight: '500',
  },
});

export default AppNavigator;
