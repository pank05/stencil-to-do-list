import { Component, ComponentInterface, Prop , h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'to-do-cards',
  styleUrl: 'to-do-cards.css',
  shadow: true,
})
export class ToDoCards implements ComponentInterface {
@Event() removeTodo: EventEmitter;
@Event() updateTodo: EventEmitter;

@Prop() value: string;
@Prop() id: string;

@State() isEditable = false;
@Prop() title: string;

@Prop() desciption:string;

toggleEdition = () => {
  this.isEditable = !this.isEditable;
};

handleKeyDown = e => {
  if (e.code === "Enter") {
    this.updateThisTodo(e.target.value);
    this.isEditable = false;
  }
};

removeThisTodo = () => {
  this.removeTodo.emit(this.id);
}

updateThisTodo(value) {
  this.updateTodo.emit({value: value, id: this.id});
}

render() {
  let todoTemplate;

  if (!this.isEditable) {

    todoTemplate = <div>
      {this.value}
      <button onClick = {this.removeThisTodo}>
        X
      </button>
    </div>

  } else {

    todoTemplate = <div>
      <input value={this.value} onKeyDown={this.handleKeyDown} />

    </div>
  }

  return (
    <li onDblClick= {this.toggleEdition}>
      {todoTemplate}
    </li>
  );
}

}
