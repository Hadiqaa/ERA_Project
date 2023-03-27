import React , {useState} from 'react';
import {Text,
        View ,
        StyleSheet,
        Button,
        TouchableOpacity
          } from "react-native";
import MyModal from './MyModal';

const UsingModal = () => {

  return(
<>

<MyModal isVisible={true}>
  <View><TouchableOpacity> HI </TouchableOpacity></View>
 </MyModal>

 </>

  );
}


export default UsingModal;
