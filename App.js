

import React from 'react';
import AppNavigator from './routes/AppNavigator'
import {View} from 'react-native';
import Login from './components/Login'
import AddNewRequest from './components/AddNewRequest';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddNewRequest/>
    </View>
  );

}



export default App;
