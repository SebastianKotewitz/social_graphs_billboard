import './App.css';
import React from 'react';
import HomePage from './homePage/HomePage';
import TopBar from './topBar/TopBar';
import BottomBar from './bottomBar/BottomBar';

interface Props {

}

interface State {
  selectedWindow: number;
}

class App extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.setWindow = this.setWindow.bind(this);
    this.state = { selectedWindow: 0 };
  }

  setWindow(window: number): void {
    console.log(window);
    this.setState({ selectedWindow: window });
  }

  render() {
    return (
      <div className="App" >
        <TopBar setWindow={this.setWindow} />
        <header className="App-header">
          {this.state.selectedWindow === 0 ? <HomePage /> : <div />}
        </header>
        <BottomBar />
      </div >
    );
  }
}

export default App;
