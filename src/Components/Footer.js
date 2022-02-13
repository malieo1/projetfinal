import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import iggy from '../img/iggy.png';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={iggy} alt="" />
                            <p>
                                Copyright @2021 Zahmoul <br />
                                All rights reserved.
                            </p>
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Meet the Team</a>
                            </li>
                               <li>
                                <a href="https://www.iubenda.com/terms-and-conditions/66016985">Terms of use</a>
                            </li>
                            <li>
                                <a href="https://www.iubenda.com/privacy-policy/66016985">Privacy Policy</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a >Contact us on : </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/?hl=fr">Insat Dms</a>
                            </li>
                            <li>
                                <a href="https://mail.google.com/">Email</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }
    }
`;

export default Footer
