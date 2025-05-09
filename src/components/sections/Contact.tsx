
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import './Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (formRef.current) {
      emailjs.sendForm(
        'service_xg0rp8g', // Replace with your EmailJS service ID
        'template_lv8alcb', // Replace with your EmailJS template ID
        formRef.current,
        'GQgPvsSv30zTGZ8BX' // Replace with your EmailJS public key
      )
        .then((result) => {
          console.log('SUCCESS!', result.text);
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          
          // Reset form
          setEmail("");
          setName("");
          setMessage("");
        }, (error) => {
          console.log('FAILED...', error.text);
          toast({
            title: "Failed to send message",
            description: "There was an error sending your message. Please try again.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title text-primary">Get In Touch</h2>
        <p className="contact-description">
          Let's work together and produce something AI can't do yet!.
        </p>
        
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Input
              id="name"
              name="user_name" // This matches EmailJS template parameter
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Input
              id="email"
              name="user_email" // This matches EmailJS template parameter
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
              name="message" // This matches EmailJS template parameter
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-input min-h-[150px]"
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Mail className="mr-2" /> Send Message
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
