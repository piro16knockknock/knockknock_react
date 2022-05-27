import { Outlet } from "react-router-dom";
import Header from "components/layout/header";

const LayoutContainer = () => {
  return (
    <>
      <Header />
      <main className="layout">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutContainer;
