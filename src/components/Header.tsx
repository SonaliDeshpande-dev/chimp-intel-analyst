
import { FileUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <FileUpIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ChimpIntel</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:underline">
            Dashboard
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" size="sm">
            <Link to="/upload">Upload Data</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
