import React , {useState} from 'react';

import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";



const PasswordReset = () => {

  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');


passwordValidator = ()=> {


  if (password== "") {
    alert("Please Enter old Password")
    return false;
  } else if (newpassword == ""){
    alert("Please Enter your new Password")
    return false;
  } else if (confirmpassword == ""){
    alert("Please Enter confirm Password")
    return false;
  } else if (password.length < 8) {
    alert("Please enter a valid password")
    return false;
  } else if (newpassword.length < 8) {
    alert("Please enter a valid new password")
    return false;
  } else if (confirmpassword.length < 8) {
    alert("Please enter a valid  confirm password")
    return false;
  } else if (newpassword !== confirmpassword) {
    alert("New Password and Confirm password do not match !")
    return false;
  }

  return true;

}






    return(

      <View style={styles.container} >


            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Old Password"
              placeholderTextColor="#939393"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />

          </View>

          <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Password"
            placeholderTextColor="#939393"
            secureTextEntry={true}
            onChangeText={(newpassword) => setNewpassword(newpassword)}
          />

        </View>


        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#939393"
          secureTextEntry={true}
          onChangeText={(confirmpassword) => setConfirmpassword(confirmpassword)}
        />

      </View>

          <View>

                <TouchableOpacity
                activeOpacity={0.5}
                 onPress={()=>{passwordValidator();}}
                style={styles.Reset_btn}>
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
     alignItems: 'center',
     fontSize: 16,
     height: 50,
     flex: 1,
     padding: 10,


   },


Reset_btn: {
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

export default PasswordReset;
