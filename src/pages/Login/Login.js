import React from 'react';
import { View,Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

function Login ({navigation} ) {
    return (
     <View style={styles.container} >
         <View style={styles.moldura} >
                <TextInput style={styles.input}  placeholder=" Digite Seu usuario" />
                <TextInput style={styles.input}  placeholder=" Digite Sua Senha" />
           
                <TouchableOpacity  style={ styles.loginButton}   
                    onPress= {() => navigation.navigate('Home')}  >
                        <View style={styles.loginView} >
                            <Text style={styles.loginText}> Entrar </Text>
                        </View>
                </TouchableOpacity >

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
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    } ,
    input:{
        borderWidth: 0.3,
        borderRadius: 4,
        width: '90%',
        marginTop: 18,

    },  
    loginView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29f',
        margin: 30,
        padding: 7,
        height: 40,
        width:'100%',
        borderRadius: 3,
    },
    loginText: {
        fontSize: 17,
        color: '#fff'
    },
    loginButton: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '90%',
        height: 40,

    },

})

export default Login;
