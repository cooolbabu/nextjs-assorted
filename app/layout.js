import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { FaBarsStaggered } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assorted Nextjs Apps and Components",
  description: "This is a collection of assorted Nextjs apps and components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="drawer lg:drawer-open">
          <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-2"
              className="drawer-button lg:hidden fixed top-6 right-6"
            >
              <FaBarsStaggered className="w-8 h-8 text-primary" />
            </label>
            <div className="flex flex-col px-8 py-2 min-h-screen">
              <header>Assorted Nextjs Apps and Components</header>
              <main className="grow py-2">{children}</main>
              <footer className="border-t py-2 text-center text-xs">
                © 2021 Assorted Nextjs Apps and Components
              </footer>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <SideBar />
          </div>
        </div>
      </body>
    </html>
  );
}
