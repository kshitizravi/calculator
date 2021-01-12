import React, {Component} from 'react';
import {Text, View, ToastAndroid, ScrollView } from 'react-native';
import styles from './styles';

import NumberButtons from  './components/NumberButtons';
import HistoryView from './components/HistoryView'

const buttons = [
  ['CLEAR', 'DEL'],
  ['7','8','9','÷'],
  ['4','5','6','x'],
  ['1','2','3','+'],
  ['.','0','=','-']
]

const initialOutput = '0';
const maxLength = 57;



export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.container}>

      </View>
      <View style={styles.contOutput}>
        <View style={styles.placeHolderOutput}>
          <Text style={styles.txtDefault}>OUTPUT HERE</Text>
        </View>
      </View>
      
      <View style={styles.contButtons}>
      </View>
      
    </View>
  );
}
}

