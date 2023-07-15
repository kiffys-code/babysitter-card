import Icon from "components/shared/Icon";
import RoundedButton from "components/shared/RoundedButton";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { Link, useLocation } from "react-router-dom";
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

    const location = useLocation();

    if ( location.pathname === "/" || location.pathname === "/export" ) {
        return (
            <HamburgerMenuButton show={show} onClick={onClick} >
                <Icon src={require('assets/img/burger-bar.png')} alt='menu' />
            </HamburgerMenuButton>
        )
    } else {
        return (
            <Link to='/' >
                <RoundedButton as='div'>
                    <Icon src={require('assets/img/home.png')} alt='Home' />
                </RoundedButton>
            </Link>
        )
        
    }
}

const HamburgerMenu = () => {

    const [show, setShow] = useState(false);

    const close = () => {
        setShow(false);
    }

    return (
        <Container>
            <CircleMenu
                startAngle={15}
                rotationAngle={120}
                itemSize={2} // dimension, not child count
                radius={5}
                onMenuToggle={menuActive => setShow(menuActive)}
                menuToggleElement={<HamburgerMenuToggle show={show} />}
                className='circle-menu'
                open={show}
            >
                <CircleMenuItem tooltip="Change">
                    <Link to='/change' onClick={close}>
                        <RoundedButton as='div'>
                            <Icon src={require('assets/img/crayon.png')} alt='Change' />
                        </RoundedButton>
                    </Link>
                </CircleMenuItem>
                <CircleMenuItem tooltip="Share">
                    <Link to='/export' onClick={close}>
                        <RoundedButton as='div'>
                            <Icon src={require('assets/img/share.png')} alt='Share' />
                        </RoundedButton>
                    </Link>
                </CircleMenuItem>
                {/* Workaround to prevent clicking too soon on 
                last item as it rolls up */}
                <div className='invisible' />
            </CircleMenu>
        </Container>
    )
}

export default HamburgerMenu;