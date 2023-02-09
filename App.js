

import React from 'react';
import AppNavigator from './routes/AppNavigator'
import {View} from 'react-native';
import Login from './components/Login'
import AddNewRequest from './components/AddNewRequest';
import AddNewUser from './components/adminscreens/AddNewUser';
import UserslistPage from './components/adminscreens/UserslistPage';



const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator/>
    </View>
  );

}



export default App;
