import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
        <p className="text-lg text-foreground/80 mb-12">
          I'm always open to new opportunities and interesting projects.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 text-left">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/10"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/80">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px] bg-secondary/10"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-foreground/60">
          <p>Based in South Africa</p>
          <p>Available for remote work worldwide</p>
        </div>
      </div>
    </section>
  );
};