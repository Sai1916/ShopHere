/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const ItemRight = ({name,price,color}) => {
  return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
  );
};

export default ItemRight;

const styles = StyleSheet.create({
    name:{
        fontSize:18,
        color:'black',
    },
    price:{
        fontSize:20,
    },
});