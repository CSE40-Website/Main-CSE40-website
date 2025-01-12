import React from 'react';
import styled from 'styled-components';

import { Flex } from '../../../styles/Global.js';
import { addLeadingZero, formatTime } from '../../../utils/helpers.js';

import Counter from './Counter';

const ActiveQuestionNo = styled.span`
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.themeColor};
`;

const TotalQuestionNo = styled.span`
    font-size: clamp(20px, 5vw, 30px);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkerGray};
`;

const QuizHeader = ({ activeQuestion, totalQuestions, timer }) => {
    return (
        <Flex spaceBetween gap="6px">
            <div>
                <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo>
                <TotalQuestionNo>/{addLeadingZero(totalQuestions)}</TotalQuestionNo>
            </div>
            <Flex>
                <Counter time={`${formatTime(timer)}`} />
            </Flex>
        </Flex>
    );
};

export default QuizHeader;