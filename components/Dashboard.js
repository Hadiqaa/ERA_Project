//Volunteer Screen
import React from 'react';
import CurrentRequest from './CurrentRequest';
import {Text,View  } from "react-native";
import GoogleMapVolunteerDashboard from './GoogleMapVolunteerDashboard';


const Dashboard = () => {
  return (
    <View >
      <GoogleMapVolunteerDashboard/>
     
    </View>
  );

}

export default Dashboard;