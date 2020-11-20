import * as React from "react";
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TodoInput from '../components/TodoInput';

import TodoItem from 'src/components/TodoItem';
import { Props } from 'src/components/TodoList';
// describe('Enzyme shallow的浅渲染（Shallow Rendering）中', function () {
//   it('Example组件中按钮的名字为子组件Sub中span的值', function () {
//     const name='按钮名'
//     let app = shallow(<Example text={name} />)
//     const buttonObj=app.find('button')
//     const spanObj=app.find('span')

//     console.info(`查找到button的个数：${buttonObj.length}`)
//     console.info(`查找到span的个数：${spanObj.length}`)

//     assert.equal(buttonObj.text(),spanObj.text())
//   })
// })

describe('Enzyme Shallow', () => {
  it('addtodo', () => {
    const defaultState:  Props = {
      category :{
              type: "todos",
              title: "增加",
              action: "done",
              action1: "cancel",
              icon: "&#xe6ad;"
      },
      count:1
    };
    let todoinput = shallow(<TodoInput/>);
    const todo = {
      count:1
    };
    // 添加数据
    let ul = shallow(
      <ul>
            {new Array(defaultState.count).fill(null).map((_, index) => (
              <TodoItem
                index={index}
                key={index}
                type={defaultState.category.type}
                icon={defaultState.category.icon}
                action={defaultState.category.action}
                action1={defaultState.category.action1}
              />
            ))}
      </ul>
  );
  //回车添加
  todoinput.find(".addButton").simulate("click");
  //有无显示 
  // 长度有没有加一
  // eslint-disable-next-line jest/valid-expect
  expect(ul.children()).to.have.equals(todo.count);
  });
  it('deletetodo', () => {
    const defaultState:  Props = {
      category :{
              type: "todos",
              title: "增加",
              action: "done",
              action1: "cancel",
              icon: "&#xe6ad;"
      },
      count:1
    };
    let todoinput = shallow(<TodoInput/>);
    const todo = {
      count:1
    };
    // 添加数据
    let ul = shallow(
      <ul>
            {new Array(defaultState.count).fill(null).map((_, index) => (
              <TodoItem
                index={index}
                key={index}
                type={defaultState.category.type}
                icon={defaultState.category.icon}
                action={defaultState.category.action}
                action1={defaultState.category.action1}
              />
            ))}
      </ul>
  );
  //回车添加
  todoinput.find(".addButton").simulate("click");
  //有无显示 
  // 长度有没有加一
  // eslint-disable-next-line jest/valid-expect
  expect(ul.children()).to.have.equals(todo.count);
  });
 
});