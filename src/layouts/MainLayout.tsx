import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-zinc-700 p-4 text-white">
        <h1>My App</h1>
      </header>

      {/* Main Content */}
      <main className="grow p-4">{children}</main>

      {/* Footer */}
      <footer className="mt-4 bg-zinc-700 p-2 text-white">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
