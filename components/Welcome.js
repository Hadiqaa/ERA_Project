import React , {useState} from 'react';
import Login from './Login';

import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";



const Welcome = ({navigation}) => {


  return (

  <View   style={styles.container}>

           <View style={styles.txt_container}>
                <Text style={styles.txt}>
                  Errand{'\n'}Running{'\n'}App
                </Text>
           </View>


            <View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  activeOpacity={0.5}
                  style={styles.loginbtn}>
                   <Text style={styles.buttonText} > Login </Text>
                 </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                  activeOpacity={0.5}
                  style={styles.loginbtn}>
                   <Text style={styles.buttonText} >Sign Up</Text>
                 </TouchableOpacity>

             </View>





      </View>

    );
  }




const styles = StyleSheet.create({
  container: {

    height: '100%',
    backgroundColor: 'rgba(59,59,59,255)',
    alignItems:'center',
  },


loginbtn: {
  backgroundColor: "#0e8c7f",
   width:130,
   marginBottom: 20,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
},

buttonText: {
    color:'#323232',
    fontSize: 20,
    fontWeight: "500",
},

txt_container: {
marginBottom :80,
marginTop:60,
},

txt : {
  color:'#939393',
  fontSize:50,
  fontWeight:"500"
},

});

export default Welcome;
