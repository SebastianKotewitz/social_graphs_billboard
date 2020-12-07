import './App.css';
import React from 'react';
import HomePage from './homePage/HomePage';
import TopBar from './topBar/TopBar';
import BottomBar from './bottomBar/BottomBar';
import SentimentalPage from './sentimental/SentimentalPage';

interface Props {
  initialWindow: number;
}

interface State {
  selectedWindow: number;
}

class App extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);
    this.setWindow = this.setWindow.bind(this);
    var keepPath = window.location.pathname.split('/')[1];
    var path = window.location.pathname.split('/')[2];
    console.log(path);
    if (!path) {
      path = "0";
      window.history.pushState("", "", keepPath + "/" + path);
    }
    this.state = { selectedWindow: Number(path) };
  }

  setWindow(n: number): void {
    window.history.pushState("", "", n.toString());
    this.setState({ selectedWindow: n });
  }

  render() {
    return (
      <div className="App" >
        <TopBar setWindow={this.setWindow} selectedWindow={this.state.selectedWindow} />
        <header className="App-header">
          {this.state.selectedWindow === 0 ? <HomePage /> : <div />}
          {this.state.selectedWindow === 4 ? <SentimentalPage /> : <div />}
        </header>
        <BottomBar />
      </div >
    );
  }
}

export default App;
