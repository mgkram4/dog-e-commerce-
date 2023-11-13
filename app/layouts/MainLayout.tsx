"use client";
import TopMenu from "./TopMenu";
import MainHeader from "./MainHeader";
import SubMenu from "./SubMenu";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", function () {
      let res = localStorage.getItem("isLoading");
      res === "false" ? setIsLoading(false) : setIsLoading(true);
    });
  });
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
