import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import TodoList from '../Screens/TodoList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TodoList />
    </SafeAreaView>
  );
};

export default App;
