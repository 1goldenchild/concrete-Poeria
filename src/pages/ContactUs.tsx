
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const phoneNumber = "309-245-7421";
  const emailAddress = "support@peoriaconcreteco.com";
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Peoria Concrete Co. | Expert Concrete Services</title>
        <meta
          name="description"
          content="Get in touch with Peoria Concrete Co. for all your concrete needs. Call us at 309-245-7421 or email support@peoriaconcreteco.com for a free estimate."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-concrete-dark py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-hero-pattern opacity-70"
          style={{ 
            backgroundImage: `url('/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white mb-8">
              Get in touch with the concrete experts in Peoria, IL
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="animate-fade-in opacity-0 [animation-delay:300ms]">
            <h2 className="text-3xl font-bold mb-8 text-concrete-dark">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-accent-blue p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <button 
                        onClick={handleCallClick}
                        className="text-accent-blue hover:underline font-medium"
                      >
                        {phoneNumber}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-accent-blue p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <button
                        onClick={handleEmailClick}
                        className="text-accent-blue hover:underline font-medium break-all"
                      >
                        {emailAddress}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transform transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-accent-blue p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Service Area</h3>
                      <p>
                        Peoria, IL and surrounding areas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in opacity-0 [animation-delay:500ms]">
            <Card className="shadow-lg">
              <CardHeader className="bg-accent-blue text-white rounded-t-lg">
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      {...register("name", { required: true })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-sm">Please enter your name</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      {...register("email", { 
                        required: true, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                      })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm">Please enter a valid email address</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(123) 456-7890" 
                      {...register("phone")}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select 
                      id="service"
                      {...register("service")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="concrete-driveway">Concrete Driveway</option>
                      <option value="concrete-patio">Concrete Patio</option>
                      <option value="stamped-concrete">Stamped Concrete</option>
                      <option value="concrete-repair">Concrete Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      className="min-h-[120px]"
                      {...register("message", { required: true })}
                    />
                    {errors.message && <p className="text-red-500 text-sm">Please enter your message</p>}
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent-blue hover:bg-accent-blue/90">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 animate-fade-in opacity-0 [animation-delay:700ms]">
          <h2 className="text-3xl font-bold mb-6 text-concrete-dark text-center">Our Service Area</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193448.45115159842!2d-89.78745021896188!3d40.74812128718294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a595c535879ad%3A0xcafbf4326b7d80db!2sPeoria%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1742983631421!5m2!1sen!2sma" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peoria Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
