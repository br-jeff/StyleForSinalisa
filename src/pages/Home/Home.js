import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem'



function Home() { 
    return (
      <View style={styles.teste}>
        <ScrollView>

        <ListItem/>

        </ScrollView>

      </View>
    );
  }


const styles =  StyleSheet.create ({
  teste: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
})
 
export default Home