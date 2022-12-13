import ConsentEdit from "components/ConsentEdit";
import ConsentList from "components/ConsentList";
import EditToggle from "components/EditToggle";
import NameTag from "components/NameTag";
import ThemePicker from "components/ThemePicker";
import { STORAGE_KEY } from "config/storage";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import styled from "styled-components";

const EditContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const ConsentChangePage = ({}) => {

    const {data} = useLoaderData();
    const form = useForm({defaultValues: data});

    useFormPersist(STORAGE_KEY, {
        watch: form.watch, 
        setValue: form.setValue,
        storage: window.localStorage
    });

    return (
        <ConsentEdit {...{form}} />
    )
}

export default ConsentChangePage;