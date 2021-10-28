/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const CartScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Cart Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;

// const styles = StyleSheet.create({});
