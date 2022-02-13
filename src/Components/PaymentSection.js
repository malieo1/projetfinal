import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading"> Banking made easy <span>You choose your starting price </span></h3>
                <p className="c-para">Discover our free services and level up to a premium plan </p>
                <div className="card-con">
                    <Card 
                    account={'Free'}
                    amount={'0DT'}
                    text={'For casual users to try our services'}
                    button={'Explore Our World'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals with no additional fees up to 200DT'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                    
                    <Card 
                    account={'Premium'}
                    amount={'10DT'}
                    text={'For business owners and daily users'}
                    button={'Get Yours Now'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkDis={checkDisabled}
                    text1={'10 free local transfers'}
                    text2={'Free ATM withdrawals with no additional fees up to 200DT'}
                    text3={'Free payments to other Draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default PaymentSection;
