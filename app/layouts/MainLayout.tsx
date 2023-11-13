"use client";
import { ReactNode, useEffect, useState } from "react";
import Loading from "../Components/Loading";
import TopMenu from "./TopMenu";
import MainHeader from "./MainHeader";
import SubMenu from "./SubMenu";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", function () {
      let res = localStorage.getItem("isLoading");
      res === "false" ? setIsLoading(false) : setIsLoading(true);
    });
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div id="MainLayout">
      <div>
        {isLoading ? <Loading /> : <div></div>}
        <TopMenu />
        <MainHeader />
        <SubMenu />

        {children}

        <Footer />
      </div>
    </div>
  );
}
