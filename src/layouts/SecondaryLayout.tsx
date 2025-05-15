import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const SecondaryLayout: React.FC<Props> = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-sky-700 p-4 text-white flex justify-between items-center">
        <h1>Secondary Layout</h1>
        <ToggleSwitch />
      </header>

      {/* Main Content */}
      <main className="grow p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-sky-700 p-2 text-white mt-4">
        <p>&copy; 2025 Another Layout Footer</p>
      </footer>
    </div>
  );
};

export default SecondaryLayout;
