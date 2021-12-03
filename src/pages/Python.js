import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import CodeListPython from "../components/CodeListPython";

export default function Python() {
    const user = getUser();
    return (
        <Layout user = {user}>
            <Container>
                <div>
                    <CodeListPython/>
                </div>
            </Container>
        </Layout>
    )
}