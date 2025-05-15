import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-zinc-700 p-4 text-white">
        <h1>My App</h1>
      </header>

      {/* Main Content */}
      <main className="grow p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-700 p-2 text-white mt-4">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
