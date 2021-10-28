/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Image, Text, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bgImage.jpg')} resizeMode="cover" style={styles.bg}>
        <View>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo.webp')} style={styles.logo}/>
                <Text style={styles.text}>ShopHere</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <View>
                  <MaterialCommunityIcons name="email" size={24} />
                  <TextInput placeholder="Email" style={styles.input}/>
                </View>
                <TextInput placeholder="password" style={styles.input}/>
              </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('CartScreen')}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signtext}>
                  <Text>Don't have an account? SignUp</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text:{
    color:'white',
    fontSize: 15,
  },
  bg:{
      width:'100%',
      height:'100%',
  },
  logoContainer:{
      width:'100%',
      height:80,
      alignItems:'flex-end',
      justifyContent: 'center',
      marginVertical:10,
      marginLeft:-20,
  },
  logo:{
    height:60,
    width:60,
  },
  form:{
    width: '80%',
    paddingVertical:40,
    marginVertical: 50,
    display: 'flex',
    flexDirection:'column',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignSelf:'center',
    borderRadius: 45,
  },
  input:{
    height:40,
    borderBottomWidth:1,
    borderColor:'black',
    color:'white',
    opacity:1,
    marginHorizontal:40,
    marginVertical:10,
  },
  button:{
      padding: 16,
      width:'70%',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:40,
      marginVertical: 20,
      backgroundColor:'#DB4700',
  },
  btntext:{
    fontSize:22,
    color:'white',
    fontWeight:'bold',
  },
  signtext:{
    alignItems:'center',
  },
});
