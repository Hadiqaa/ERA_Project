import React, {Component} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import {Text,
        View,
        StyleSheet,
        Alert
          } from "react-native";


 export default class VolunteerDashboard extends Component  {
   contstructor(props) {

   }

   request =()=>{
     Alert.alert(
      "Alert Title",
      "Request Here",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Accept"
       }
      ]
    );
   }


render () {
    return (
        <View style={styles.container}>
              <View style={styles.mapcontainer} >
             <MapView
               provider={PROVIDER_GOOGLE}
               style={styles.map}
               region={{
                latitude : 31.531222,
                longitude:74.321695,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
               }}
             >
                 <Marker
                 coordinate = {{latitude : 31.531222, longitude:74.321695}}
                 onPress ={this.request}
                 title = {'Home'}
                 >



                 </Marker>

                 <Marker
                 coordinate = {{latitude : 31.535222, longitude:74.321595}}
                 onPress ={this.request}
                 title = {'Home 1'}
                 >



                 </Marker>


                 </Marker>

                 <Marker
                 coordinate = {{latitude : 31.535282, longitude:74.321195}}
                 onPress ={this.request}
                 title = {'Home 2'}
                 >



                 </Marker>



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

 mapcontainer:{
   height: '100%',
   width : '100%',

      justifyContent: 'flex-end',

 },


map: {
  ...StyleSheet.absoluteFillObject,
},


});
