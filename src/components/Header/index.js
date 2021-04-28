import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { 
    Container, 
    LeftContainer,
    MenuToggler,
    Logo,
    Search,
    SearchContainer,
    SearchField,
    SearchButtonContainer,
    SearchButton,
    RightContainer,
    Avatar,
}from "./header.elements.js";

require('dotenv').config();


function Header() {
    const logo = "https://cdn.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark.jpg";
    const avatar = "https://eu.ui-avatars.com/api/?name=John+Doe"
   
    return (
        <Container>
            <LeftContainer>
                <MenuToggler />
                <Logo src={logo} alt="Logo" />
            </LeftContainer>
            <SearchContainer>
                <Search>
                    <SearchField type="text" />
                    <SearchButtonContainer><SearchButton /></SearchButtonContainer>
                </Search>
            </SearchContainer>
            <RightContainer>
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt="Sonny" src={avatar} />
            </RightContainer>
        </Container>
    )
}

export default Header
