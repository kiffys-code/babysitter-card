import { Controller } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import TextInput from "./input/TextInput";
import { LEVEL } from "./Level";

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 1.2rem 1rem;
`

const Ask = styled(TextInput)`
    font-size: 1.4rem;
    text-align: left;
`
const Answer = styled(Select)`
    font-size: 1.6rem;
    font-weight: bold;
    min-width: 3rem;
    text-align: center;
`

const ConsentListItem = ({consent, index, prefix, control}) => {

    const fieldName = `${prefix}[${index}]`;

    return (
        <Container>
            <Controller 
                control={control}
                name={`${fieldName}.answer`}
                defaultValue=''
                render={({field}) =>
                    <Answer 
                        options={Object.keys(LEVEL).map(key => ({
                            label: LEVEL[key].symbol,
                            value: LEVEL[key]
                        }))}
                        inputId={field.name}
                        isMulti={false}
                        blurInputOnSelect
                        {...field}
                        value={{
                            label: field.value.symbol,
                            value: field.value
                        }}
                        onChange={it => field.onChange(it.value)}
                    />
            }/>
            <Ask 
                control={control}
                name={`${fieldName}.ask`}
                defaultValue='' 
            />
        </Container>
    )
}

export default ConsentListItem;