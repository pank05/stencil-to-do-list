import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>To-do List</h1>
        </header>

        <main>
          <to-do-card-list></to-do-card-list>
        </main>
      </div>
    );
  }
}
