import React, { Component } from "react";
import Navbar from "./Components/Navbar/NavbarNew";
import Body from "./Components/Body";
import GlobalStyle from "./styles/Global";
import styled from "styled-components";

export const Grid = styled.div`
  border: 1px solid red;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  border: 1px solid blue;
  padding: ${(props) => props.pad}px;
`;

class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        {/* <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        /> */}
        {/* <GlobalStyle />

        <Body />
          <Row>
            <Col size={1} pad={10}>Long Col</Col>
            <Col size={3}>Long Col</Col>
          </Row>
          
          <Row>
            <Col size={1}>
              <Row>
                <Col size={1}/>
                <Col size={4}/>
              </Row>

            </Col>
            <Col size={4}>Me</Col>
          </Row> */}

        <Navbar />
      </>
    );
  }
}

export default App;
