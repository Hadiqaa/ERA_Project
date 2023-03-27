import React from 'react';
import {Text,
    View ,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
      } from "react-native";





const RequestList = ({item,deleteRequest}) => {


 

       return(
        <View style={styles.container}>



                <View style={styles.requestlist} >
                <View style={styles.requestcontainer}>

                <Text style={styles.requesttitle} >
                {item.attributes.title}
                </Text>

                <Text style={styles.user} >
                {item.attributes.user.data.attributes.username}
                </Text>

               
                </View>

                <View >
                        <TouchableOpacity
                        activeOpacity={0.3}
                        style={styles.bttn}
                        onPress={()=>{deleteRequest(item.id)}}>
                        
                        <Text style={styles.buttonText} > Delete</Text>
                        </TouchableOpacity>
                </View>

     </View>




</View>
      
        );
      }




      const styles = StyleSheet.create({
      
        container: {
          justifyContent:'flex-start',
          alignItems: 'center',
        },
      

      
      requestlist:{
        flexDirection:'row',
      
      },
        requestcontainer:{
      
          margin:5,
          backgroundColor:'#f8f8f8',
          width: 200,
          height: 90,
          borderRadius:8,
      
      
        },
      
      
        requesttitle:{
          margin:10,
          color: '#414141',
          fontWeight:  "600",
          fontSize:24,
        },
      
        user : {
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

export default RequestList;