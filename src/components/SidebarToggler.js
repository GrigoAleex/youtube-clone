import React from 'react'
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';

export const Container = styled.div`
    display: flex;
    margin-left: 2em;
    color: #fff;
    align-items: center; 
`;

export const Logo = styled.img`
    height: 60px;
`;

export const MenuToggler = styled(MenuIcon)`
    cursor: pointer;
`;

function SidebarToggler({toggle}) {
    const logo = "https://cdn.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark.jpg";

    return (
        <div>
            <Container>
                <MenuToggler onClick={toggle} />
                <Logo src={logo} alt="Logo" />
            </Container>
        </div>
    )
}

export default SidebarToggler
