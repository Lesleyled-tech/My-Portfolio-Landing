
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Lesley completely transformed our online presence with a modern website that perfectly represents our brand. The AI integration has streamlined our customer service process.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Enterprises"
  },
  {
    id: 2,
    quote: "The data analysis dashboard Lesley created has given us insights we never had before. It's revolutionized how we make business decisions.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "GlobalMarket Solutions"
  },
  {
    id: 3,
    quote: "Working with Lesley was a fantastic experience. The attention to detail and technical knowledge is impressive. Highly recommended for any web development project.",
    author: "David Williams",
    role: "Founder",
    company: "Innovate Digital"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What clients are saying about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  testimonial, 
  index 
}: { 
  testimonial: Testimonial; 
  index: number;
}) => {
  return (
    <Card 
      className="border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all animate-fade-in" 
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-6 space-y-4">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary/20"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        
        <p className="text-foreground">{testimonial.quote}</p>
        
        <div className="pt-4">
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
