import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarToggler from "../SidebarToggler.js";
import MenuItem from "./MenuItem.js";
import {
    Container,
    Background,
    Menu
} from "./sidebar.elements.js"

function Sidebar({ isOpen, toggle }) {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Background isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <SidebarToggler toggle={toggle}/>
                <hr/>
                <Menu>
                    <MenuItem Icon={HomeIcon} text="acasa"/>
                    <MenuItem Icon={ExploreIcon} text="Explorează"/>
                    <MenuItem Icon={SubscriptionsIcon} text="Abonamente"/>
                </Menu>
                <Menu>
                    <MenuItem Icon={VideoLibraryIcon} text="Bibliotecă"/>
                    <MenuItem Icon={HistoryIcon} text="Istoric"/>
                    <MenuItem Icon={MusicVideoIcon} text="Videoclipurile tale"/>
                    <MenuItem Icon={WatchLaterIcon} text="Vizionează mai târziu"/>
                    <MenuItem Icon={ThumbUpIcon} text="Clipuri apreciate"/>
                    <MenuItem Icon={ExpandMoreIcon} text="Arată mai mult"/>
                </Menu>
            </Background>
        </Container>
    )
}

export default Sidebar
