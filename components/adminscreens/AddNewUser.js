import React , {useState} from 'react';

import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        Alert,
        TouchableOpacity
          } from "react-native";



const AddNewUser = () => {
  const [name, setNmail] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');



  newUserValidator = () => {

    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
     const pattern = new RegExp(/^[0-9\b]+$/);


      if (name== "") {
        alert("Please Enter your Name")
        return false;
      } else if (email == ""){
        alert("Please Enter your Email")
        return false;
      } else if (phone == ""){
        alert("Please Enter your Phone No")
        return false;
      } else if (!strongRegex.test(email)){
        alert("Please Enter a valid Email")
        return false;
      } else if (!pattern.test(phone)) {
        alert("Please Enter a valid  Phone No")
        return false;
      } else if (phone.length < 11 || phone.length > 11) {
        alert("Please Enter a valid  Phone No")
        return false;
      }


      return true;
  }





    return(

      <View style={styles.container} >
          <View  style={styles.inputView} >
          <TextInput

                style={styles.TextInput}
                placeholder="Name"
                placeholderTextColor="#939393"
                onChangeText={(name) => setName(name)}

                  />
            </View>

          <View  style={styles.inputView} >
          <TextInput

                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#939393"
                onChangeText={(email) => setEmail(email)}

                  />
            </View>

            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              keyboardType="numeric"
              placeholder="Phone Number"
              placeholderTextColor="#939393"
              onChangeText={(phone) => setPhone(phone)}
            />

          </View>

            <View>
                <TouchableOpacity
                onPress={() => {newUserValidator();}}
                activeOpacity={0.3}
                style={styles.bttn}>
                 <Text style={styles.buttonText} > Add New User</Text>
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



bttn: {
  margin:15,
  backgroundColor: "#79ac67",
   width:200,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
},

buttonText: {
    color:'#323232',
    fontSize: 20,
    fontWeight: "400",
}

});

export default AddNewUser;
