import { useRef } from "react";
import AppRouter from "./router";
import { ReactLenis } from "lenis/react";
import { BrowserRouter } from "react-router";

function App() {
  const lenisRef = useRef(null);
  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          smoothWheel: true,
          lerp: 0.1,
        }}
        ref={lenisRef}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ReactLenis>
    </>
  );
}

export default App;
