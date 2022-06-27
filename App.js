/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import TasksScreen from './src/screens/Tasks';


const App = ({children, title}) => {

  return (
    <SafeAreaView style={{flex:1}}>
      <TasksScreen />
    </SafeAreaView>
    
  )
};

const styles = StyleSheet.create({
  
});

export default App;
