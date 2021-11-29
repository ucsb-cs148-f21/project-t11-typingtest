import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import  Timer from "../utils/Timer";
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
                    <TypingComponent ID='3687284161695356416'/>
                </div>
            </Container>
        </Layout>
    )
}