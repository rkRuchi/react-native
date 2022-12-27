/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Button, Text, TouchableOpacity,TouchableHighlight, View , StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement } from './actions/index';

const App = () => {
  const dispatch= useDispatch();
  const state = useSelector(state => state)
  return (
      <View style={{ flex: 1}}>
      <Text>Welcome</Text>
      <Text style={{...styles.txtt}}>{state}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight style={{ ...styles.btn }} onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.btn }} onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  btn:{
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
  txtt:{
    fontSize: 100,
    fontWeight: "bold"
  }
})

// const styles = StyleSheet.create({
//   alignItems: 'center',
//   justifyContent: 'center',
// })
// textt:{
  

// text: {
//   fontSize: 100,
//   fontWeight: "bold"
// },
// button: {
//   width: 100,
//   height: 50,
//   margin: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: 10,
//   borderColor: "black",
//   borderStyle: "solid",
//   borderWidth: 2
//})
