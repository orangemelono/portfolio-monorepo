"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know me better - my background, experience, and what drives me as a developer
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience creating 
                digital solutions. My journey started with a Computer Science degree and evolved 
                through various roles in tech companies where I honed my skills.
              </p>
              <p>
                I specialize in modern JavaScript frameworks and have a keen eye for creating 
                user-friendly interfaces. My approach combines technical excellence with 
                creative problem-solving.
              </p>
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
              <CardTitle>What I Do</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Develop responsive web applications using React, Next.js, and TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Build robust backend services with Node.js, NestJS, and databases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Implement modern deployment strategies with Docker and cloud platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Create intuitive UI/UX designs with Tailwind CSS and Figma</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h4 className="text-lg font-semibold">Master of Computer Science</h4>
                  <p className="text-muted-foreground">Stanford University</p>
                  <p className="text-sm text-muted-foreground">2015 - 2017</p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">Graduated</Badge>
              </div>
              <p className="mt-4">
                Specialized in Human-Computer Interaction and Software Engineering. 
                Thesis on "Modern Web Frameworks for Enhanced User Experience".
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}