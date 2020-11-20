import { Action, IState, doneState } from './Store';
import {todoUtils} from '../utils/index';

export const getDate = () => { //获取当天日期
  const date = new Date();
  const mouth =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return date.getFullYear() + '-' + mouth + '-' + day;
}


// export default (state,action) =>{
//   switch(action.type){
//     case A:
//       return handleA(state)
//     default:
//     // 没有匹配上就直接返回原state
//     return state
//   }
// }
export default function reducer(state: IState, action: Action) {
  // 新建这个todo对象
  todoUtils.setStoreItem("lastUpdated",Date.now());
  switch (action.type) {
    // "add todo"
    case "add todo": {
      todoUtils.setStoreItem("todos",state.todos.concat(action.todo))
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo)
      };
    }
    // "done todo"
    case "done todo": {
      const todos = state.todos.slice();
      let doneItem: doneState = {
        content: todos.splice(action.index, 1)[0],
        date: getDate()
      };
      state.done.push(doneItem);
      todoUtils.setStoreItem("todos",todos);
      todoUtils.setStoreItem("done",state.done);
      return { ...state, lastUpdated: Date.now(), todos, done: state.done };
    }
    // "cancel todo"
    case "cancel todo": {
      const todos = state.todos.slice();
      const delItem = todos.splice(action.index, 1);
      state.undo.push(delItem[0]);
      todoUtils.setStoreItem("todos",todos);
      todoUtils.setStoreItem("undo",state.undo);
      return {
        ...state,
        lastUpdated: Date.now(),
        todos,
        undo: state.undo
      };
    }
    // "withdraw todo"
    case "withdraw todo": {
      const done = state.done.slice();
      const delItem = done.splice(action.index, 1)[0];
      state.todos.push(delItem.content);
      todoUtils.setStoreItem("done",done);
      todoUtils.setStoreItem("todos",state.todos);
      return {
        ...state,
        lastUpdated: Date.now(),
        done,
        todos: state.todos
      };
    }
    // "delete todo"
    case "delete todo": {
      const undo = state.undo.slice();
      undo.splice(action.index, 1);
      todoUtils.setStoreItem("undo",undo);
      return {
        ...state,
        lastUpdated: Date.now(),
        undo
      };
    }
    // "restore todo"
    case "restore todo": {
      const undo = state.undo.slice();
      const delItem = undo.splice(action.index, 1);
      state.todos.push(delItem[0]);
      todoUtils.setStoreItem("undo",undo);
      todoUtils.setStoreItem("todos",state.todos);
      return {
        ...state,
        lastUpdated: Date.now(),
        undo,
        todos: state.todos
      };
    }
    default:
      return state;
  }
}
