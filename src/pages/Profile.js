import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import DoggoImg from "../images/doggo.jpg";
import UserData from "../components/UserData"
const Doggo = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;



export default function Profile() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <UserData user={user}/>
      </Container>
    </Layout>
  );
}
