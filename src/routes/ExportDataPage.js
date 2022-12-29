import ConsentView from "components/ConsentView";
import CopyToClipboard from "components/CopyToClipboard";
import StyledModal from "components/StyledModal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { encode } from "util/data-utils";

const ExportDataPage = () => {

    const navigate = useNavigate();
    const {data} = useLoaderData();
    const encoded = encode({...data, shareDate: new Date() });
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