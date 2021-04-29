import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SidebarToggler from "../SidebarToggler.js";
import { 
    Container, 
    Search,
    SearchContainer,
    SearchField,
    SearchButtonContainer,
    SearchButton,
    RightContainer,
    Avatar,
}from "./header.elements.js";

function Header({ toggleSidebar }) {
    const avatar = "https://eu.ui-avatars.com/api/?name=John+Doe"

    return (
        <Container>
            <SidebarToggler toggle={toggleSidebar}/>
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
