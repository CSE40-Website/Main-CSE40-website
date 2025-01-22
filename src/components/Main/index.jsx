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
  const { state, signIn, signOut } = useAuthContext();
  const { currentScreen, setCurrentScreen } = useQuiz();

  // useEffect(() => {
  //   if (state.isAuthenticated) {
  //     console.log(state)
  //     console.log(`Logged in as: ${state.username}`);
  //     setTimeout(() => {
  //       setCurrentScreen(ScreenTypes.QuizTopicsScreen);
  //     }, 1000);
  //   }else{
  //     signIn().then(r => console.log(r)).catch(e => console.log(e));
  //
  //   }
  // }, [state.isAuthenticated]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen);
    }, 1000);
  },[])



  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />;
  return <>
    {ComponentToRender}
  </>
  // return <>
  //   {state.isAuthenticated?
  //       ComponentToRender:
  //       <>
  //       </>
  //   }
  //
  // </>;
}

export default Main;
