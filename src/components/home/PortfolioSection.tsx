
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "An AI-powered platform that generates high-quality content for marketing and social media.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800",
    category: "ai",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB"]
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "A comprehensive analytics dashboard for e-commerce businesses to track performance metrics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    category: "data",
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Healthcare Portal",
    description: "A responsive web application for healthcare providers to manage patient data and appointments.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "Express", "PostgreSQL", "Material UI"]
  },
  {
    id: 4,
    title: "Predictive Analytics Tool",
    description: "A machine learning-based tool that predicts customer behavior and market trends.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    category: "ai",
    technologies: ["Python", "TensorFlow", "React", "Flask"]
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    description: "A complete redesign of a corporate website with modern design and improved user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard that visualizes complex data sets in an accessible way.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    category: "data",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"]
  }
];

const PortfolioSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore my recent projects and see how I've helped businesses transform their digital presence
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ai">AI Solutions</TabsTrigger>
              <TabsTrigger value="web">Web Design</TabsTrigger>
              <TabsTrigger value="data">Data Analysis</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, visibleProjects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === "ai")
                .slice(0, visibleProjects)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === "web")
                .slice(0, visibleProjects)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === "data")
                .slice(0, visibleProjects)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMore} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-all animate-scale-in h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
