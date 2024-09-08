import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { Footer, Header } from "../../components/common";

import styles from "./mainLayout.module.scss";
const { wrapper } = styles;

const MainLayout = () => {
  const location = useLocation();

  const applyWrapperClass =
    location.pathname !== "/" && location.pathname !== "/about";

  return (
    <>
      <Header />
      <div className={applyWrapperClass ? wrapper : ""}>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
