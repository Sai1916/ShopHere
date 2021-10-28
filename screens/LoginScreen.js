/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Image, Text, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';

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
                <View style={styles.icon}>
                  <Icon name="email" size={24} color="black"/>
                  <TextInput placeholder="Email" style={styles.input}/>
                </View>
                <View style={styles.icon}>
                  <FIcon name="lock" size={24} color="black"/>
                  <TextInput placeholder="Password" style={styles.input}/>
                </View>
              </View>
              <View style={styles.rp}>
                <View style={styles.rem}>
                  <AntDesign name="checkcircle" size={14}/>
                  <Text>Remember me</Text>
                </View>
                <Text>Forgot Password?</Text>
              </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('CartScreen')}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signtext}>
                  <Text>Don't have an account?</Text>
                  <Text style={styles.signup}> SignUp</Text>
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
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text:{
    color:'white',
    fontSize: 15,
    fontWeight:'bold',
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
    color:'white',
    opacity:1,
  },
  icon:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'black',
    marginVertical:10,
  },
  inputContainer:{
    marginHorizontal:30,
  },
  button:{
      padding: 8,
      width:'70%',
      alignSelf:'center',
      alignItems:'center',
      borderRadius:40,
      marginVertical: 20,
      backgroundColor:'#DB4700',
  },
  rp:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:30,
  },
  rem:{
    flexDirection:'row',
    alignItems:'center',
  },
  btntext:{
    fontSize:22,
    color:'white',
    fontWeight:'bold',
  },
  signtext:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  signup:{
    borderBottomWidth:1,
  },
});
