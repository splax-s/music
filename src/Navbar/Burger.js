import styled from 'styled-components';
import { useState } from 'react';
import RightNav2 from './RightNav2';
import React from 'react'

const StyledBurger = styled.div`
    margin-left: auto;
    width: 2rem;
    height: 1.5rem;
    top: 15px;
    right: 20px;
    display: none;
    z-index: 20;
    cursor: pointer;

    @media (max-width: 700px){
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
    }
    
    div{
        width: 1.6rem;
        height: 0.15rem;
        background-color: ${({ open }) => open ? '#db1ab1' : '#f1f1f1' };
        transform-origin: 1.5px;
        transition: all 0.1s;
        border-radius: 20px;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)' };
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${({ open }) => open ? 0 : 1 };
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)' };
        }
    }
`

const Burger = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
        <StyledBurger open = {open} onClick = {() => setOpen(!open)}> 
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <RightNav2 open = {open}></RightNav2>
        </>
    );
}
 
export default Burger;