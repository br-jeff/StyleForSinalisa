import React from 'react';
import { View,Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

function NovoRelatorio() {
    var dataDia = new Date().getDate() 
    var dataMes = new Date().getMonth() 
    var dataAno = new Date().getFullYear() 
    var tempoHora = new Date().getHours() 
    var tempoMinutos = new Date().getMinutes()
    return(

        <View style={styles.container}>
            <TextInput keyboardType={'numeric'} style={styles.idFunc} type="cc-number" placeholder="Codigo do funcionario" />
           
    <Text> Data: {dataDia}/{dataMes}/{dataAno} </Text>
    <Text> Hora: {tempoHora}:{tempoMinutos} </Text>
    
    </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    idFunc: {
        borderWidth: 0.4,
        borderRadius: 30,
        width: 250,
        textAlign: 'center'

    }
})

export default NovoRelatorio