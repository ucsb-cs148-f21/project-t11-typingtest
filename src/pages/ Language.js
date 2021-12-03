import React from "react";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import LangCard from "../utils/LangCard";
import background from "../images/bg.jpg";

export default function Language() {
    const user = getUser();
    return (
        <Layout user={user}>
            <div style={{ backgroundImage: `url(${background})` }}>
            <LangCard/>
            </div>
        </Layout>

    );
}