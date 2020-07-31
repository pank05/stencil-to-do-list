import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'to-do-card-list',
  styleUrl: 'to-do-card-list.css',
  shadow: true,
})
export class ToDoCardList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
