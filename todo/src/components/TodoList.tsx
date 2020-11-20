/* * @jsx jsx */
import {jsx} from '@emotion/core';
import {View, StyleSheet} from 'react-native';
import * as React from 'react';
import TodoItem from './TodoItem';

export interface listProps {
  type: string;
  action: string;
  action1?: string | undefined;
  title?: string;
  icon: string;
}

interface State {
  isCollapse: boolean;
}

interface Props {
  category: listProps;
  count: number;
}

export default class TodoList extends React.Component<Props, State> {
  private myRef: React.RefObject<HTMLDivElement>;
  // HTMLDivElement 接口提供了一些特殊属性（它也继承了通常的 HTMLElement 接口）来操作 <div> 元素。

  constructor(props: Props) {
    super(props);
    console.log('props,', props);
    this.myRef = React.createRef();
    this.state = {
      isCollapse: true,
    };
  }

  componentDidMount() {
    const node = this.myRef.current;
    console.dir(node);
  }

  toggleCollapse = () => {
    let ulElement: HTMLDivElement | null = this.myRef.current;
    let show: string = this.state.isCollapse ? 'block' : 'none';
    const ulHeight: string = this.state.isCollapse ? 'auto' : '0px';
    if (ulElement) {
      console.log(ulElement);
      
      let ulEleChild: any = ulElement.children[0];
      ulElement.style.display = show;
      if (this.state.isCollapse) {
        ulElement.style.height = ulEleChild.offsetHeight + 'px';
      }
      setTimeout(() => {
        if (ulElement) {
          ulElement.style.height = ulHeight;
        }
      }, 300);
    }
    let isCollapse = !this.state.isCollapse;
    this.setState({isCollapse});
  };
  render() {
    return (
      <View>
        <h5 style={styles.title} onClick={this.toggleCollapse}>
          {this.props.category.title}
          <span>{this.props.count}</span>
          <i
            className={
              this.state.isCollapse ? 'iconfont' : 'iconfont close-span'
            }
            style={styles.rotateCollapsed}>
            &#xe621;
          </i>
        </h5>
        <div
          ref={this.myRef}
          className="list-box collapsed"
          style={styles.unCollapsed}>
          <ul>
            {new Array(this.props.count).fill(null).map((_, index) => (
              <TodoItem
                index={index}
                key={index}
                type={this.props.category.type}
                icon={this.props.category.icon}
                action={this.props.category.action}
                action1={this.props.category.action1}
              />
            ))}
          </ul>
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    position: 'relative',
    height: 44,
    lineHeight: 44,
    paddingLeft: 20,
    color: '#fff',
    borderColor: '#f39894',
  },
  span: {
    display: 'inline-block',
    marginLeft: 5,
    width: 20,
    height: 20,
    border: '2px solid #fff',
    borderRadius: 50,
    lineHeight: 21,
    textAlign: 'center',
  },
  // count: {
  //   font-size: 12;
  // },
  // collapsed:{
  //   display: ‘block’,
  //   height: auto
  // },
  unCollapsed: {
    height: 0,
    display: 'none',
  },
  rotateCollapsed: {
    display: 'inline-block',
    transition: 'transform 0.3s',
    position: 'absolute',
    right: 20,
    top: 0,
  },
});
