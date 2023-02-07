import React , {useState} from 'react';
import axios from "axios";

import {Text,
        View ,
        SafeAreaView,
        StyleSheet,
        TextInput,
        Button,
        TouchableOpacity
          } from "react-native";


   const baseUrl = "http://192.168.18.5:1337";

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


loginValidator = ()=> {
const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

  if (email== "") {
    alert("Please Enter Email")
    return false;
  } else if (password == ""){
    alert("Please Enter Password")
    return false;
  } else if (!strongRegex.test(email)){
    alert("Please Enter a valid Email")
    return false;
  } else if (password.length < 6) {
    alert("Please Enter a Valid password")
    return false;
  }

  return true;

}


const onSubmitFormHandler = async (event) => {
  console.log('Logged in');
 if(loginValidator()) {

  setIsLoading(true);
  axios.post(`${baseUrl}/api/auth/local`, {

    email,
    password,
    
  }).then(data => {
    console.log('succeeded');
    setIsLoading(false);
    console.log(data);
  }).catch(e => {
    console.log('failed');
    setIsLoading(false);
    console.log(e);
  });
  
 }
}






    return(

      <View style={styles.container} >



          <View  style={styles.inputView} >
          <TextInput

                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#939393"
                onChangeText={(email) => setEmail(email)}
                value={email}
                  />
            </View>

            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#939393"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />

          </View>

          <View   style={styles.button_container}>

                <TouchableOpacity
                activeOpacity={0.5}
                 onPress={()=>{onSubmitFormHandler();}}
                style={styles.loginbtn}>
                 <Text style={styles.buttonText} >Login </Text>
               </TouchableOpacity>


           </View>


              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>

               <Text style={styles.register_btn}>Don't have an account? Register.</Text>
             </TouchableOpacity>

             <TouchableOpacity
               onPress={() => navigation.navigate('Forget')}>
              <Text style={styles.forget_btn}>Forgot Password ?</Text>
            </TouchableOpacity>


      </View>

    );
  }




const styles = StyleSheet.create({
  container: {
    height: '100%',
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

  register_btn: {
  marginTop: 20,
  height: 30,
  marginBottom: 20,
  color:"#79ac67",
},

forget_btn: {
height: 30,
marginBottom: 30,
color:"#b5af90",
},

loginbtn: {
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
    fontWeight: "400",
},

button_container: {
flexDirection: 'row',
}

});

export default Login;
