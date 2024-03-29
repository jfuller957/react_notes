const { Component } =  React;
const { render } = ReactDOM;

const Loader = ()=> {
  return React.createElement('div', null, '...wait for it...');
}

const Item = ({ number })=> {
  return React.createElement('li', null, number)
}

const List = ({ numbers })=> {
  const lis = numbers.map( (number, idx) => React.createElement(Item, { key: idx, number }));
  return React.createElement('ul', null, lis);
}

class App extends Component {
  constructor(){
    super();
    this.state= {
      numbers: [],
      waiting: true
    };
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        numbers: [
          1, 2, 3, 9
        ],
        waiting: false
      });
    }, 500);
  }
  render(){
    const { numbers, waiting } = this.state;
    if(waiting){
      return React.createElement(Loader);
    }
    return React.createElement(List, { numbers });
  }
}

const root = document.querySelector('#root');
render(React.createElement(App), root);
