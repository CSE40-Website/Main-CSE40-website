import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/History/Experience";
import { UI } from "./components/History/UI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
  );
}

export default App;
