/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';

const ItemRight = ({name,price,color}) => {
  return (
      <View style={styles.container}>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.color}>
                <Text style={styles.colorTitle}>Color:</Text>
                <Text style={styles.colorVal}>{color}</Text>
            </View>
            <Text style={styles.stock}>In Stock</Text>
          </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn,styles.delbtn]}>
                <Text style={styles.delText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,styles.smbtn]}>
                <Text style={styles.Text}>See more like this</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

export default ItemRight;

const styles = StyleSheet.create({
    container:{
        alignItems:'flex-start',
    },
    details:{
        marginHorizontal:10,
        marginVertical:5,
    },
    name:{
        fontSize:18,
        color:'black',
    },
    price:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
    },
    color:{
        flexDirection:'row',
        alignItems:'center',
    },
    colorTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
    },
    colorVal:{
        fontSize:16,
    },
    stock:{
        color:'green',
    },
    btnContainer:{
        flexDirection:'row',

    },
    btn:{
        paddingHorizontal:10,
        paddingVertical:5,
        marginHorizontal:6,
        borderRadius:20,
    },
    delbtn:{
        borderWidth:2,
        borderColor:'orange',
    },
    smbtn:{
        backgroundColor:'orange',
    },
    delText:{
        color:'black',
    },
    Text:{
        color:'white',
    },
});
