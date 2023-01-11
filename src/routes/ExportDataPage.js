import ConsentView from "components/ConsentView";
import CopyToClipboard from "components/CopyToClipboard";
import StyledModal from "components/StyledModal";
import { useLoaderData, useNavigate } from "react-router-dom";
import { encode } from "util/data-utils";
import {useState, useEffect} from 'react';
import styled from "styled-components";
import { toPng } from 'html-to-image';
import { themeDefaultValues } from "config/themes";
import { rootNode } from "index";

const PrintInstead = styled.div`
    margin-top: 2rem;
    text-align: center;
    text-decoration: underline;
    font-style: italic;
`

const ExportDataPage = () => {

    const [encoded, setEncoded] = useState();
    const navigate = useNavigate();
    const {data} = useLoaderData();

    useEffect(() => {
        (async () => {
            setEncoded(await encode({...data, shareDate: new Date() }))
        })().catch(e => console.error('could not compress data'))
    }, [data])

    const shareUrl = `${window.location.origin}/#/view?data=${encoded}`

    const handleClose = () => {
        navigate('/');
    }

    const onPrintClick = () => {
        handleClose();
        setTimeout(() => {
            window.print();
        }, 300)
    }

    const onImageShareClick = () => {
        handleClose();
        setTimeout(() => {
            toPng(rootNode, { 
                cacheBust: true, 
                backgroundColor: themeDefaultValues.background,
                height: document.body.scrollHeight,
                width: window.visualViewport.width
            })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
        }, 300)
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
                <PrintInstead onClick={onPrintClick}>(Or print instead)</PrintInstead>
                <PrintInstead onClick={onImageShareClick}>(Or image instead)</PrintInstead>

            </StyledModal>
        </>
    )

}

export default ExportDataPage;