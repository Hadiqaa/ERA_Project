//UserScreen
import React, { useState } from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import GoogleMapRequestDisplay from './GoogleMapRequestDisplay.js';
import RequestForm from './RequestForm.js';

const AddNewRequest = () => {
  const [currentLat, setCurrentLat] = useState('');
  const [currentLong, setCurrentLong] =  useState('');

  const updateCoordinates = (coordinates) => {
    console.log('I here poop');
    console.log(coordinates);
    setCurrentLat(coordinates.latitude);
    setCurrentLong(coordinates.longitude);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <GoogleMapRequestDisplay updateCoords={updateCoordinates} />
        <RequestForm lat={currentLat} long={currentLong} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewRequest;
