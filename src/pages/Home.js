import React from "react";
import styled from "styled-components";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import CardContent from '@mui/material/CardContent';
import HomeSection from "../components/HomeSection";
import { Typography } from "@mui/material";

const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

export default function Home() {
  const user = getUser();

  return (
    <Layout user={user}>
      <HomeSection/>
      <Card>
        <CardContent>
          <Typography sx={{mb:1.5}} variant="h5" color= "#3699cf">
            What is TypingTest?
          </Typography>
          <Typography variant='p'>
          It's a webapp that helps improve coding speed and gauge coding level. We will include a clock and accuracy in our API. The user can choose the language and difficulty of the coding problems and we want to expand it into a more code learning web by adding some questions so users can think about while they are coding to improve the coding skills.
          </Typography>
        </CardContent> 
      </Card>

    </Layout>
  );
}
