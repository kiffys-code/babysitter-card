import styled from "styled-components";
import NameTag from "./NameTag";
import ConsentList from "./ConsentList";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => {

    const form = useForm();

    useFormPersist("consentPreferences", {
        watch: form.watch, 
        setValue: form.setValue,
        storage: window.localStorage
    });

    return (
        <Container>
            <NameTag {...{form}} />
            <ConsentList {...{form}} />
        </Container>
    );
}

export default App;