import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import  Timer from "../utils/Timer";
import { TextField } from "@mui/material";
import CodeCard from "../utils/CodeCard";
import WordCount from '../utils/WordCount'
import CodeList from "../components/CodeList";
import TypingComponent from "../components/TypingComponent";

export default function Practice() {
    const user = getUser();
    return (
        <Layout user = {user}>
            <Container>
                <div>
                    <Timer/>
                    <CodeCard/> 
                    <CodeList/>
                    <WordCount/>
                    <TypingComponent/>
                </div>
            </Container>
        </Layout>
    )
}