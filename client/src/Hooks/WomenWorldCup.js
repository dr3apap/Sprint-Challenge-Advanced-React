import React from "react";
import useDarkMode from "./useDarkMode";
import Players from "./Players";
import styled from "styled-components";


const WrapperDiv = styled.div`
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ChildDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;





class WomenWorldCup extends React.Component{

  constructor(props){
    super(props)

  }
render(){
return(
<WrapperDiv>
<h2>WOMEN WORLD CUP PLAYER'S </h2>
<ChildDiv>
{this.props.players.map(info => (<Players key={info.id} info={info}/>))}

</ChildDiv>
</WrapperDiv>
);


}


}





export default WomenWorldCup;
