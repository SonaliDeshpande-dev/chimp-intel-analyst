
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} ChimpIntel. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/privacy" className="text-sm font-medium hover:underline">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm font-medium hover:underline">
            Terms
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
