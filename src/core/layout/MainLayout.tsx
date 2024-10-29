import { ReactNode } from "react";
import { Public } from "../templates";

interface Props {
  children: ReactNode;
}

export const MainLayout = (_props: Props) => {
  const { children } = _props;

  return (
    <main>
      <Public.Navbar />
      {children}
      <Public.Footer />
    </main>
  );
};
