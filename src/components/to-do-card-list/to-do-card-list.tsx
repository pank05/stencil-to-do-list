import { Component, ComponentInterface, h, State, Listen, EventEmitter,Event  } from '@stencil/core';
import { CardDataI } from '../../type';

@Component({
  tag: 'to-do-card-list',
  styleUrl: 'to-do-card-list.css',
  shadow: false,
})
export class ToDoCardList implements ComponentInterface {

  let cardId = 1;

  @Event() addToDoTask: EventEmitter<CardDataI>;

  @State() todos: Array <CardDataI> =[];

  @State() addTaskValue : string ="";
  
  @Listen('updateTodoTask',{capture:true})
  updateValue(event:CustomEvent<CardDataI>) {
   
    let updatedTask:CardDataI = event.detail;

    let todoToUpdate:Array <CardDataI> = this.todos.map((task) => {
      if (task.cardId === updatedTask.cardId){
        return task = updatedTask;
      };
      return task;
    });

    this.todos = [...todoToUpdate];
  }


  @Listen('removeTodoTask',{capture:true})
  onRemoveToDoHandler(event:CustomEvent<CardDataI>){
    this.todos = [...this.todos.filter((cards:CardDataI)=>{
      return cards.cardId != event.detail.cardId;
    })]
  }


  onInputChangeHandler = (event:any) => {
    this.addTaskValue = event.target.value;
  }

  generateCardId = ():string =>{
  return  Math.random().toString(36).substring(7) + this.cardId.toString();
  }


 onButtonClickHandler = (event:any) =>{
   if(this.addTaskValue.length > 0){
    event.preventDefault();
    let cardData : CardDataI  ={
    description:'This is test description',
    cardId: this.generateCardId(),
    title:this.addTaskValue,
    isEditable:true,
    cardImg:"https://picsum.photos/id/"+Math.floor(Math.random() * 101)+"/300/200"
  };
    
  this.todos = [...this.todos,cardData];
  this.cardId++;
  this.addTaskValue = "";
   }
    
 }

  render() {
    return (
      <div>
        <div class="add-task">
        <input 
        type="text"
        class="add-task-input"
        placeholder="Add Card Title"  
        value={this.addTaskValue}
        name="addTask"
        onInput={(e)=>this.onInputChangeHandler(e)}
        />
        <button 
        type="button"
        class="btn-success"
        onClick={(e)=>this.onButtonClickHandler(e)}
        >Add Task</button>
        </div>
        <div class="row cards-container">
         {this.todos.length > 0 ? this.todos.map( cardData => {
          return <to-do-cards cardData={cardData}></to-do-cards>;
         }): "No Card Avaliable !!"}
        </div>
      </div>
    );
  }


}
