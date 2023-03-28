//Volunteer Screen
import React, { useState, useEffect } from 'react';
import CurrentRequest from './CurrentRequest';
import {Text,View,Alert  } from "react-native";
import GoogleMapVolunteerDashboard from './GoogleMapVolunteerDashboard';
import axios from 'axios';


const baseUrl = 'https://era-fyp-23.herokuapp.com';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState([]);
  const [ coords, setCoords ] = useState(null);

  useEffect(() => {
    (async() => {
      await Request();
    })();
  }, []);
  
  const Request = async event => {
    console.log('calling');
      setIsLoading(true);
      axios
        .get(`${baseUrl}/api/requests?populate=*`)
        .then( async res => {
          setRequest(res.data.data);
          console.log(res.data.data);
          setCoords(res.data.data);
          setIsLoading(false);
          console.log('success');
        
        })
        .catch(e => {
          console.log('failed');
          setIsLoading(false);
          console.log(e);
        });
  };

  const updateStatus = async (item) => {
    const data = {...item, attributes: { ...item.attributes, task_status: "STARTED" }};
    // data.attributes.task_status = "started";
    console.log('sending it away, ', data);
    axios
    .put(`${baseUrl}/api/requests/${item.id}`, { data: data })
    .then( res => {
      // this.setState({task_status : "started"})
      Request();
      setIsLoading(false);
      console.log('Task Started');
      console.log(res);
    
    })
    .catch(e => {
     Alert.alert('Ooops! Could not start the task');
      setIsLoading(false);
      console.log(e);
    });
   }

  return (
    <View style={{flex: 1}}>
      <GoogleMapVolunteerDashboard coords={coords} updateStatus={updateStatus}/>
      <CurrentRequest />
    </View>
  );
};

export default Dashboard;
