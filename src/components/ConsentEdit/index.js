import EditToggle from "components/EditToggle";
import TextInput from "components/shared/input/TextInput";
import ThemePicker from "components/shared/input/ThemePicker";
import { ThemeContext } from "config/context";
import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";
import ConsentListEdit from "./ConsentListEdit";

const Container = styled.div`

`

const EditContainer = styled.div`
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
`;

const ConsentEdit = ({form}) => {

    const {control, register, watch, getValues} = form;
    const {setThemeColor, themeColor} = useContext(ThemeContext);

    const watchedThemeColor = watch('theme', themeColor);

    useEffect(() => {
        setThemeColor(getValues('theme'));
    }, [watchedThemeColor, setThemeColor, getValues]);


    return (
        <Container>
            <TextInput
                control={control}
                register={register}
                name='name'
                label='Name'
                defaultValue='This Little'
            />
            <TextInput 
                control={control}
                register={register}
                name='playAge'
                label='Play Age'
                defaultValue='Toddler'
            />
            <ThemePicker form={form} />
            <ConsentListEdit form={form} />
            <EditContainer>
                <EditToggle edit={true} to='/' />
            </EditContainer>
        </Container>
    );
}

export default ConsentEdit;