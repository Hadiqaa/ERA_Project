import React , {useState} from 'react';
import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";

const Forget = () => {

   const [email, setEmail] = useState('');


   validateEmail = ( ) => {

   const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

   if (email== "") {
     alert("Please Enter Email")
     return false;
   } else if (!strongRegex.test(email)){
     alert("Please Enter a valid Email")
     return false;
   }
     return true;
   }

  return (

<View style={styles.container} >



        <View style={styles.inputView} >
        <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#939393"
              onChangeText={(email) => setEmail(email)}
              />
          </View>


        <View>
                <TouchableOpacity
                activeOpacity={0.5}
                 onPress={()=>{validateEmail();}}
                style={styles.reset_btn}>
                 <Text style={styles.buttonText} >Reset</Text>
               </TouchableOpacity>

         </View>

            




</View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(59,59,59,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
     backgroundColor: "#f7f7f7",
     borderRadius: 15,
     width: "80%",
     height: 60,
     marginBottom: 30,
     alignItems: "center",

   },

   TextInput: {
     height: 50,
     flex: 1,
     padding: 10,
   },

  login_btn: {
  marginTop: 25,
  height: 30,

  color:"#79ac67",
},



reset_btn: {
  backgroundColor: "#0e8c7f",
   width:90,

    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
},

buttonText: {
    color:'#323232',
    fontSize: 18,
    fontWeight: "400",
}


});

export default Forget;
