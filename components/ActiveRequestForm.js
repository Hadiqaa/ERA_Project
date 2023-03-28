import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';


const baseUrl = 'https://era-fyp-23.herokuapp.com';

const ActiveRequestForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [requests, setRequests] = useState([]);

    

    useEffect(()=>{
        formData()
     },[])



    const formData = async => {
        console.log('calling');
          setIsLoading(true);
          axios
            .get(`${baseUrl}/api/requests?populate=*`)
            .then( async res => {
            
              setRequests(res.data.data);
              console.log(res.data.data);
              setIsLoading(false);
              console.log('success');
            
            })
            .catch(e => {
              console.log('failed');
              setIsLoading(false);
              console.log(e);
            });
      };
    


  return (

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
           5.0 
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

  );
};


const styles = StyleSheet.create({

    
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


export default ActiveRequestForm;