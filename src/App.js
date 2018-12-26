import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card question="Да или нет?" description="Дай четкий ответ!"></Card>
        <Card question="Соль или сахар?" description="Дай четкий ответ!"></Card>
        <Card question="Один или ноль?" description="Дай четкий ответ!"></Card>
        <Card />
      </div>
    );
  }
}

export default App;
