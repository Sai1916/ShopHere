/* eslint-disable prettier/prettier */
import React from 'react';
import { View,TouchableOpacity,TextInput,Image,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Item from '../components/Item';

const CartScreen = ({navigation}) => {
    // const search = (<EvilIcons name="search" size={24} />);

    const items = [
        {
            name: 'Piraso Analogue Black Dial',
            price: '₹12,000.00',
            color: 'black',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMk-Q5U80GslGiSkZ6uZTird2-znZQSnJzPjJVFGGh-OLihIxif5L9Brbd1k_PURSMVw&usqp=CAU',
        },
        {
            name: 'Men Black Slim Fit Shirt',
            price: '₹999.00',
            color: 'black',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUY0SNyEa3GI0L32Z7rLZSe-eVfNV_9nIRdw&usqp=CAU',
        },
        {
            name: 'Apple MacBook M1 Laptop',
            price: '₹1,40,000.00',
            color: 'gray',
            image: 'https://www.cnet.com/a/img/resize/8ac23b08c4b7cb7645aec9fdcf026af94e6b7159/hub/2015/04/07/b35f1174-696c-4d25-8a4f-fa16a2842338/macbook-air-gold-2015-16.jpg?auto=webp&width=768',
        },
    ];



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="menu" size={24} color="black"/>
                </TouchableOpacity>
                <Image source={require('../assets/logo.webp')} style={styles.logo}/>
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Search" style={styles.textinput} inlineImageLeft='search_icon' />
                <EvilIcons name="camera" size={24}/>
            </View>
            {items.map( (item,index) => (
                <View key={index}>
                    <Item item={item}/>
                </View>
            ))}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        backgroundColor:'white',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
    },
    logo:{
        width:40,
        height: 50,
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
        backgroundColor:'#C4C4C430',
    },
    textInput:{
        borderWidth:1,
        borderColor:'black',
    },
});
