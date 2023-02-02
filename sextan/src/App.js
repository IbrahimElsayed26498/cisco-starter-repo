import React, {Component} from 'react';
import Header from './Components/Header'
import Card from './Components/MyCard'
import './App.css';

class App extends Component {
  render(){
    return (
      <>
      <Header/> 
      <div class='cards-div'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </>
    );
  }
}

export default App;
