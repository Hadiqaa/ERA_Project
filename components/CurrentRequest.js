//Volunteer Screen
import React,  {useState, Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {Text,
        View,
        StyleSheet,
        Alert,
        Platform,
        PermissionsAndroid,
        TouchableOpacity
          } from "react-native";


 export default class CurrentRequest extends Component  {
   contstructor() {
     state();

   }




 componentDidMount(){
   this.requestLocationPermission();
 }





   requestLocationPermission = async () => {
     if (Platform.OS === 'ios')
    {
       this.locateCurrentPosition();
          }  else {

                const response = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

                if (response === PermissionsAndroid.RESULTS.GRANTED)
               {
                this.locateCurrentPosition();
              }  else {
                 setLocationStatus('Permission Denied');
               }
          }
    }

locateCurrentPosition =() => {


  Geolocation.getCurrentPosition(
    (success)=>{console.log(success)}, (e)=>{console.log(e)}, {timeout: 20000}

  )
}




render () {
    return (
        <View style={styles.container}>

                <View style={styles.mapcontainer} >

                 <MapView
                   showsUserLocation	= {true}
                   ref={map => this._map = map}
                   provider={PROVIDER_GOOGLE}
                   style={styles.map}
                   region={{
                    latitude : 31.458145,
                    longitude:74.333131,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                   }}
                 >
                       <Marker

                       coordinate = {{latitude : 31.456283, longitude:74.338255}}

                       title = {'Home'}
                       >

                       </Marker>


                 </MapView>


           </View>



                            <View style={styles.cur_request}>

                                        <View style={styles.sub}>
                                              <Text style={{
                                                  margin:5,
                                                  color: '#414141',
                                                  fontWeight:  "400",
                                                  fontSize:18,
                                                }}
                                              >

                                               CURRENT ACTIVE REQUEST
                                               </Text>
                                        </View>

                                        <View style={styles.sub}>
                                             <View style={styles.time_rating}>
                                              <Text style={{
                                                    color: '#414141',
                                                    fontWeight:  "600",
                                                    fontSize:22,  }}
                                                  >
                                                  Buy Groceries
                                                </Text>
                                                <Text style={{
                                                     margin:8,
                                                      color: '#414141',
                                                      fontSize:16,
                                                        }}>

                                                  7:00 pm
                                                </Text>
                                                </View>

                                            <Text style={styles.status}>
                                             In Progress
                                            </Text>

                                        </View>

                                        <View style={styles.name_user}>

                                        <Text style={{
                                              marginLeft:5,
                                              color: '#414141',
                                              fontSize:16,  }}
                                            >
                                            Requestee :
                                          </Text>
                                        <View style={styles.time_rating}>

                                   <TouchableOpacity >
                                          <Text style={{
                                            color: '#414141',
                                            fontWeight:  "500",
                                            fontSize:22,
                                           }}
                                              >
                                              Muhammad Taha
                                            </Text>
                                    </TouchableOpacity>

                                    <Text style={{
                                      color: '#414141',
                                      fontWeight:  "500",
                                      fontSize:22,
                                       textAlign:'right',

                                         }}
                                        >
                                        4.8

                                      </Text>
                                        </View>
                                        </View>
                            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

container: {
      flex: 1,
     flexDirection:'column',

    },

    cur_request: {
       flex: 1,
     backgroundColor:'white',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,




        },

   mapcontainer:{
     height: 500,
      width: 400,
      justifyContent: 'flex-start',

   },


  map: {
    ...StyleSheet.absoluteFillObject,
  },

  sub: {

  margin:5,
  paddingBottom:10,
  borderBottomColor:'#ebebeb',
  borderBottomWidth:2,

  },

  name_user: {

  margin:5,
  paddingBottom:10,

  },


status : {

  fontSize:23,
  marginBottom:5,
  marginLeft:3,
  padding :8,
  width:150,
  backgroundColor:'#4e4c4c',
  color :'#85b46f',
  borderRadius:10,
},

time_rating:{
  flex:0,
  flexDirection:'row',
  justifyContent:'space-between',
  margin:5,
},



});
