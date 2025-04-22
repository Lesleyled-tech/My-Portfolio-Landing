
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/Less_Ledwaba?t=VOSMAXe_5Pq10MnDDyrLlw&s=09",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1BqDzCPSCP/",
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/less_ledwaba?igsh=MWp3djYwaXJ4b3Z4cw==",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "WhatsApp",
      url: "https://whatsapp.com/dl/+27787836188",
      icon: <Facebook className="w-5 h-5" /> // Using Facebook icon temporarily as WhatsApp isn't in allowed icons
    }
  ];
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-display font-bold text-primary">
              Lesley Ledwaba
            </Link>
            <p className="mt-4 text-muted-foreground">
              Specializing in generative AI, web design, and data analysis solutions for businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visit ${link.name} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Lesley Ledwaba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
