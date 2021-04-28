import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';


export const Container = styled.nav`
    display: flex;
    flex: .2 .6 .2;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    background: #000;
    z-index: 999;
`;

export const LeftContainer = styled.div`
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

export const SearchContainer = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Search = styled.div`
    display: flex;
    flex: .8 .2;
    border-radius: 2px;
    box-shadow: 0 0 3px -1px #fff
`;

export const SearchField = styled.input.attrs(props => ({
    type: "text",
    placeholder: "Cauta"
}))`
    background: var(--black);
    color: var(--light-grey);
    height: 30px;
    font-size: 1rem;
    padding-left: 1em;
    border: 0;
    width: 100%;
    max-width: 800px
`;

export const SearchButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--grey);
    cursor: pointer;
`;

export const SearchButton = styled(SearchIcon)`
    margin: 2px .75em 0 .75em;
    color: var(--light-grey);
`;

export const Avatar = styled.img`
    margin-left: 1em;
    width: 25px;
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    margin-right: 2em;

    * {
        cursor: pointer; 
    }

    svg {
        margin: 0 .25em;
    }
`;