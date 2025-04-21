
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className="text-2xl md:text-3xl font-display font-bold 
                bg-gradient-to-r from-primary via-accent to-primary 
                bg-clip-text text-transparent 
                hover:from-accent hover:via-primary hover:to-accent 
                transition-colors duration-300"
            >
              Lesley Ledwaba
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/#services" className="font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/#portfolio" className="font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/#about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/#contact">
              <Button>Contact Me</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#services" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#portfolio" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/#about" 
              className="block font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#contact" 
              className="block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full">Contact Me</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
