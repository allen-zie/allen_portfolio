
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import './Contact.css';

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title text-primary">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to new opportunities and interesting projects.
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-input min-h-[150px]"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="contact-footer">
          <p>Based in South Africa</p>
          <p>Available for remote work worldwide</p>
        </div>
      </div>
    </section>
  );
};
