import { FC } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-[90%] max-w-6xl mx-auto p-5 my-8">{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
