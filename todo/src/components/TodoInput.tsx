import * as React from 'react';
import {useDispatch} from 'redux-react-hook';
import {View, StyleSheet, Text} from 'react-native';

import 'react-toastify/dist/ReactToastify.css';
export default function TodoInput() {
  const [newTodo, setNewTodo] = React.useState('');
  // 通过useDispatch 可以获取dispatch
  const dispatch = useDispatch();
  // 即使多几个子组件也可以共享状态
  return (
    <div style={styles.root}>
      <input
        style={styles.input}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && newTodo.trim().length > 0) {
            dispatch({type: 'add todo', todo: newTodo});
            setNewTodo('');
          }
        }}
        placeholder="What needs to be done?"
        value={newTodo}
      />
      <button
        style={styles.addButton}
        onClick={(e) => {
          if (newTodo.trim().length > 0) {
            dispatch({type: 'add todo', todo: newTodo});
            setNewTodo('');
          }
        }}>
        Add
      </button>
    </div>
  );
}


const styles = StyleSheet.create({
  root :{
    position:'relative'，
    padding: 30
  },
  input: {
    width: '100',
    height: 40, 
    padding: 7,
    lineHeight: 26,
    border: '1px solid #c0ccda',
    outline: 'none',
  },
  addButton: {
    position: 'absolute',
    right: 0,
    top: 30,
    width: 80,
    height: 40,
    color: '#fff',
    padding: '7px 0',
    border: '1px solid #f39894',
    background: '#f39894',
  },
  toastify :{
    top: 44,
    width: 300,
    backColor: '#ff9800',
  }
});

