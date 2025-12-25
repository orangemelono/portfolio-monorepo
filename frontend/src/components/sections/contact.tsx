"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { useRecoilState } from "recoil";
import { contactFormLoadingState } from "@/store";

export function ContactSection() {
  const [isLoading, setIsLoading] = useRecoilState(contactFormLoadingState);

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      // In a real app, you would send the data to your backend here
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">hello@alexjohnson.dev</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Availability</h3>
                    <p className="text-muted-foreground">Open to new opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm onSubmit={handleSubmit} isLoading={isLoading} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}