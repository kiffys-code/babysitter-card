import Icon from "components/shared/Icon";
import RoundedButton from "components/shared/RoundedButton";
// import { CircleMenu } from "react-circular-menu";
// import { CircleMenuItem } from "react-circular-menu/dist/CircleMenuItem/CircleMenuItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { useState } = require("react")

const Container = styled.div`
    z-index: 999;
    & .circle-menu ul li .invisible {
        opacity: 0;
    }
`

const HamburgerMenuButton = styled(RoundedButton)`
    position: relative;
    
    ${({show}) => show ? `
        filter: brightness(0.6) blur(1px);
        &:before {
            position: absolute;
            top: -1;
            left: -1;
            content: 'asdf';
            z-index: 998;
            height: 200vh;
            width: 200vw;
            background-color: rgba(0, 0, 0, 0.60);
        }
    ` : ``}

`

const HamburgerMenuToggle = ({show, onClick}) => {
    return (
        <HamburgerMenuButton show={show} onClick={onClick} >
            <Icon src={require('assets/img/burger-bar.png')} alt='menu' />
        </HamburgerMenuButton>
    )
}

const HamburgerMenu = () => {

    const [show, setShow] = useState(false);

    return (
        <Container>
            {/* Workaround to prevent clicking too soon on 
                last item as it rolls up */}
            {/* <CircleMenu
                startAngle={15}
                rotationAngle={120}
                itemSize={2} // dimension, not child count
                radius={5}
                onMenuToggle={menuActive => setShow(menuActive)}
                menuToggleElement={<HamburgerMenuToggle show={show} />}
                className='circle-menu'
            >
                <CircleMenuItem tooltip="Change">
                    <Link to='/change'>
                        <RoundedButton as='div'>
                            <Icon src={require('assets/img/crayon.png')} alt='Change' />
                        </RoundedButton>
                    </Link>
                </CircleMenuItem>
                <CircleMenuItem tooltip="Share">
                    <Link to='/export'>
                        <RoundedButton as='div'>
                            <Icon src={require('assets/img/share.png')} alt='Share' />
                        </RoundedButton>
                    </Link>
                </CircleMenuItem>
                <div className='invisible' />
            </CircleMenu> */}
        </Container>
    )
}

export default HamburgerMenu;