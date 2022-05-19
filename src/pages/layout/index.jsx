import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/layout/header";

const LayoutContainer = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutContainer;
