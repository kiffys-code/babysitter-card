import ConsentView from "components/ConsentView";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import StyledModal from "components/StyledModal";
import { themeDefaultValues } from "config/themes";
import html2canvas from "html2canvas";
import { rootNode } from "index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;
`

const PrimaryShareButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: ${themeDefaultValues.globalColors.primary};
    padding: 1rem 0.5rem;
    border-radius: 10px;
    font-size: 1rem;
    text-align: left;
    font-weight: bold;
`

const OtherShareButton = styled(PrimaryShareButton)`
    background-color: ${themeDefaultValues.globalColors.secondary};
    width: 75%;
    padding: 0.75rem 0.5rem;
    font-size: 0.90rem;
    font-weight: normal;
`

const ExportDataView = ({data}) => {

    // const [encoded, setEncoded] = useState();
    const navigate = useNavigate();

    // useEffect(() => {
    //     (async () => {
    //         setEncoded(await encode({...data, shareDate: new Date() }))
    //     })().catch(e => console.error('could not compress data'))
    // }, [data])

    // const shareUrl = `${window.location.origin}/#/view?data=${encoded}`

    const handleClose = () => {
        navigate('/');
    }

    const onPrintClick = () => {
        handleClose();
        setTimeout(() => {
            window.print();
        }, 1)
    }

    const onImageShareClick = () => {
        setTimeout(() => {
            html2canvas(rootNode, {
                scrollX: 0,
                scrollY: 0,
                backgroundColor: themeDefaultValues.background,
                height: document.body.scrollHeight,
                width: window.visualViewport.width,
                ignoreElements: elem => elem.className.includes('BaseModalBackground') // ignore the modal and its screen-eating overlay c:
            })
            .then((canvas) => {
                const link = document.createElement('a')
                link.download = `${data.name}-${new Date().toISOString()}-consents.png`
                link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
        }, 1)
    }

    return (
        <>
            <ConsentView {...{data}} /> 
            <StyledModal 
                title='Share Consents' 
                isOpen={true} 
                closeModal={handleClose}
            >
                <Container>
                    {/* <CopyToClipboard text={shareUrl} /> */}
                    <PrimaryShareButton onClick={onImageShareClick}>
                        <Icon src={require('assets/img/insert-picture-icon.png')} alt='download screenshot' />
                        <div className="text">Download Screenshot</div>
                    </PrimaryShareButton>
                    <OtherShareButton onClick={onPrintClick}>
                        <Icon src={require('assets/img/printing.png')} alt='print' /> 
                        <div className="text">Print to PDF</div>
                    </OtherShareButton>
                </Container>

            </StyledModal>
        </>
    )

}

export default ExportDataView;