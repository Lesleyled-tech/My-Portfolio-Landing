
import { Button } from "@/components/ui/button";

const skills = [
  "JavaScript/TypeScript", "React", "Node.js", "Python",
  "TensorFlow", "Data Visualization", "UX/UI Design", "Responsive Design",
  "SEO Optimization", "Machine Learning", "SQL/NoSQL", "API Development",
  "Cloud Services", "Git/GitHub", "Business Intelligence", "Project Management"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur-xl opacity-75"></div>
              <div className="relative glass-card rounded-xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800" 
                  alt="Lesley Ledwaba"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg">
              I'm a passionate developer specializing in generative AI, web design, and data analysis. With years of experience in the tech industry, I've helped businesses of all sizes transform their digital presence and leverage cutting-edge technology to achieve their goals.
            </p>
            
            <p className="text-lg">
              My approach combines technical expertise with a deep understanding of business needs, resulting in solutions that are not just technically sound but also aligned with your business objectives.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
