import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Recommended" />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Action" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Sci-fi" />
      <CardSlider data={getMoviesFromRange(20, 30)} title="Comedy" />
    
    </Container>
  );
}

const Container = styled.div``;
