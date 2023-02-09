import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const baseUrl = 'https://era-fyp-23.herokuapp.com';

const RequestForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnFormSubmit = () => {
    console.log('save button clicked');
    setIsLoading(true);
    if (validateRequestFields()) {
      axios
        .post(`${baseUrl}/api/requests`, {
          data: {
            title,
            description,
            task_location_lat: props.lat,
            task_location_lng: props.long
          },
        })
        .then(data => {
          console.log('succeeded');
          setIsLoading(false);
          console.log(data);
        })
        .catch(e => {
          console.log('failed');
          setIsLoading(false);
          console.log(e);
        });
    } else {
      setIsLoading(false);
    }
  };

  const validateRequestFields = () => {
    if (title == '') {
      alert('Please Enter a Title');
      return false;
    }
    if (description == '') {
      alert('Please Enter the Description');
      return false;
    }
    // if (address == '') {
    //   alert('Please Enter an Address');
    //   return false;
    // }

    return true;
  };

  return (
    <>
      <Text style={styles.title}> Task Title : </Text>
      <View style={styles.commonstyle}>
        <TextInput
          style={styles.titleinput}
          onChangeText={newTitle => {
            setTitle(newTitle);
          }}
          value={title}
        />
      </View>
      <Text style={styles.title}> Description : </Text>
      <View style={styles.commonstyle}>
        <TextInput
          style={styles.titleinput}
          multiline={true}
          numberOfLines={2}
          onChangeText={newDescription => {
            setDescription(newDescription);
          }}
          value={description}
        />
      </View>
      <Text style={styles.title}> Address: </Text>
      <View style={styles.commonstyle}>
        <TextInput
          style={styles.titleinput}
          multiline={true}
          numberOfLines={2}
          onChangeText={newAddress => {
            setAddress(newAddress);
          }}
          value={address}
        />
      </View>
      <View style={styles.commonstyle}>
        <TouchableOpacity style={styles.button} onPress={handleOnFormSubmit}>
          <Text style={styles.buttonText}>Add Request</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  mapcontainer: {
    height: 350,
    width: 400,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  add_req: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleinput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#4e4c4c',
    borderRadius: 10,
    fontSize: 16,
    color: '#4e4c4c',
  },

  commonstyle: {
    alignItems: 'center',
    margin: 10,
  },

  title: {
    fontWeight: '500',
    color: '#4e4c4c',
    fontSize: 18,
    margin: 10,
  },

  button: {
    margin: 10,
    backgroundColor: '#0e8c7f',
    width: 'auto',
    alignItems: 'center',
    borderRadius: 10,
    padding: 8,
    height: 55,
  },

  buttonText: {
    color: '#323232',
    fontSize: 24,
    fontWeight: '400',
  },
});

export default RequestForm;
