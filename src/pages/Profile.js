import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import UserData from "../components/UserData";

export default function Profile() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <UserData user = {user}/>
      </Container>
    </Layout>
  );
}
