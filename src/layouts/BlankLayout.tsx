import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BlankLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default BlankLayout;
