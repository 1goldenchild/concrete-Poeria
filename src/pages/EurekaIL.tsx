
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const EurekaIL = () => {
  const phoneNumber = "309-245-7421";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Contractors - Stamped Company - Eureka, IL</title>
        <meta
          name="description"
          content="Professional concrete contractors in Eureka, IL! Our concrete company handles everything from stamped concrete to commercial projects. Call 309-245-7421 today!"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url('/lovable-uploads/7469bd3e-c54b-4c9e-88a3-378c547c7614.png')`,
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Concrete Contractors and Concrete Firm in Eureka, IL
            </h1>
            <p className="text-lg text-white mb-8">
              From our location in Eureka, we provide a variety of concrete contracting services that may be executed in or around your residence.
            </p>
            <Button 
              onClick={handleCallClick} 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" /> Call us now: {phoneNumber}
            </Button>
          </div>
        </div>
      </div>

      {/* First CTA Banner */}
      <div className="bg-primary py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
            Call us today for your free estimate
          </h3>
          <Button 
            onClick={handleCallClick} 
            className="bg-white hover:bg-gray-100 text-primary"
            size="lg"
          >
            <Phone className="mr-2 h-4 w-4" /> Call us now: {phoneNumber}
          </Button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              If you like to augment the quantity of concrete in your residence, you are in the right place! Numerous exemplary concrete enterprises now operate in Eureka. Peoria Concrete Co., your local concrete enterprise, is dedicated to managing any tasks you want for your residence.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We believe we are the optimal concrete service provider for your requirements, whether for a small-scale project or a large commercial order.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:600ms]">
            <img 
              src="/lovable-uploads/1d86b716-543a-4dcf-8c85-1ae9dbf0b7ac.png" 
              alt="Polished concrete patio with seating area and firepit, showcasing quality concrete work by Eureka contractors" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Evaluating a deck, patio, or driveway
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/7469bd3e-c54b-4c9e-88a3-378c547c7614.png" 
              alt="Decorative stamped concrete patio with intricate patterns, demonstrating expert craftsmanship by Eureka concrete contractors" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              You want to guarantee that the premier concrete company in your vicinity will fulfill your needs. We recommend acquiring many concrete estimates prior to making any decisions, as it is hard to assess the superiority of one business over another without an in-person encounter. We request that you compare the stores. We have confidence in our products and exceptional service, and we encourage you to explore your options.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Contact Peoria Concrete Co. immediately to address any concrete concerns that necessitate resolution by our skilled technicians! A reliable cost estimate facilitates the efficient planning of any real work. Our team of concrete professionals have extensive, practical knowledge and is capable of managing all aspects of concrete work.
            </p>
          </div>
        </div>

        {/* Second CTA Banner */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12 animate-fade-in opacity-0 [animation-delay:500ms]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
              Call us today for your free estimate
            </h3>
            <Button 
              onClick={handleCallClick} 
              className="bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              <Phone className="mr-2 h-4 w-4" /> Call us now: {phoneNumber}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
              Peoria Concrete Company
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              We are committed to delivering superior concrete contracting services to the citizens of Eureka, Illinois, and surrounding communities. Our team of concrete contractors is situated locally to address all your business and residential concrete needs. We provide a range of projects, including concrete flatwork, roadways, and paths.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We must fulfill your vision for your property and exceed your standards for every project at Peoria Concrete Co. We ensure equitable pricing for all our services by presenting transparent and explicit rates in advance.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/558e0f4d-4fc0-44be-ac14-5e735cc4772c.png" 
              alt="Curved concrete pathway with elegant pattern design, showcasing the artistic capabilities of Eureka concrete specialists" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
            Assessing the Necessity of Repair
          </h2>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              A concrete contractor will assess your foundation. Our assessment encompasses the expenses associated with necessary services, such as concrete stamping or painting. All supplementary things we provide will be charged accordingly. While we must maintain concrete slabs, new modifications are feasible. Most tasks need the abrasion of the slab surface, followed by the application of a concrete layer to ensure durability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Concrete Patios</h3>
                <p className="text-gray-600">
                  Concrete is an excellent option for constructing a patio in your backyard. Options include stained concrete, stamped concrete, and cement with color additives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Decorative Concrete</h3>
                <p className="text-gray-600">
                  Numerous types of decorative concrete may be installed in your driveway, patio, sidewalk, or residence with three separate options available.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Stamped Cement</h3>
                <p className="text-gray-600">
                  Stamped concrete features patterns imprinted into its surface, suitable for patios, driveways, or porches in any color throughout your residence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
            Concrete Services in Eureka, Illinois
          </h3>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              Our extensive services comprise:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-700">
              <li>Concrete Placement</li>
              <li>Slab Concrete Placement</li>
              <li>Driveway Placement</li>
            </ul>
            <p className="text-lg mb-6 text-gray-700">
              While we advocate for our concrete services, we are also experienced patio contractors and deck builders. We also manufacture concrete for enterprises. You can depend on us to do the assignment accurately, regardless of the service required. Contact us at {phoneNumber} for further details on our concrete options, or visit our website for extra information.
            </p>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="my-12 animate-fade-in opacity-0 [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Service Area in Eureka, IL</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24192.34317150925!2d-89.30198457471582!3d40.71707216910997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ba61b9b757b0d%3A0x2510d59d78a485b2!2sEureka%2C%20IL%2061530%2C%20USA!5e0!3m2!1sen!2sma!4v1743014214414!5m2!1sen!2sma" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Eureka, IL Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EurekaIL;
