import React from 'react';
import {View} from 'react-native';
import TodoInput from './src/components/TodoInput';
const App = () => {
  return (
    <View>
      <TodoInput
        todoli={[{id: 1, value: '111', status: 1}]}
        finished={1}
        list={[{id: 1, value: '111', status: 1}]}
        content=""
      />
    </View>
  );
};
export default App;
