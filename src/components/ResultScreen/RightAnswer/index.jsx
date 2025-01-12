import React from 'react'
import styled from 'styled-components'
import { HighlightedText } from '../../../styles/Global'

const RightAnswerContainer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-top: 15px;
  line-height: 1.2;
`

const RightAnswer = ({ correctAnswers, choices }) => {
    return (
        <RightAnswerContainer>
            {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
            {correctAnswers.map((item, index) => {
                const label = String.fromCharCode(65 + choices.indexOf(item))

                return (
                    <HighlightedText key={index} themeText>
                        {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
                    </HighlightedText>
                )
            })}
        </RightAnswerContainer>
    )
}

export default RightAnswer
