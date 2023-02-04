import React , {useState} from 'react';
import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";

const UpdateProfile = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

updateValid = ()=> {


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
        } else if (address == ""){
          alert("Please Enter your Address")
          return false;
        } else if (!strongRegex.test(email)){
          alert("Please Enter a valid  Email")
          return false;
        }  else if (!pattern.test(phone)) {
          alert("Please Enter a valid  Phone No")
          return false;
        } else if (phone.length < 11 || phone.length > 11) {
          alert("Please Enter a valid  Phone No")
          return false;
        }


        return true;
    }



return (

<View style={styles.container} >
    <View style={styles.inputView} >
    <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#939393"
          onChangeText={(name) => setName(name)}
          />
      </View>



  <View style={styles.inputView} >
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
      placeholder="Phone No."
      placeholderTextColor="#939393"
      onChangeText={(phone) => setPhone(phone)}
    />
  </View>


    <View style={styles.inputView}>
    <TextInput
      style={styles.addressinput}
      multiline = {true}
      numberOfLines = {4}
      placeholder="Enter Your Address."
      placeholderTextColor="#939393"
      onChangeText={(address) => setAddress(address)}
    />
  </View>

  <View>
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>{updateValid();}}
          style={styles.update_btn}>
           <Text style={styles.buttonText} >Update Profile</Text>
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
     marginBottom: 20,
     alignItems: "center",

   },

   TextInput: {
     height: 50,
     flex: 1,
     padding: 10,
   },

   addressinput: {
     height:200,
     textAlignVertical: 'top' ,
     height: 60,
     padding: 10,
   },





update_btn: {
  backgroundColor: "#0e8c7f",
   width:150,

    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
},

buttonText: {
    color:'#323232',
    fontSize: 16,
    fontWeight: "400",
}


});


export default UpdateProfile;
