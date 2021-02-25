import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Category from './components/Category';
import koala from './assets/koala.png';
import dog from './assets/dog.png';
import panda from './assets/panda.png';
import butterfly from './assets/butterfly.png';
import beetle from './assets/beetle.png';
import pig from './assets/pig.png';

export default function App() {
  return (
    <View>
      <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
        <Category img={dog} text='Dog' />
        <Category img={koala} text='Koala' />
        <Category img={panda} text='Panda' />
        <Category img={butterfly} text='Butterfly' />
        <Category img={beetle} text='Beetle' />
        <Category img={pig} text='Pig' />
      </ScrollView>
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
