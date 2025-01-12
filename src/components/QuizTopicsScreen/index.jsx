import React from 'react';
import styled from 'styled-components';

import { useQuiz } from '../../context/QuizContext';
import { quizTopics } from '../../data/quizTopics';
import { device } from '../../styles/BreakPoints.js';
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global.js';
import { ScreenTypes } from '../../types/index.js';

import Button from '../ui/Button/index.jsx';

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`;

const SelectButton = styled.div`
  background-color: ${({ disabled, theme }) =>
      disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
      active
          ? `2px solid ${theme.colors.themeColor}`
          : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`;

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`;

const QuizTopicsScreen = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz();

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen);
  };

  return (
      <PageCenter light justifyCenter>
        <CenterCardContainer>
          <LogoContainer>
          </LogoContainer>
          <Heading>
            WELCOME TO <HighlightedText> XEVEN QUIZ</HighlightedText>
          </Heading>
          <DetailText>Select topic below to start your Quiz.</DetailText>
          <SelectButtonContainer>
            {quizTopics.map(({ title, icon, disabled }) => (
                <SelectButton
                    key={title}
                    active={quizTopic === title}
                    onClick={() => !disabled && selectQuizTopic(title)}
                    disabled={disabled}
                >
                  {icon}
                  <SelectButtonText>{title}</SelectButtonText>
                </SelectButton>
            ))}
          </SelectButtonContainer>
          <Button text="Continue" onClick={goToQuizDetailsScreen} bold />
        </CenterCardContainer>
      </PageCenter>
  );
};

export default QuizTopicsScreen;