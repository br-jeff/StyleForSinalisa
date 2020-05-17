import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Home () { 
    return (
      <View style={styles.teste}>
        <ScrollView>
            
        </ScrollView>
        
      </View>
    );
  }


const styles =  StyleSheet.create ({
  teste: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
})
 
export default Home