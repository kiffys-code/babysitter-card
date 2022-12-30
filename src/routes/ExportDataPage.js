import ConsentView from "components/ConsentView";
import CopyToClipboard from "components/CopyToClipboard";
import StyledModal from "components/StyledModal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { encode } from "util/data-utils";
import {useState, useEffect} from 'react';


const ExportDataPage = () => {

    const [encoded, setEncoded] = useState();
    const navigate = useNavigate();
    const {data} = useLoaderData();

    useEffect(() => {
        (async () => {
            setEncoded(await encode({...data, shareDate: new Date() }))
        })().catch(e => console.error('could not compress data'))
    }, [data])

    const shareUrl = `${window.location.origin}/view?data=${encoded}`

    const handleClose = () => {
        navigate('/');
    }

    return (
        <>
            <ConsentView {...{data}} /> 
            <StyledModal 
                title='Share Consents' 
                isOpen={true} 
                closeModal={handleClose}
            >
                <CopyToClipboard text={shareUrl} />
            </StyledModal>
        </>
    )

}

export default ExportDataPage;