import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NormalIL = () => {
  const handleCallNow = () => {
    window.location.href = "tel:3092457421";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Concrete Contractors - Stamped Company - Normal, IL</title>
        <meta 
          name="description" 
          content="Top-rated concrete contractors in Normal, IL! Our concrete company delivers quality driveways, patios, and stamped designs. Call 309-245-7421 today!" 
        />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Normal, IL</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <Link to="/" className="hover:text-primary/90">Concrete Company</Link> and Concrete Contractors in Normal, IL
              </h1>
              <p className="text-lg mb-8">
                We offer comprehensive <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">concrete driveway</Link> and <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link> solutions in Normal, IL. Our team specializes in beautiful <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">stamped concrete</Link> designs and professional <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">concrete repair</Link>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2" onClick={handleCallNow}>
                  <Phone className="w-5 h-5" /> Call Us Now: 309-245-7421
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/24d24778-fa3e-4225-9fd6-a06c5ce8605d.png" 
                alt="Concrete company logo in Normal, IL" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* First CTA Banner */}
      <section className="bg-accent-blue py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
            Call us today for your free estimate
          </h3>
          <Button 
            onClick={handleCallNow} 
            className="bg-white hover:bg-gray-100 text-accent-blue"
          >
            <Phone className="mr-2 h-4 w-4" /> Call us now: 309-245-7421
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg mb-6 text-gray-700">
              If you like to incorporate additional concrete into your residence, you have arrived at the appropriate location! Numerous outstanding concrete firms exist in Normal. <Link to="/" className="text-accent-blue hover:underline">Peoria Concrete Co.</Link>, your local concrete provider, is committed to managing any projects you choose to do at your residence.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Whether you want a small-scale concrete contractor or a commercial concrete firm capable of fulfilling substantial orders, we assert that we are the ideal pouring business for your needs.
            </p>
            <div>
              <h3 className="text-2xl font-bold mb-4">Normal, Illinois Concrete Services</h3>
              <p className="text-lg mb-6">Our full range of services includes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">Concrete Driveways</Link></li>
                <li><Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">Concrete Patios</Link></li>
                <li><Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">Stamped Concrete</Link></li>
                <li><Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">Concrete Repair</Link></li>
              </ul>
              <p className="text-lg mb-6">
                While we highlight our <Link to="/" className="text-primary hover:underline">concrete contractor</Link> expertise, we're also skilled patio builders and deck installers. You can rely on our team for any project!
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
              <img 
                src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
                alt="Professional concrete contractors working on a smooth concrete surface installation in Normal, IL" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="shadow-lg overflow-hidden">
                <div className="bg-primary text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Contact Us</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">Call us now: 309-245-7421</p>
                  <p className="text-lg mb-4">Email: <a href="mailto:info@peoriaconcreteco.com" className="text-primary hover:underline">info@peoriaconcreteco.com</a></p>
                  <p className="text-lg mb-4">Address: 123 Main St, Normal, IL 61761</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg overflow-hidden">
                <div className="bg-primary text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Other Service Areas</h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/champaign-il" className="hover:text-primary">Champaign, IL</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/Bloomington-il" className="hover:text-primary">Bloomington, IL</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/morton-il" className="hover:text-primary">Morton, IL</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/canton-il" className="hover:text-primary">Canton, IL</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/eureka-il" className="hover:text-primary">Eureka, IL</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Banner */}
      <section className="bg-concrete-dark rounded-lg p-8 mb-12 animate-fade-in opacity-0 [animation-delay:500ms]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
            Call us today for your free estimate
          </h3>
          <Button 
            onClick={handleCallNow} 
            className="bg-accent-blue hover:bg-accent-blue/90 text-white"
          >
            <Phone className="mr-2 h-4 w-4" /> Call us now: 309-245-7421
          </Button>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="my-12 animate-fade-in opacity-0 [animation-delay:900ms]">
        <h3 className="text-2xl font-bold mb-6 text-concrete-dark text-center">Our Service Area in Normal, IL</h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97044.0244629529!2d-89.0756478167506!3d40.527762133757264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b711e8ea0817b%3A0xcc453bef6eaaddc0!2sNormal%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1743013055474!5m2!1sen!2sma" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Normal, IL Service Area Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default NormalIL;
