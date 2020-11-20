import reducer from '../Store/reducer';

// describe('try to use Enzyme', () => {
//   let wrapper;
//   let config = {};
//   beforeAll(() => {
//     wrapper = mount(<Widget />);
//   });
//   it('should have rendered widget', () => {
//     expect(wrapper.hasClass('container')).toEqual(true);
//   });
// });

describe('test', function () {
  // Jest其实包括了断言库和运行器。断言库是写单元测试时候使用的接口，Jest内置的断言库是Jasmine
  it('add todo', function () {
    const addtodo = reducer.arguments.action[1].type;
    const state = {
      lastUpdated: 1,
      todos: ['add todo'],
      done: [
        {
          content: 'todo1',
          date: '时间',
        },
      ],
      undo: ['#fff'],
    };
    const todo = {
      lastUpdated: 2,
      todos: ['add todo'],
      done: [
        {
          content: 'todo2',
          date: '时间',
        },
      ],
      undo: ['#fff'],
    };
    const testitem = [
      {
        lastUpdated: 1,
        todos: ['add todo'],
        done: [
          {
            content: 'todo1',
            date: '时间',
          },
        ],
        undo: ['#fff'],
      },
      {
        lastUpdated: 1,
        todos: ['add todo'],
        done: [
          {
            content: 'todo2',
            date: '时间',
          },
        ],
        undo: ['#fff'],
      },
    ];
    const result = reducer(state, addtodo(todo));
    expect(result).toEqual(testitem);
  });

  it('delete todo', function () {
    const deletetodo = reducer.arguments.action[3].type;
    const state = {
      lastUpdated: 1,
      todos: ['delete todo'],
      done: [
        {
          content: 'todo1',
          date: '时间',
        },
      ],
      undo: ['#fff'],
    };
    const todo = {
      lastUpdated: 1,
      todos: ['delete todo'],
      done: [
        {
          content: 'todo1',
          date: '时间',
        },
      ],
      undo: ['#fff'],
    };
    const testitem = {};
    const result = reducer(state, deletetodo(todo));
    expect(result).toEqual(testitem);
  });
});
