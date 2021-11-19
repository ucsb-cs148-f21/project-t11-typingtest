import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import DoggoImg from "../images/doggo.jpg";

const Doggo = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

export default function Profile() {
  const user = getUser();

  var fetchURL = window.location.href
  fetchURL = fetchURL.replace("profile", "profile/")
  fetchURL += user.id
  console.log(fetchURL)
  fetch(fetchURL)
    .then(response => response.json())

  return (
    <Layout user={user}>
      <Container>
        <h1>Welcome back {user.givenName}!</h1>
        <div>
          Number of easy problems completed: 
        </div>
          Number of medium problems completed: 
        <div>
          Number of hard problems completed: 
        </div>
          List of problems completed: 
        <br />
        <Doggo src={DoggoImg} />
      </Container>
    </Layout>
  );
}
