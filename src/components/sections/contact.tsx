
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { submitForm, FormSubmission } from '@/services/form-submission';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submission: FormSubmission = {
      name,
      email,
      message,
    };

    try {
      await submitForm(submission);
      // Clear the form after successful submission
      setName('');
      setEmail('');
      setMessage('');
      toast({
        title: "Success!",
        description: "Your message has been sent.",
      });

    } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
        });
      console.error('Form submission failed:', error);
      // Handle error appropriately (e.g., display an error message)
    }
  };

  return (
    <section id="contact" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto border border-border shadow-md shadow-teal-500 hover:shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full btn-hover-effect">
          Send Message
        </Button>

        {/* Social Media Links Below Form */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Icons.instagram />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Icons.github />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Icons.linkedin />
          </a>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Icons.messageCircle />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;

    
