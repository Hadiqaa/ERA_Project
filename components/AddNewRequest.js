import React from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import GoogleMapRequestDisplay from './GoogleMapRequestDisplay.js';
import RequestForm from './RequestForm.js';

const AddNewRequest = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <GoogleMapRequestDisplay />
        <RequestForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewRequest;
