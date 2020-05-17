import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

function Login ({navigation} ) {
    return (
        <View style={styles.container} >
            <View style={styles.moldura} >

    
                <TextInput style={styles.input}  placeholder=" Digite Seu usuario" />
               
            
                <TextInput style={styles.input}  placeholder=" Digite Seu usuario" />
                
                <Button style={styles.login} title= "Login"
                onPress= {() => navigation.navigate('Home') } 
                />

            </View>
        </View>
      );
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fafafa',
    } ,
    moldura: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    } ,
    input:{
        borderWidth: 0.3,
        borderRadius: 4,
        width: '90%',
        margin: 9,

    },  
    login: {
        margin: 30,
        width:'90%',
    }
 

})

export default Login;
