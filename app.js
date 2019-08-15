const { Component } =  React;
const { render } = ReactDOM;

class App extends Component {
  render(){
    return React.createElement('hr');
  }
}

const root = document.querySelector('#root');
render(React.createElement(App), root);
