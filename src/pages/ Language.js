import React from "react";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import LangCard from "../utils/LangCard";
import {Grid} from "@material-ui/core";

export default function Language() {
    const user = getUser();
    return (
        <Layout user={user}>
        <LangCard/>
        </Layout>

    );
}