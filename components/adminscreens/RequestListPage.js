// Admin Screen

import axios from 'axios';
import React , {useState,useEffect} from 'react';
import RequestList from './RequestList';
import {Text,
        View ,
        TouchableOpacity,
        StyleSheet,
        ScrollView,
        FlatList,
        Alert
        
          } from "react-native";


          const baseUrl = 'https://era-fyp-23.herokuapp.com';

const RequestListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [request, setRequest] = useState([]);

  useEffect(()=>{
     getRequest()
  },[])

  const deleteOperation = async (id) => {
    console.log(id)
    axios
    .delete(`${baseUrl}/api/requests/${id}`)
    .then( res => {
      getRequest();
      setIsLoading(false);
      Alert.alert('Request Deleted');
    
    })
    .catch(e => {
     Alert.alert('Could not Deleted the Request');
      setIsLoading(false);
      console.log(e);
    });
   }

  
  const getRequest = async event => {
    console.log('calling');
      setIsLoading(true);
      axios
        .get(`${baseUrl}/api/requests?populate=*`)
        .then( async res => {
          setRequest(res.data.data);
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


  return(
   <View style={styles.container} >


        <View style={styles.title}>
            <Text style={styles.titletext}>
             REQUEST LIST
            </Text>
        </View>


      <FlatList data={request}
      keyExtractor={(item,index) => 'key' + index} 
      renderItem={({item})=> {
        return <RequestList deleteRequest={deleteOperation} item={item}/> 
      }}>
    
    </FlatList>


    
   </View>


  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
      backgroundColor: 'rgba(59,59,59,255)',
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
     marginTop:10,
   },

  

});

export default RequestListPage;
