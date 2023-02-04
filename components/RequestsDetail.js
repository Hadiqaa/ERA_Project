//USER SCREEN

import React , {useState} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text,
        View ,
        TouchableOpacity,
        StyleSheet,
          } from "react-native";

const RequestsDetail = () => {



  return(
   <View style={styles.container}>

      <View style={styles.title}>
          <Text style={styles.titletext}>
          ACTIVE REQUEST
          </Text>
      </View>

        <View style={styles.active_req}>

            <View style={styles.req_title}>
                <Text style={styles.title_name} >
                Buy Groceries
                </Text>

                <Text style={{
                margin:12,
                color: '#414141',
                fontSize:16 }}  >

                8:00 pm
                </Text>
              </View>

              <View style={styles.req_title_name}>
                  <Text style={styles.name} >
                  Muhammad Taha
                  </Text>

                  <Text  style={{
                  margin:10,
                  color: '#414141',
                  fontSize:18 }}  >

                  4.3   <IconFontAwesome name= 'star' size={20}  color='grey'/>
                  </Text>
                </View>

             </View>

         <View style={styles.title}>
             <Text style={styles.titletext}>
             PAST REQUESTS
             </Text>
         </View>



         <View style={styles.past_req}>

             <View style={styles.req_title}>
                 <Text style={styles.title_name} >
                 Buy Water
                 </Text>

                 <Text style={{
                 margin:12,
                 color: '#414141',
                 fontSize:16 }}  >

                 12:00 pm
                 </Text>
               </View>

               <View style={styles.req_title_name}>
                   <Text style={styles.name} >
                   Muhammad Arslan
                   </Text>

                   <Text  style={{
                   margin:10,
                   color: '#414141',
                   fontSize:18 }}  >

                   4.8   <IconFontAwesome name= 'star' size={20}  color='grey'/>
                   </Text>
                 </View>

              </View>

   </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:'auto',
    width:'auto',
    justifyContent:'flex-start',
    backgroundColor: 'rgba(59,59,59,255)',
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

  active_req:{
    margin:10,
    backgroundColor:'#f8f8f8',
    width: 350,
    height: 120,
    borderRadius:8,
    borderColor:'#b8860b',
    borderWidth:2,

  },

  past_req:{
    margin:10,
    backgroundColor:'#f8f8f8',
    width: 350,
    height: 120,
    borderRadius:8,

  },

  req_title:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between',
   paddingBottom:14,
   borderBottomColor:'#ebebeb',
   borderBottomWidth:2,

  },

  title_name:{
    margin:10,
    color: '#414141',
    fontWeight:  "600",
    fontSize:24,
  },

  name : {
    margin:10,
    color: '#414141',
    fontWeight:  "300",
    fontSize:20,
  },
  req_title_name:{
   flex:1,
   flexDirection:'row',
   justifyContent:'space-between',


  },


});

export default RequestsDetail;
