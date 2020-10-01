import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo3.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand;

const Image = styled.img`
  height: 75%;
  margin: auto 0;
`;