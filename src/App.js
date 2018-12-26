import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import outerData from './datamock.json';
import Card from './components/Card/Card';

class App extends Component {

  questions = {};

  componentDidMount = () => {
    //console.log(outerData);
  }

  render() {
    console.log(this.questions);
    return (
      <div className="App">
        <Card question={1+1} description="Дай четкий ответ!"></Card>
        <Card question="Соль или сахар?" description="Дай четкий ответ!"></Card>
        <Card question="Один или ноль?" description="Дай четкий ответ!"></Card>
        <Card />
      </div>
    );
  }
}

export default App;
