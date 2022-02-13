import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <ul>
                <li>
                    <a href=""> welcome ^-^</a>
                </li>
                <li>
                    <a href="">Features offred</a>
                </li>
                <li>
                    <a href="">Price range</a>
                </li>
            </ul>
            <PrimaryButton name={'log in'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
