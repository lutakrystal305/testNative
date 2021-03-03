import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Category from '../components/Category';
import koala from '../assets/koala.png';
import dog from '../assets/dog.png';
import panda from '../assets/panda.png';
import butterfly from '../assets/butterfly.png';
import beetle from '../assets/beetle.png';
import pig from '../assets/pig.png';

const a = [
  {id: 1, img: dog, text: 'Dog'},
  {id: 2, img: panda, text: 'Panda'},
  {id: 3, img: beetle, text: 'Beetle'},
  {id: 4, img: koala, text: 'Koala'},
  {id: 5, img: pig, text: 'Pig'},
  {id: 6, img: butterfly, text: 'Butterfly'}
]
export default Home = ({ navigation }) => {
  
  const [cates, setCates] = useState(a);
  return (
    <View>
        <FlatList 
        data={cates}
        renderItem={({ item }) => <Category img={item.img} text={item.text} onPress={() => navigation.navigate('Little', {id: item.id, name: item.text})}/>}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  
});
