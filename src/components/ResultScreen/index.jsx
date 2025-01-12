import React from 'react';
import styled, { css } from 'styled-components';

import { Refresh } from '../../config/icons.js';
import { useQuiz } from '../../context/QuizContext';
import { device } from '../../styles/BreakPoints.js';
import { Flex, LogoContainer, ResizableBox } from '../../styles/Global.js';
import { refreshPage } from '../../utils/helpers.js';

import Button from '../ui/Button/index.jsx';
import CodeSnippet from '../ui/CodeSnippet/index.jsx';
import QuizImage from '../ui/QuizImage/index.jsx';
import ResultOverview from './ResultOverview';
import RightAnswer from './RightAnswer';

const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`;

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`;

const QuestionNumber = styled.h6`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const QuestionStyle = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`;

const Answer = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 90%;
  @media ${device.md} {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.answerBg};
  border-radius: 16px;
  font-size: clamp(16px, 5vw, 18px);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);

  ${({ correct }) =>
    correct &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successLight};
    `}

  ${({ wrong }) =>
    wrong &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerLight};
    `}

  span {
    margin-right: 14px;
  }

  @media ${device.md} {
    font-weight: 400;
  }
`;

const Score = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${({ right, theme }) =>
    right ? `${theme.colors.success}` : `${theme.colors.danger}`};
  margin-top: 4px;
  @media ${device.md} {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const ResultScreen = () => {
  const { result } = useQuiz();

  const onClickRetry = () => {
    refreshPage();
  };

  return (
    <ResultScreenContainer>
      <LogoContainer>
      </LogoContainer>
      <InnerContainer>
        <ResultOverview result={result} />
        {result.map(
          (
            {
              question,
              choices,
              code,
              image,
              correctAnswers,
              selectedAnswer,
              score,
              isMatch,
            },
            index
          ) => {
            return (
              <QuestionContainer key={question}>
                <ResizableBox width="90%">
                  <Flex gap="4px">
                    <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                    <QuestionStyle>{question}</QuestionStyle>
                  </Flex>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>
                      {choices.map((ans, index) => {
                        const label = String.fromCharCode(65 + index);
                        const correct =
                          selectedAnswer.includes(ans) && correctAnswers.includes(ans);
                        const wrong =
                          selectedAnswer.includes(ans) && !correctAnswers.includes(ans);

                        return (
                          <Answer key={ans} correct={correct} wrong={wrong}>
                            <span>{label}.</span>
                            {ans}
                          </Answer>
                        );
                      })}
                    </ul>
                    {!isMatch && (
                      <RightAnswer correctAnswers={correctAnswers} choices={choices} />
                    )}
                  </div>
                </ResizableBox>
                <Score right={isMatch}>{`Score ${isMatch ? score : 0}`}</Score>
              </QuestionContainer>
            );
          }
        )}
      </InnerContainer>
      <Flex flxEnd>
        <Button
          text="RETRY"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </Flex>
    </ResultScreenContainer>
  );
};

export default ResultScreen;