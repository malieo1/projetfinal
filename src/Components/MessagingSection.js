import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            Our Site covers so many diffrent countries
                        </h2>
                        <p className="m-para">
                           Need to send money to some you love but the transaction is a hassel ? look no futher, we have the solution !
                        </p>
                        <div className="images-con">
                            <img src={avatar1} alt="t3ebt" className="image-1" />
                            <img src={avatar2} alt="oh" className="image-2" />
                            <img src={avatar3} alt="wa" className="image-3" />
                            <p>&nbsp; +25 operators that can help you </p>
                        </div>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={messaging} alt="dd" />
                        <img src={bgCircles} alt="20qs" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }


    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default MessagingSection;
