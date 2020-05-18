import React  from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem'



function Home({navigation}) { 
    return (
        <ScrollView style={styles.scrollView} 
        contentContainerStyle={styles.itemPostion} >
              <View>
                 <Button title="Novo Relatorio"
                 onPress={() => navigation.navigate('NovoRelatorio')}
                 />
              </View>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/> 
            <ListItem/>
            <ListItem/>
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