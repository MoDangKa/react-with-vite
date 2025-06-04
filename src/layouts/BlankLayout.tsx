import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const BlankLayout: FC<Props> = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
};

export default BlankLayout;
