import { useEffect } from 'react';

import { useQuiz } from '../../context/QuizContext.js';
import { ScreenTypes } from '../../types/index.js';

import QuestionScreen from '../QuestionScreen/index.jsx';
import QuizDetailsScreen from '../QuizDetailsScreen/index.jsx';
import QuizTopicsScreen from '../QuizTopicsScreen/index.jsx';
import ResultScreen from '../ResultScreen/index.jsx';
import SplashScreen from '../SplashScreen/index.jsx';

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen);
    }, 1000);
  }, [setCurrentScreen]);

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />;

  return <>{ComponentToRender}</>;
}

export default Main;
