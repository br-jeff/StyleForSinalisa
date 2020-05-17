import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login ({navigation} ) {
    return (
        <View style={styles.container} >
          <Text> Login </Text>
          <Button title= "Login"
           onPress= {() => navigation.navigate('Home') } 
           />
        </View>
      );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
    } ,

})

export default Login;
