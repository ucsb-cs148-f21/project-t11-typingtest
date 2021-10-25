import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";
import Timer from "../utils/Timer";
import { TextField } from "@mui/material";
import BasicCard from "../utils/Card";

export default function Practice() {
    const user = getUser();
    return (
        <Layout user = {user}>
            <Container>
                <div>
                    <Timer/>
                    <BasicCard/> 
                    <TextField variant = "outlined"
                    placeholder = "Start Writing"
                    multiline
                    rows = {5}
                    rowsMax = {10}
                    fullWidth/>
                </div>
            </Container>
        </Layout>
    )
}