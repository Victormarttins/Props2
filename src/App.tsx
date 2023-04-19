import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {

}
interface state {
  showModal: boolean;
}



export default class App extends React.Component<Props, state>{

  constructor(porps: Props) {
    super(porps)
    this.state = { showModal: false }


  };
  handlecloseModal = () => {

    const { showModal } = this.state;
    this.setState({
      showModal: !showModal
    })
  }


  render() {

    const { showModal }= this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Botao showModal={showModal} handlecloseModal={() => this.handlecloseModal()}/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }


}
