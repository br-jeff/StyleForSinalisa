import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem'



function Home() { 
    return (
        <ScrollView style={styles.scrollView} 
        contentContainerStyle={styles.itemPostion} >

          <ListItem/>
        
        </ScrollView>
    );
  }


const styles =  StyleSheet.create ({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FCFCFC',
  },
itemPostion: {
  justifyContent:'center',
  alignItems: 'center',
  margin: 3,
}
})
 
export default Home