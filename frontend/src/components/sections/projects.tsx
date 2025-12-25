"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useRecoilState } from "recoil";
import { projectsState, projectFilterState } from "@/store";
import { Project } from "@/types";

export function ProjectsSection() {
  const [projects] = useRecoilState<Project[]>(projectsState);
  const [filter, setFilter] = useRecoilState(projectFilterState);

  // Sample projects data for now
  const sampleProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      imageUrl: "/placeholder.jpg",
      projectUrl: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      createdAt: "2023-01-15",
      updatedAt: "2023-01-15",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      imageUrl: "/placeholder.jpg",
      projectUrl: "https://example.com",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "web",
      createdAt: "2023-03-22",
      updatedAt: "2023-03-22",
    },
    {
      id: "3",
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication and transaction history.",
      imageUrl: "/placeholder.jpg",
      projectUrl: "https://example.com",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redux"],
      category: "mobile",
      createdAt: "2023-06-10",
      updatedAt: "2023-06-10",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];

  const handleCategoryChange = (category: string) => {
    setFilter(prev => ({
      ...prev,
      category: category === "all" ? null : category
    }));
  };

  const filteredProjects = filter.category 
    ? sampleProjects.filter(project => project.category === filter.category) 
    : sampleProjects;

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work and personal projects that showcase my skills and expertise
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter.category === category || (category === "all" && !filter.category) ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="bg-muted aspect-video flex items-center justify-center">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}