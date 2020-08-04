import { Component, ComponentInterface, Prop , h, State } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
import { CardDataI } from '../../type';

@Component({
  tag: 'to-do-cards',
  styleUrl: 'to-do-cards.css',
  shadow: false,
})
export class ToDoCards implements ComponentInterface {

 constructor(){
    
  }

@Event() removeTodoTask: EventEmitter<CardDataI>;
@Event() updateTodoTask: EventEmitter<CardDataI>;

@Prop() cardData:CardDataI;

@State() isEditable = false;

@State() cardEditValue ="";


toggleEdition = () => {
  this.isEditable = !this.isEditable;
};

handleKeyDown = e => {
  if (e.code === "Enter") {
    this.isEditable = false;
    let updatedTask = {...this.cardData};
    updatedTask.title = this.cardEditValue;
    this.updateTodoTask.emit(updatedTask);
  }
};

removeThisTodo = () => {
  this.removeTodoTask.emit(this.cardData);
}

render() {
  let todoTemplate;

    todoTemplate = 
      <div class="card-title">
        <div class="card-title-txt">
          {!this.isEditable ? 
          this.cardData.title : 
          <input 
          value={this.cardEditValue} 
          onInput={(e:any)=> this.cardEditValue = e.target.value} 
          onKeyDown={this.handleKeyDown} />}
        </div> 
        <div>
        <button type="button" class="btn-danger btn-sm" onClick = {this.removeThisTodo}>
          X
        </button>
        </div>
      </div>
      


  return (
    <div class="column" onDblClick= {this.toggleEdition}>
      <div class="card">
      {todoTemplate}
      <div class="card-body">
        <img src={this.cardData.cardImg}/>
      </div>
      </div>
    </div>
  );
}

}
