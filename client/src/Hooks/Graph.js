import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import styled from "styled-components";

const GraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function Graph(props) {
  const formattedData = props.worldCup.filter(player => player.searches > 4);

  console.log("graph stastistic", formattedData);
  return (
    <GraphDiv>
      <h2>Players by Searches</h2>
      <BarChart width={950} height={300} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="searches" fill="#8884d8" />
      </BarChart>
    </GraphDiv>
  );
}

export default Graph;
