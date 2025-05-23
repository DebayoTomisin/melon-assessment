import { Routes, Route, Outlet } from "react-router";
import Home from "./pages/home";
import ProductView from "./pages/product/product";
import AppLayout from "./layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <AppLayout>
            <Outlet />
          </AppLayout>
        }
      >
        <Route index element={<Home />} />
        <Route path="/:id" element={<ProductView />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
