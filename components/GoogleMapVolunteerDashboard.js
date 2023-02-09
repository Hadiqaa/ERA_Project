import React, {useState, useEffect, Component} from 'react';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Callout,
  MarkerAnimated,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {
  Text,
  View,
  StyleSheet,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

export default class GoogleMapRequestDisplay extends Component {
  state = {
    lat: 31.458145,
    long: 74.333131,
  };

  componentDidMount() {
    this.requestLocationPermission();
  }

  request = () => {
    Alert.alert(
      'Alert Title',
      'Request Here', // Request title  here
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Accept', // go to current request
        },
      ],
    );
  };

  //    useEffect() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'ios') {
  //         this.locateCurrentPosition();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Access Required',
  //             message: 'This App needs to Access your location',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //            this.locateCurrentPosition();
  //         } else {
  //           setLocationStatus('Permission Denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  //
  //   return () => {
  //     Geolocation.clearWatch(watchID);
  //   };
  // }, []);

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
    // Geolocation.getCurrentPosition(
    //   position => {
    //     console.log(position);
    //     const currentLongitude = JSON.stringify(position.coords.longitude);
    //     this.setState({
    //       lat: position.coords.latitude,
    //       long: position.coords.longitude,
    //     });

    //     const currentLatitude = JSON.stringify(position.coords.latitude);
    //   },
    //   e => {
    //     console.log(e);
    //   },
    //   {enableHighAccuracy: true, timeout: 20000},
    // );
    Geolocation.watchPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      error => {
        console.log(error);
      },
      {
        interval: 0.3,
        fastestInterval: 1,
        timeout: 300,
        maximumAge: 3000,
        enableHighAccuracy: true,
        // distanceFilter: number,
        // useSignificantChanges: boolean,
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapcontainer}>
          <MapView
            showsUserLocation={false}
            ref={map => (this._map = map)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            zoomControlEnabled={true}>
            <MarkerAnimated
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }}
              onPress={this.request}
              title={'Home'}
              image={{uri: 'car_pin'}}
            />
            <MapViewDirections
              origin={{latitude: this.state.lat, longitude: this.state.long}}
              destination={{
                latitude: 31.4434,
                longitude: 74.2598,
              }}
              apikey={'AIzaSyApVUiwtxnnGg5C-Jqc3enfAzTcdNFmgH4'}
              strokeWidth={8}
              strokeColor="#2596be"
            />
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(59,59,59,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapcontainer: {
    height: '100%',
    width: '100%',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
