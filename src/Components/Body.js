import React from "react";
import styled from "styled-components";

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const Body = () => {
  return (
    <div>
      <FlexContainer>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </FlexContainer>
    </div>
  );
};

export default Body;

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
