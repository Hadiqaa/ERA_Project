import React , {useState} from 'react';
import {Text,
        View ,
        StyleSheet,
        Button,
        TouchableOpacity
          } from "react-native";
import MyModal from './MyModal';
// <View>
//    <Text>Hi </Text>
// </View>
const UsingModal = () => {



  return(

    <MyModal isVisible={true}>
     <View><Text> HI </Text></View>
</MyModal>



  );
}


export default UsingModal;
