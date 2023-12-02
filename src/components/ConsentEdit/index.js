import TextInput from "components/shared/input/TextInput";
import ThemePicker from "components/ConsentEdit/ThemePicker";
import { useEffect } from "react";
import styled from "styled-components";
import ConsentListEdit from "./ConsentListEdit";
import { Link } from "react-router-dom";
import RoundedButton from "components/shared/RoundedButton";
import Icon from "components/shared/Icon";
import MenuContainer from "components/shared/MenuContainer";
import { useColorTheme } from "providers/ColorThemeProvider";

const Container = styled.div`
    height: 100%;
    overflow: auto;
    padding: 0 0.5rem;
`

const ConsentEdit = ({form}) => {

    const {control, register, watch, getValues} = form;
    const [themeColor, setThemeColor] = useColorTheme();

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
                defaultValue=''
                placeholder='Your name'
            />
            <TextInput 
                control={control}
                register={register}
                name='playAge'
                label='Play Age'
                defaultValue=''
                placeholder='Big, Mid, Little...'
            />
            <TextInput 
                control={control}
                register={register}
                name='pronouns'
                label='Pronouns'
                defaultValue=''
                placeholder='they/them, she/her, he/him...'
            />
            <TextInput
                control={control}
                register={register}
                name='audience'
                label='Intended for...'
                defaultValue=''
                placeholder='event, person, time...'
            />
            <ThemePicker control={control} />
            <ConsentListEdit form={form} />
            <MenuContainer>
                <Link to='/'>
                    <RoundedButton as='div'>
                        <Icon src={require('assets/img/check.png')} alt='Save' />
                    </RoundedButton>
                </Link>
            </MenuContainer>
        </Container>
    );
}

export default ConsentEdit;