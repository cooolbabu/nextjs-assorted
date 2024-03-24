import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

function SidebarHeader() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <SiOpenaigym className="h-10 w-10 text-primary" />
      <h2 className="text-xl forn-extrabold text-primary">
        NextJS App Brewery
      </h2>
      <ThemeToggle />
    </div>
  );
}

export default SidebarHeader;
