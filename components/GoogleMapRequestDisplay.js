//USER SCREEN // WORKING ON THIS ONE RN
import axios from 'axios';
import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
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

class GoogleMapRequestDisplay extends React.Component {
  // contstructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: 31.458145,
  //     long: 74.333131
  //   };

  //   this.locateCurrentPosition = this.locateCurrentPosition.bind(this);
  // }
  state = {
    lat: 31.458145,
    long: 74.333131
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      this.locateCurrentPosition();
    } else {
      const response = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (response === PermissionsAndroid.RESULTS.GRANTED) {
        this.locateCurrentPosition();
      } else {
        setLocationStatus('Permission Denied');
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const currentLongitude =
        JSON.stringify(position.coords.longitude);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });

        const currentLatitude =
        JSON.stringify(position.coords.latitude);
      },
      e => {
        console.log(e);
      },
      {enableHighAccuracy:true,timeout: 20000},
    );
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.mapcontainer}>
          <MapView
            showsUserLocation={true}
            ref={map => (this._map = map)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker  draggable

              coordinate={{latitude: this.state.lat, longitude: this.state.long}}
              onDragEnd={(e) => {
                console.log('dragEnd', e.nativeEvent.coordinate);
                const coords = e.nativeEvent.coordinate;
                this.setState({
                  lat: e.nativeEvent.coordinate.latitude,
                  long: e.nativeEvent.coordinate.longitude
                }, () => {
                  this.props.updateCoords(coords);
                });
              }}
              title={'Home'} >

              </Marker>
          </MapView>
        </View>
      </View>
    );
  }
}

export default GoogleMapRequestDisplay;

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
