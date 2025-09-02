import ToggleSwitchV2 from "@/components/ToggleSwitch/ToggleSwitchV2";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SecondaryLayout: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-sky-700 p-4 text-white">
        <h1>Secondary Layout</h1>

        <ToggleSwitchV2 />
      </header>

      {/* Main Content */}
      <main className="grow p-4">{children}</main>

      {/* Footer */}
      <footer className="mt-4 bg-sky-700 p-2 text-white">
        <p>&copy; 2025 Another Layout Footer</p>
      </footer>
    </div>
  );
};

export default SecondaryLayout;
