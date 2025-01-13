import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/History/Experience";
import { Quiz } from "./components/quiz/Quiz";
import { UI } from "./components/History/UI";
import ToggleTheme from "./components/ui/ToggleTheme";
import QuizProvider from "./context/QuizProvider";
import { GlobalStyles } from "./styles/Global";
import { themes } from "./styles/Theme";
import Main from "./components/Main/index.jsx";
import { AuthProvider } from "@asgardeo/auth-react";

function App() {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    });

    const toggleTheme = (e) => {
        const { checked } = e.target;
        setCurrentTheme(checked ? "dark" : "light");
        localStorage.setItem("theme", checked ? "dark" : "light");
    };

    const theme = currentTheme === "light" ? themes.light : themes.dark;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <QuizProvider>
                <BrowserRouter>
                    <ToggleTheme
                        onChange={toggleTheme}
                        currentTheme={currentTheme}
                        checked={currentTheme === "dark"}
                        id="toggleTheme"
                        value="theme"
                    />
                    <Routes>
                        {/*<Route path="/quiz" exact element={<Quiz />} />*/}
                        <Route
                            path="/history"
                            exact
                            element={
                                <>
                                    <UI />
                                    <Loader />
                                    <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
                                        <group position-y={0}>
                                            <Suspense fallback={null}>
                                                <Experience />
                                            </Suspense>
                                        </group>
                                    </Canvas>
                                </>
                            }
                        />
                        <Route
                            path="/quiz"
                            element={
                                <AuthProvider
                                    config={{}}
                                >
                                    <Main />
                                </AuthProvider>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </QuizProvider>
        </ThemeProvider>
    );
}

export default App;
