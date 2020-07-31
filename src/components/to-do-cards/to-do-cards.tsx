import { Component, ComponentInterface, Prop , h} from '@stencil/core';

@Component({
  tag: 'to-do-cards',
  styleUrl: 'to-do-cards.css',
  shadow: true,
})
export class ToDoCards implements ComponentInterface {

@Prop() title: string;

@Prop() desciption:string;

  render() {
    return (
     <div class="card">
       <div class="card-title">
          {this.title}
       </div>
       <div class="card-body">
         {this.desciption}
       </div>
     </div>
    );
  }

}
