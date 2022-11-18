import styled from "styled-components";
import NameTag from "./NameTag";
import ConsentList from "./ConsentList";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { LEVEL } from "./Level";
import { useState } from "react";
import EditToggle from "./EditToggle";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => {

    const [edit, setEdit] = useState(false);
    const form = useForm({defaultValues: {
        consents: [
            {
                ask: 'Hugs',
                answer: LEVEL.ask
            },
            {
                ask: 'Snuggles',
                answer: LEVEL.green
            }
        ]
    }});

    useFormPersist("consentPreferences", {
        watch: form.watch, 
        setValue: form.setValue,
        storage: window.localStorage
    });

    return (
        <Container>
            <NameTag {...{form, edit}} />
            <ConsentList {...{form, edit}} />
            <EditToggle {...{edit, setEdit}} />
        </Container>
    );
}

export default App;