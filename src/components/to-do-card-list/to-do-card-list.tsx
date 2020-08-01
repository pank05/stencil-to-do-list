import { Component, ComponentInterface, Host, h, State, Listen  } from '@stencil/core';

@Component({
  tag: 'to-do-card-list',
  styleUrl: 'to-do-card-list.css',
  shadow: true,
})
export class ToDoCardList implements ComponentInterface {
  @State() todos: any;
  @State() newTodo;
  @Listen('removeTodo')

  removeTodo(event) {
    debugger;
    this.todos = this.todos.filter((todo) => {
      return todo.id !== parseInt(event.detail);
    });
    console.log(this.todos);
  }
  @Listen('updateTodo')
  updateValue(event) {
    const todos = this.todos.concat([]);

    let todoToUpdate = todos.filter((todo) => {
      return todo.id === event.detail.id;
    })[0];

    todoToUpdate.value = event.detail.value;

    this.todos = todos;
  }
  componentWillLoad() {
    this.todos = [{ id: 1, value: 2 }];
  }
  updateNewTodo(newTodo) {
    this.todos = [...this.todos, { id: Date.now(), value: newTodo.value }];
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateNewTodo(e.target)}/>

        <ul>
          {this.todos.map((todo) => {
            debugger;
            return <to-do-cards
              value={todo.value}
              id={todo.id}></to-do-cards>
          })}
        </ul>
      </div>
    );
  }


}
