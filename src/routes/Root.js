import styled from "styled-components";
import NameTag from "components/NameTag";
import ConsentList from "components/ConsentList";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { useEffect, useState } from "react";
import EditToggle from "components/EditToggle";
import Footer from "components/Footer";
import ThemePicker from "components/ThemePicker";
import { Outlet } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.background};
`;

const Root = () => {

    return (
        <Container id='app' >
            <Outlet />
            <Footer />
        </Container>
    );
}

export default Root;