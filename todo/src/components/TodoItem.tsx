import * as React from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {View, StyleSheet} from 'react-native';
import {IState} from '../Store/Store';
import {listProps} from './TodoList';

// 继承接口 合并接口
interface doListProps extends listProps {
  index: number;
}

export default function TodoItem({
  index,
  type,
  action,
  action1,
  icon,
}: doListProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mapState = React.useCallback((state: IState) => state[type][index], [
    index,
  ]);

  // 获取store中的数据
  const doItem = useMappedState(mapState);

  // 从store中读取dispatch
  const dispatch = useDispatch();

  // useReducer 返回的 dispatch 函数是自带了 memoize 的，不会在多次渲染时改变
  const actionTodo = React.useCallback(
    () => dispatch({type: action + ' todo', index}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index],
  );

  const action2Todo = React.useCallback(
    () => dispatch({type: action1 + ' todo', index}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index],
  );

  return (
    <View style={styles.root}>
      <i
        className="iconfont"
        onClick={actionTodo}
        dangerouslySetInnerHTML={{__html: icon}}
      />
      <span>{typeof doItem === 'string' ? doItem : doItem.content}</span>
      {action1 ? (
        <button onClick={action2Todo}>
          {type === 'todos' ? 'cancel' : 'delete'}
        </button>
      ) : (
        <span style={styles.timeSpan}>{doItem.date}</span>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    margin: 0,
    position: 'relative',
    lineHeight: 25,
    padding: '10px 100px 10px 50px',
    color: '#373e40',
  },
  i: {
    position: 'absolute',
    left: 15,
    top: 10,
    fontSize: 24,
    color: '#f1c40f',
    fontWeight: '700',
  },
  button: {
    position: 'absolute',
    right: 10,
    top: 7,
    width: 50,
    height: 30,
    lineHeight: 30,
    padding: 0,
    background: '#fff',
    border: '1px solid #c0ccda',
    color: '#666',
  },

  timeSpan: {
    position: 'absolute',
    right: 10,
    top: 0,
    color: '#aaa',
  },
});
