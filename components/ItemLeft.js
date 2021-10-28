/* eslint-disable prettier/prettier */
import React from 'react';
import {Image,Text,View,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ItemLeft = ({image}) => {
  return (
      <View style={styles.container}>
          <Image source={{uri: image}} style={styles.image}/>
          <View style={styles.quantity}>
              <AntDesign name="minuscircleo" size={20}/>
              <Text>1</Text>
              <AntDesign name="pluscircleo" size={20}/>
          </View>
      </View>
  );
};

export default ItemLeft;

const styles = StyleSheet.create({
    container:{
        height:160,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        marginVertical:5,
    },
    image:{
        height:130,
        width:100,
        borderRadius:10,
        resizeMode:'contain',
    },
    quantity:{
        flexDirection:'row',
        width:100,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-evenly',
        backgroundColor: '#C4C4C430',
        borderRadius:20,
        paddingVertical:4,
    },
});
