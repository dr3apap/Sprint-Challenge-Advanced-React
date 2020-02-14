import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import styled from "styled-components";
import WomenWorldCup from "./Hooks/WomenWorldCup";
import ToggleMode from "./Hooks/ToggleMode";
import Graph from "./Hooks/Graph";


const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;




class App extends React.Component{

constructor(props){
  super(props)
  this.state = {
    worldCup:[]
  }
console.log(this.state.worldCup)

}

componentDidMount(){
axios.get(`http://localhost:5000/api/players`)
.then(res =>{
  this.setState({worldCup:res.data})
  console.log("The data is:", res)
  })
  .catch(err =>{
  console.log('The data requested:', err)
  })

}


render(){
  return (
<Parent className="App">

  <WomenWorldCup players={this.state.worldCup}/>
  <ToggleMode/>
</Parent>
  );

}
}

export default App;
