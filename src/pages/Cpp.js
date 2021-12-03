import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import CodeListCpp from "../components/CodeListCpp";

export default function Cpp() {
    const user = getUser();
    return (
        <Layout user = {user}>
            <Container>
                <div>
                    <CodeListCpp/>
                </div>
            </Container>
        </Layout>
    )
}