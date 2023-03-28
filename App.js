

import React from 'react';
import AppNavigator from './routes/AppNavigator'
import {View} from 'react-native';
import Login from './components/Login'
import AddNewRequest from './components/AddNewRequest';
import AddNewUser from './components/adminscreens/AddNewUser';
import UserslistPage from './components/adminscreens/UserslistPage';
import RequestListPage from './components/adminscreens/RequestListPage';
import UsingModal from './components/UsingModal';
import Dashboard from './components/Dashboard';
import RequestsDetail from './components/RequestsDetail';
import ActiveRequest from './components/ActiveRequest';



const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActiveRequest/>
    </View>
  );

}



export default App;
