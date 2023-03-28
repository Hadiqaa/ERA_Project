//USER SCREEN // WORKING ON THIS ONE RN
import React, { useState } from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import ActiveRequestForm from './ActiveRequestForm';
import ActiveRequestMap from './ActiveRequestMap';

const ActiveRequest = () => {


  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <ActiveRequestMap  />
        <ActiveRequestForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ActiveRequest;