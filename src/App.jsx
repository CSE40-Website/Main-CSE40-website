import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/History/Experience";
import {Quiz} from "./components/quiz/Quiz";
import { UI } from "./components/History/UI";
import { AuthProvider } from "@asgardeo/auth-react";



function App() {
  return (

    <AuthProvider
    config={ {
      signInRedirectURL: "http://localhost:5173/quiz",
      signOutRedirectURL: "http://localhost:5173",
      clientID: "fwep5rx2SVhNXG4pZBuVpPjIWEMa",
      baseUrl: "https://api.asgardeo.io/t/mando",
      scope: [ "openid","profile" ]
    } }
>
<BrowserRouter>
      <Routes>
        <Route path="/quiz" exact={true} element={<Quiz />} />
        <Route path="/history" exact={true}
          element={<>
            <UI />
            <Loader />
            <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
              <group position-y={0}>
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </group>
            </Canvas>
          </>} 
        />
      </Routes>
    </BrowserRouter>
</AuthProvider>
    
  );
}

export default App;
