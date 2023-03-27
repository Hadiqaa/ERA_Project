import React from 'react';
import {Text,
    View ,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
      } from "react-native";





const UsersList = ({item,deleteUser}) => {


 

       return(
        <View style={styles.container}>



                <View style={styles.userslist} >
                <View style={styles.user}>
                <Text style={styles.user_name} >
                {item.username}
                </Text>

                <Text style={styles.user_status}  >
                    {item.roles}
                </Text>
                </View>

                <View >
                        <TouchableOpacity
                        activeOpacity={0.3}
                        style={styles.bttn}
                        onPress={()=>{deleteUser(item.id)}}>
                        
                        <Text style={styles.buttonText} > Delete</Text>
                        </TouchableOpacity>
                </View>

     </View>




</View>
      
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
      
      userslist:{
        flexDirection:'row',
      
      },
        user:{
      
          margin:5,
          backgroundColor:'#f8f8f8',
          width: 200,
          height: 90,
          borderRadius:8,
      
      
        },
      
      
        user_name:{
          margin:10,
          color: '#414141',
          fontWeight:  "600",
          fontSize:24,
        },
      
        user_status : {
          marginLeft:10,
          marginBottom:10,
          color: '#414141',
          fontWeight:  "300",
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

export default UsersList;