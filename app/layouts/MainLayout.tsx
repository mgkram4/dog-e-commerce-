"use client";
import TopMenu from "./TopMenu";
import MainHeader from "./MainHeader";

export default function MainLayout({ children }) {
  return (
    <div id="MainLayout">
      <div>
        <TopMenu />
        <MainHeader />
      </div>
    </div>
  );
}
