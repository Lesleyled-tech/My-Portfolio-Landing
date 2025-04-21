
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Monitor } from "lucide-react";

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Generative AI Solutions",
    description: "Implementing cutting-edge AI technology to generate content, automate processes, and create innovative solutions for your business.",
    features: ["AI-powered content generation", "Machine learning integration", "Natural language processing", "Predictive analytics"]
  },
  {
    icon: <Monitor className="h-12 w-12 text-primary" />,
    title: "Web Development & Design",
    description: "Creating modern, responsive websites and applications with focus on user experience, performance, and accessibility.",
    features: ["Responsive web design", "Custom web applications", "E-commerce solutions", "Performance optimization"]
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights through advanced analytics, visualization, and reporting.",
    features: ["Data visualization", "Business intelligence", "Statistical analysis", "Custom reporting"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise to help your business succeed in the digital era
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
