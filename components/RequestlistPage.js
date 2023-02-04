// Admin Screen

import React , {useState} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text,
        View ,
        TouchableOpacity,
        StyleSheet,
        ScrollView,
          } from "react-native";

const RequestsDetail = () => {



  return(
   <ScrollView style={styles.bigcontainer} persistentScrollbar={true}>
    <View style={styles.container}>


              <View style={styles.title}>
                  <Text style={styles.titletext}>
                   REQUESTS LIST
                  </Text>
              </View>



        <View style={styles.requestlist} >
                <View style={styles.request}>
                <Text style={styles.req_name} >
                Buy Groceries
                </Text>

                <Text style={styles.user_name}  >
                    Kamran Sohail
                </Text>
                </View>

                <View >
                        <TouchableOpacity
                        activeOpacity={0.3}
                        style={styles.bttn}>
                         <Text style={styles.buttonText} > Delete</Text>
                       </TouchableOpacity>
                </View>

           </View>




   </View>
   </ScrollView>


  );
}

const styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
      backgroundColor: 'rgba(59,59,59,255)',
  },

  container: {
    justifyContent:'flex-start',
    alignItems: 'center',
  },


 title:{
   margin:10,
 },


  titletext: {
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:25,
  },

requestlist:{
  flexDirection:'row',

},

request:{

    margin:5,
    backgroundColor:'#f8f8f8',
    width: 200,
    height: 90,
    borderRadius:8,



  },


req_name:{
    margin:10,
    color: '#414141',
    fontWeight:  "600",
    fontSize:24,
  },

  user_name : {
    marginLeft:10,
    marginBottom:10,
    color: '#414141',
    fontWeight:  "400",
    fontSize:20,
  },


  bttn: {
    margin:15,
    backgroundColor: "#79ac67",
     width:100,
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
  },

  buttonText: {
      color:'#323232',
      fontSize: 18,
      fontWeight: "400",
  },



});

export default RequestsDetail;
