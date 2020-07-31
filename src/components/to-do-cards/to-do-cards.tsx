import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'to-do-cards',
  styleUrl: 'to-do-cards.css',
  shadow: true,
})
export class ToDoCards implements ComponentInterface {

  render() {
    return (
     <div class="card">
       <div class="card-title">
        List 1
       </div>
       <div class="card-body">
         Content
       </div>
     </div>
    );
  }

}
