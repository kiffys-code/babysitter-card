import ConsentEdit from "components/ConsentEdit";
import { STORAGE_KEY } from "config/storage";
import useMustBeAdult from "hooks/useMustBeAdult";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist'
import { useLoaderData } from "react-router-dom";

const ConsentChangePage = () => {

    useMustBeAdult();
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