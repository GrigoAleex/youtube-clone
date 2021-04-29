import React from 'react'
import styled from "styled-components";

export const Item = styled.li`
    padding: .5em;
    padding-left: 1.5em;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: var(--grey);
    }
`;

export const ItemIcon = styled.div`
    color: var(--light-grey);
    margin-right: 1em;
    width: 25px;
`;

export const ItemText = styled.p`
    font-size: .85rem;
    color: white;
    margin-top: -1px;
`;

function MenuItem({ Icon, text }) {
    return (
        <Item>
            <ItemIcon> <Icon /> </ItemIcon>
            <ItemText> {text} </ItemText>
        </Item>
    )
}

export default MenuItem
