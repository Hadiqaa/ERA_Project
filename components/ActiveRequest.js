//USER SCREEN // WORKING ON THIS ONE RN
import React,  {useState, Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text,
        View,
        StyleSheet,
        Alert,
        Platform,
        PermissionsAndroid,
        TouchableOpacity
          } from "react-native";


 export default class ActiveRequest extends Component  {
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

                                    <View style={styles.req_info} >

                                       <Text style={styles.title_name}>
                                       Get groceries and pharmacy supplies
                                       </Text>
                                       <Text style={styles.time_rating} >
                                       8:00 pm
                                       </Text>
                                    </View>

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



                            <View style={styles.active_req} >
                                   <View style={styles.req_status}  >
                                   <Text style={styles.status} >
                                    IN-PROGRESS
                                   </Text>
                                    </View>

                                        <Text  style={{
                                          marginLeft:10,
                                          fontSize:16,
                                          color:'#414141',
                                        }} >
                                        Volunteer:
                                        </Text>

                                        <View style={styles.volun_name}  >
                                        <Text style={styles.title_name}>
                                         Kamran Sohail
                                        </Text>

                                        <Text  style={styles.time_rating}>
                                          5.0 <IconFontAwesome name= 'star' size={20}  color='grey'/>
                                        </Text>
                                         </View>


                                         <View style={styles._buttons}  >
                                                <TouchableOpacity style={styles.button}>
                                                    <Text style={styles.buttonText}>
                                                     Contact
                                                    </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity style={styles.button}>
                                                    <Text style={styles.buttonText}>
                                                     Cancel
                                                    </Text>
                                                </TouchableOpacity>
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

    active_req: {
       flex: 1,
     backgroundColor:'white',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,



        },

req_info: {
  backgroundColor:'white',
  flexDirection:'row',

  justifyContent:'space-between',

},

   mapcontainer:{
     height: 400,
      width: 400,

   },


  map: {
    ...StyleSheet.absoluteFillObject,
  },

  title_name: {
    width:220,
    margin:10,
    fontSize:22,
    fontWeight:'400',
    color:'#414141',

  },

  time_rating:{
    margin:10,
    fontSize:20,
    color:'#414141',
    marginRight:20,

  },


  status : {

    fontSize:20,
   margin:3,
   padding:8,
    width:150,
    backgroundColor:'#4e4c4c',
    color :'#85b46f',
    borderRadius:10,
  },

req_status:{
  margin:20,
  paddingBottom:20,
  borderBottomColor:'#ebebeb',
  borderBottomWidth:2,
},

volun_name:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',

},

_buttons:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-evenly',
},

button:{
  backgroundColor: "#79ac67",
  width:120,
  alignItems: 'center',
  borderRadius: 10,
  padding: 8,
  height:55,

},

buttonText:{
  color:'#323232',
  fontSize: 24,
  fontWeight: "400",
},


});
