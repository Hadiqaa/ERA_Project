import axios from "axios";
import React , {useState} from 'react';
import { RadioButton } from 'react-native-paper';
import {Text,
        ScrollView ,
        View,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";

 const baseUrl = "http://10.0.0.2:1337";

const Register = ({navigation}) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
 const [checked, setChecked] = React.useState('first');
 const [isLoading, setIsLoading] = useState(false);

//  const onChangeNameHandler = (name) => {
//   setName(name);
// };




const onSubmitFormHandler = async (event) => {
  console.log('calling');
 
  setIsLoading(true);
  axios.post(`${baseUrl}/api/users`, {
    name,
    email,
    phone,
    password,
    checked,
  }).then(data => {
    console.log('succeeded');
    setIsLoading(false);
    console.log(data);
  }).catch(e => {
    console.log('failed');
    setIsLoading(false);
    console.log(e);
  });
  // try {
  //   const response = await axios.post(`${baseUrl}/api/users`, {
  //     name,
  //     email,
  //     phone,
  //     password,
  //     checked,
  //   });
  //   if (response.status === 201) {
  //     alert(` You have created: ${JSON.stringify(response.data)}`);
  //     setIsLoading(false);
  //     setFullName('');
  //     setEmail('');
  //   } else {
  //     throw new Error("An error has occurred");
  //   }
  // } catch (error) {
  //   alert("An error has occurred");
  //   setIsLoading(false);
  // } 
}


validator = ( ) => {

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
    } else if (password == ""){
      alert("Please Enter your Password")
      return false;
    } else if (!strongRegex.test(email)){
      alert("Please Enter a valid Email")
      return false;
    } else if (password.length < 8) {
      alert("Password must be 8 digit long")
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



  return (

<View style={styles.container}>

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
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#939393"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>


    <View style={styles.radio}>

       <Text style={styles.radio_txt}>User</Text>
        <RadioButton
          value={checked}
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          
        />


        <Text style={styles.radio_txt}>Volunteer</Text>
        <RadioButton
          value={checked}
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
        />

    </View>

    <View style={styles.radio}>
            <TouchableOpacity
            //  disabled={isLoading}
            activeOpacity={0.5}
            onPress={onSubmitFormHandler}
            style={styles.register_btn}>
             <Text style={styles.buttonText} >Register </Text>
           </TouchableOpacity>



     </View>

     <View>

     <TouchableOpacity
       onPress={() => navigation.navigate('Login')}>
      
      <Text style={styles.login_btn}>Already have an account? Login.</Text>
    </TouchableOpacity>

    </View>


</View>

  );

}

const styles = StyleSheet.create({


  container: {
    height:"100%",
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
     flex:1,
     padding: 10,
   },

  login_btn: {
  marginTop: 20,
  height: 30,
  marginBottom: 20,
  color:"#79ac67",
},



register_btn: {
  backgroundColor: "#0e8c7f",
   width:100,
   margin:10,
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
},

buttonText: {
    color:'#323232',
    fontSize: 18,

},

radio: {

   flexDirection: 'row',
},

radio_txt: {
color:'#939393',
fontSize:20,

}


});

export default Register;
