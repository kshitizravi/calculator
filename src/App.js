import React, {Component} from 'react';
import {Text, View } from 'react-native';
import styles from './styles'

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

