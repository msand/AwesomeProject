/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Svg, Circle, Path } from 'react-native-svg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const SvgExample = () => (
  <Svg width="200" height="200" viewBox="-100 -100 200 200">
    <Path
      fill="#F7931E"
      stroke="#000"
      strokeWidth="1"
      d="M-100,0 L100,0z M0,-100 L0,100z"
    />
    <Circle cx="0" cy="0" r="10" fill="green" />
  </Svg>
);

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SvgExample />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
