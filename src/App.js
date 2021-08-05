import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header'
import Section from './component/section'
import { DataProvider } from './component/context';

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
