

import React from 'react';
import AppNavigator from './routes/AppNavigator'
import {View} from 'react-native';
import Login from './components/Login'
import AddNewRequest from './components/AddNewRequest';
import ActiveRequest from './components/ActiveRequest';
import CurrentRequest from './components/CurrentRequest';
import Dashboard from './components/GoogleMapVolunteerDashboard';



const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Dashboard/>
    </View>
  );

}



export default App;
