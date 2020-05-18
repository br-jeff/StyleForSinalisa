import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ListItem() {
    return(
        <View style={styles.container}>
         <Text> Teste  List Item</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        flex: 1,
        width: '100%',
        height: 100,
        backgroundColor: '#FFF',
        elevation: 1,
        borderWidth: 0.1,
        borderRadius: 10,
    }
})
export default ListItem