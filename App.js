

import React from 'react';
import AppNavigator from './routes/AppNavigator'
import {View} from 'react-native';
import Register from './components/Register'


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Register/>
    </View>
  );

}



export default App;
