//USER SCREEN // WORKING ON THIS ONE RN
import React,  {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text,
        View,
        StyleSheet,
        Alert,
        Platform,
        PermissionsAndroid,
        TouchableOpacity,
        TextInput,
        ScrollView
          } from "react-native";


 export default class AddNewRequest extends Component  {
   contstructor() {
    this.state = {
      title: "",
      des:"",
      address:""

      }
      this.state.title={newTitle}
      this.state.title={newDes}
      this.state.title={newAddress}
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


Validator = ()=> {


  if (title== "") {
    alert("Please Enter a Title")
    return false;
  } else if (des == ""){
    alert("Please Enter the  Description")
    return false;
  } else if (address == "") {
    alert("Please Enter an  Address")
    return false;
  }

  return true;

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



                            <ScrollView style={styles.add_req}
                            keyboardDismissMode ='none' >
                                    <Text style={styles.title}> Task Title : </Text>

                               <View style={styles.commonstyle} >
                                <TextInput
                                 style={styles.titleinput}
                                 onChange={()=>this.setState({newTitle})}
                                  />
                                </View>

                                     <Text style={styles.title}> Description : </Text>

                                <View style={styles.commonstyle} >
                                 <TextInput  style={styles.titleinput}
                                             multiline = {true}
                                             numberOfLines = {2}
                                             onChange={()=>this.setState({newDes})}
                                               />
                                 </View>


                                     <Text style={styles.title}> Address: </Text>

                                 <View style={styles.commonstyle} >
                                  <TextInput  style={styles.titleinput}
                                              multiline = {true}
                                              numberOfLines = {2}
                                              onChange={()=>this.setState({newAddress})} />
                                  </View>


                                  <View style={styles.commonstyle} >
                                  <TouchableOpacity style={styles.button}
                                  onPress={this.Validator}
                                  >
                                      <Text style={styles.buttonText}>
                                       Add Request
                                      </Text>
                                  </TouchableOpacity>
                                   </View>







                            </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

container: {
      flex: 1,
     flexDirection:'column',

    },


   mapcontainer:{
     height: 350,
      width: 400,

   },


  map: {
    ...StyleSheet.absoluteFillObject,
  },

add_req:{
  flex:1,
  backgroundColor:'white',

},

titleinput:{
  width:'90%',
  borderWidth:1,
  borderColor:'#4e4c4c',
  borderRadius:10,
  fontSize: 16,
  color:'#4e4c4c',


},


commonstyle:{
  alignItems:'center',
  margin:10,

},

title:{
fontWeight:'500',
color:'#4e4c4c',
fontSize:18,
margin:10,


},

button:{
  margin: 10,
  backgroundColor: "#0e8c7f",
  width:'auto',
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
