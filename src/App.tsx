import { useRef } from "react";
import AppRouter from "./router";
import { ReactLenis } from "lenis/react";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import QueryProvider from "./services/query-provider";

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
        <QueryProvider>
          <BrowserRouter>
            <Toaster position="top-right" expand={false} />
            <AppRouter />
          </BrowserRouter>
        </QueryProvider>
      </ReactLenis>
    </>
  );
}

export default App;
