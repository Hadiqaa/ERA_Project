//Volunteer Screen
import React,  {useState, Component} from 'react';

import {Text,
        View,
        StyleSheet,
        Alert,
        Platform,
        PermissionsAndroid,
        TouchableOpacity
          } from "react-native";


  const baseUrl = "https://era-fyp-23.herokuapp.com";

  const onSubmitFormHandler = async (event) => {
            console.log('success');
            setIsLoading(true);
            axios.get(`${baseUrl}/api/requests`, {
          
          
              
            }).then(res => {
              console.log('succeeded');
              setIsLoading(false);
              console.log(res);
            }).catch(e => {
              console.log('failed');
              setIsLoading(false);
              console.log(e);
            });
            
           
          }
          

const CurrentRequest = () =>{
  const [isLoading, setIsLoading] = useState(false);


return(
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
                          fontSize:17,
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


);
}



const styles = StyleSheet.create({

container: {
      height :20,
     flexDirection:'row',
     justifyContent:'flex-end',
    },

cur_request: {
  flex:1,
  height :'60%',
  backgroundColor:'white',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  justifyContent:'flex-end',

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

export default CurrentRequest;
