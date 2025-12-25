import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section id="skills" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Frontend</CardTitle>
                <CardDescription>
                  Creating beautiful and responsive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Redux</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <Palette className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Backend</CardTitle>
                <CardDescription>
                  Building scalable and secure server-side applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-4" />
                <CardTitle>DevOps</CardTitle>
                <CardDescription>
                  Deployment and infrastructure management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
