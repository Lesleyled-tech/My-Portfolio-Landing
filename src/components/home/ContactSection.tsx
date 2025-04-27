import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Twitter, TiktokIcon } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/Less_Ledwaba",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@less_ledwaba",
      icon: <TiktokIcon className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: null  // We'll update this later
    },
    {
      name: "GitHub",
      url: "#",
      icon: null  // We'll update this later
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss how we can work together? Drop me a message!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">lesley@moov.life</p>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">South Africa</p>
                </div>
                <div>
                  <p className="font-medium">Follow Me</p>
                  <div className="flex gap-4 mt-2">
                    {socialLinks.map((link) => (
                      link.icon && (
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
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground">
                Currently available for freelance projects, consulting, and collaboration opportunities.
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border animate-fade-in">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
