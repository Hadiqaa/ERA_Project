// Admin Screen

import axios from 'axios';
import React , {useState,useEffect} from 'react';
import UsersList from './UsersList';
import {Text,
        View ,
        TouchableOpacity,
        StyleSheet,
        ScrollView,
        FlatList,
        Alert
        
          } from "react-native";


          const baseUrl = 'https://era-fyp-23.herokuapp.com';

const UserslistPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(()=>{
     getUsers()
  },[])

  const deleteOperation = async (id) => {
    console.log(id)
    axios
    .delete(`${baseUrl}/api/users/${id}`)
    .then( res => {
      getUsers();
      setIsLoading(false);
      Alert.alert('User Deleted');
    
    })
    .catch(e => {
     Alert.alert('Could not Deleted the User');
      setIsLoading(false);
      console.log(e);
    });
   }

  
  const getUsers = async event => {
    console.log('calling');
      setIsLoading(true);
      axios
        .get(`${baseUrl}/api/users`)
        .then( async res => {
          setUsers(res.data);
          console.log(res.data);
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
             USERS LIST
            </Text>
        </View>


      <FlatList data={users}
      keyExtractor={(item,index) => 'key' + index} 
      renderItem={({item})=> {
        return <UsersList deleteUser={deleteOperation} item={item}/> 
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

export default UserslistPage;
