import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
