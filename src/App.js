import { Component } from "./core";
import './components'

export class App extends Component {
  constructor() {
    super();
  }

render() {
  return `
      <div id='shell'>
      <it-header></it-header>
      <movie-card></movie-card>
      </div>
  
  `
}
}
customElements.define('it-app', App)