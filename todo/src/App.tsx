import {css} from 'emotion';
import * as React from 'react';
import {useMappedState} from 'redux-react-hook';
import {todoListData} from './metaTodoListData';
import {IState} from './Store/Store';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
const styles = {
  root: css``,
  main: css`
    width: 100%;
    padding: 0 10px;
    max-width: 800px;
    margin: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 12px;
    margin-top: 9px;
  `,
};
export default function App() {
  const mapState = React.useCallback(
    (state: IState) => ({
      lastUpdated: state.lastUpdated,
      countList: [state.todos.length, state.done.length, state.undo.length],
    }),
    [],
  );
  const {lastUpdated, countList} = useMappedState(mapState);
  return (
    <div>
      <div className={styles.main}>
        <TodoInput />
        {todoListData.map((item, _index) => (
          <TodoList category={item} count={countList[_index]} key={_index} />
        ))}
        <div className={styles.lastUpdated}>
          Last updated:{' '}
          {lastUpdated ? new Date(lastUpdated).toString() : 'never'}
        </div>
      </div>
    </div>
  );
}
