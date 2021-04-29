import styled from "styled-components";

export const Container = styled.aside`
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${ ({isOpen}) => (isOpen ? '0' : '100%') };
    left: ${ ({isOpen}) => (isOpen ? '0' : '-100%') };
    background: rgba(0, 0, 0, .6);
    z-index: ${ ({isOpen}) => (isOpen ? '1000' : '0') };
    overflow: hidden;
    opacity: ${ ({isOpen}) => (isOpen ? '100%' : '0%') };
    transition: .2s left ease-in-out;
    transtion: .2s opacity ease;
`;

export const Background = styled.div` 
    background: #000;
    height: 100vh;
    width: 20%;
    min-width: 300px;
    flex-direction: column;    
`;

export const Menu = styled.ul`
    margin-right: 2em;
    padding: .5em 0;
    border-bottom: 1px solid var(--grey);
    list-style: none;
`;
