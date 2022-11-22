import styled from "styled-components";
import NameTag from "./NameTag";
import ConsentList from "./ConsentList";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { useEffect, useState } from "react";
import EditToggle from "./EditToggle";
import Footer from "./Footer";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const EditContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const App = () => {

    const [edit, setEdit] = useState(false);
    const form = useForm();

    useFormPersist("consentPreferences", {
        watch: form.watch, 
        setValue: form.setValue,
        storage: window.localStorage
    });

    const formValues = form.watch();

    useEffect(() => {
        if(!edit) {
            form.setValue('consents', [...formValues.consents])
        }
    }, [edit])

    return (
        <Container>
            <NameTag {...{form, edit}} />
            <ConsentList {...{form, edit}} />
            <EditContainer>
                <EditToggle {...{edit, setEdit}} />
            </EditContainer>
            <Footer />
        </Container>
    );
}

export default App;