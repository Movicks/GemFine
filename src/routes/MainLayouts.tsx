import {} from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../components/header/PageHeader";

const MainLayouts = () => {
  return (
    <main className="h-full w-full">
      <PageHeader title="Victor MovicX" />
      <div className="h-full px-2 w-full pb-[2rem]">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayouts;
