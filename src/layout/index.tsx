import { type ReactNode } from "react";
import Footer from "./footer";
import Heading from "./heading";
import useMeasure from "react-use-measure";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [ref, { height }] = useMeasure();
  return (
    <main className="min-h-screen max-w-7xl mx-auto relative flex flex-col">
      <div className="fixed w-full left-0 top-0">
        <Heading ref={ref} />
      </div>
      <div className="h-full flex-grow" style={{ marginTop: height + 20 }}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AppLayout;
