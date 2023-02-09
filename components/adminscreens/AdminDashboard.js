//Admin
import React , {useState} from 'react';

import {Text,
        View ,
        StyleSheet,
        TouchableOpacity,
          } from "react-native";

const AdminDashboard = ({navigation}) => {



  return(
   <View style={styles.container}>

       <View style={styles.btn_container}>

             <TouchableOpacity
             activeOpacity={0.3}
             style={styles.bttn}
             onPress={()=>{navigation.navigate('AddNewUser')}}>
              <Text style={styles.buttonText} >Add New User</Text>
            </TouchableOpacity>

        </View>


        <View style={styles.btn_container}>

              <TouchableOpacity
              activeOpacity={0.3}
              style={styles.bttn}
              onPress={()=>{navigation.navigate('UserslistPage')}}>
               <Text style={styles.buttonText} >Users List Page</Text>
             </TouchableOpacity>

         </View>


         <View style={styles.btn_container}>

               <TouchableOpacity
               activeOpacity={0.3}
               style={styles.bttn}
               onPress={()=>{navigation.navigate('RequestlistPage')}}>
                <Text style={styles.buttonText} >Request List Page</Text>
              </TouchableOpacity>

          </View>


   </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'rgba(59,59,59,255)',
    alignItems: 'center',
  },
  bttn: {
    margin:15,
    backgroundColor: "#79ac67",
     width:250,
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
  },

  buttonText: {
      color:'#323232',
      fontSize: 24,
      fontWeight: "400",
  },


});

export default AdminDashboard;
