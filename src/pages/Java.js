import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import CodeListJava from "../components/CodeListJava";

export default function Java() {
    const user = getUser();
    return (
        <Layout user = {user}>
            <Container>
                <div>
                    <CodeListJava/>
                </div>
            </Container>
        </Layout>
    )
}