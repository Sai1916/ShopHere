/* eslint-disable prettier/prettier */
import React from 'react';
import { View,StyleSheet} from 'react-native';
import ItemLeft from './ItemLeft';
import ItemRight from './ItemRight';

const Item = ({item}) => {
  return (
      <View style={styles.container}>
          <ItemLeft image={item.image}/>
          <ItemRight name={item.name} price={item.price} color={item.color}/>
      </View>
  );
};

export default Item;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
    },
});
