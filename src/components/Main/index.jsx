import { useEffect } from 'react';

import { useQuiz } from '../../context/QuizContext.js';
import { ScreenTypes } from '../../types/index.js';

import QuestionScreen from '../QuestionScreen/index.jsx';
import QuizDetailsScreen from '../QuizDetailsScreen/index.jsx';
import QuizTopicsScreen from '../QuizTopicsScreen/index.jsx';
import ResultScreen from '../ResultScreen/index.jsx';
import SplashScreen from '../SplashScreen/index.jsx';
import { useAuthContext } from "@asgardeo/auth-react";

function Main() {
  const { state, signIn } = useAuthContext();
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    if (state.isAuthenticated) {
      console.log(`Logged in as: ${state.username}`);
      setTimeout(() => {
        setCurrentScreen(ScreenTypes.QuizTopicsScreen);
      }, 1000);
    }
  }, [state.isAuthenticated, state.username, setCurrentScreen]);

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />;

  if (!state.isAuthenticated) {
    return (
      <div>
        <button onClick={() => signIn()} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Login
        </button>
      </div>
    );
  }

  return <>{ComponentToRender}</>;
}

export default Main;
