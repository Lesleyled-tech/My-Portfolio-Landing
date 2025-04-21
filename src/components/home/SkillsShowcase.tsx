
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillsData: Skill[] = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Generative AI", level: 90 },
      { name: "Natural Language Processing", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "AI Integration", level: 85 }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS/JavaScript", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Design", level: 85 }
    ]
  },
  {
    category: "Data Analysis",
    skills: [
      { name: "Data Visualization", level: 85 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Business Intelligence", level: 85 },
      { name: "Data Modeling", level: 75 }
    ]
  }
];

const SkillsShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A detailed breakdown of my expertise in different technology domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-lg transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
