import styled from "styled-components";
import NameTag from "./NameTag";
import ConsentList from "./ConsentList";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { useEffect, useState } from "react";
import EditToggle from "./EditToggle";
import Footer from "./Footer";
import ThemePicker from "./ThemePicker";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.background};
`;

const EditContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const App = ({setCurrentTheme}) => {

    const [edit, setEdit] = useState(false);
    const form = useForm();

    useFormPersist("consentPreferences", {
        watch: form.watch, 
        setValue: form.setValue,
        storage: window.localStorage
    });

    const formValues = form.watch();

    // Force update when finished editing
    useEffect(() => {
        if(!edit) {
            if(formValues?.consents) {
                form.setValue('consents', [...formValues.consents]);
            }
        }
        // eslint-disable-next-line
    }, [edit])

    const themeWatch = form.watch('theme');

    useEffect(() => {
        setCurrentTheme(form.getValues('theme'));
        // eslint-disable-next-line
    }, [themeWatch])

    return (
        <Container id='app' >
            <NameTag {...{form, edit}} />
            <ThemePicker {...{form, edit}} />
            <ConsentList {...{form, edit}} />
            <EditContainer>
                <EditToggle {...{edit, setEdit}} />
            </EditContainer>
            <Footer />
        </Container>
    );
}

export default App;