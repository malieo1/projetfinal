import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ChartStats from './ChartStats';
import chart from '../img/chart.svg';
import AnimatedButton from './AnimatedButton';
import { Bounce, Roll } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={' Your Balance'} amount={'250DT'} />
                                <ChartStats name={'Last Effectuated Transaction'} amount={'1,000DT'} />
                            </div>
                            <img src={chart} alt="ken mjetech" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finances like a pro : see your spendings and savings in a more visual approche
                        </h2>
                        <Roll right>
                        <p>
                          Visualisation will help you get better understanding in your finances, thus, better management !
                        </p>
                        </Roll>
                        <Bounce right>
                            <AnimatedButton name={'More In Depth Explanation'} />
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 130px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 50%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            padding-left: 1rem;
            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default ChartSection
