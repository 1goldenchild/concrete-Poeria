
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const StampedConcrete = () => {
  const phoneNumber = "309-245-7421";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Stamped Concrete | Decorative Concrete | Peoria IL</title>
        <meta
          name="description"
          content="Looking for stunning stamped concrete in Peoria? Our concrete company specializes in creating decorative, durable surfaces for patios, driveways, and more. Contact us at 309-245-7421 to get started."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-concrete-dark py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-hero-pattern opacity-70"
          style={{ 
            backgroundImage: `url('/lovable-uploads/558e0f4d-4fc0-44be-ac14-5e735cc4772c.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Peoria Stamped concrete and fancy concrete
            </h1>
            <p className="text-lg text-white mb-8">
              Transform your outdoor space with decorative stamped concrete that combines durability with aesthetic appeal.
            </p>
            <Button 
              onClick={handleCallClick} 
              className="bg-accent-blue hover:bg-accent-blue/90 text-white text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" /> Call us now: {phoneNumber}
            </Button>
          </div>
        </div>
      </div>

      {/* First CTA Banner */}
      <div className="bg-accent-blue py-10 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
            Call us today for your free estimate
          </h3>
          <Button 
            onClick={handleCallClick} 
            className="bg-white hover:bg-gray-100 text-accent-blue"
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
              Concrete that has been stamped is used to build and landscape in Peoria. People like poured cement because it is easy to place and lasts a long time, but it isn't always the best-looking material for gardening. Putting stamped concrete on a patio or path can make your whole yard look better. Concrete doesn't have to be dull, and we are the experts in artistic concrete in the area. From your back yard to your front door, we work hard to cover it all with high-quality stamped concrete. Get in touch with Peoria Concrete Co. at {phoneNumber} right now!
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:600ms]">
            <img 
              src="/lovable-uploads/1d86b716-543a-4dcf-8c85-1ae9dbf0b7ac.png" 
              alt="Clean concrete patio with fire pit and modern design" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Are you sure that stamped concrete is the best choice?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/7469bd3e-c54b-4c9e-88a3-378c547c7614.png" 
              alt="Beautiful stamped concrete patio with decorative brick pattern and landscaping" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              How can you tell if stamped concrete is a good idea? Our workers at Peoria Concrete Co. work hard to give you choices. Talk to a member of our team or look at our website to compare stamped concrete designs and prices. We need the right professionals to help you choose between the different types of stamped concrete. Knowing how much stamped concrete you can get can help you decide what you want for your home. Texture can be different, and there are many different top choices. With so many options, we're sure we're the right company for you. 
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Think about cement pavers, brick designs that look nice, stamped driveways and walks. A lot of people in Peoria use this type of cement on their patios and pool decks. Stamped concrete is used to cover the floors and walls of beautiful homes, both inside and outside. Peoria Concrete Co. has the best stamped concrete service in the area, no matter what you need or where you need it.
            </p>
          </div>
        </div>

        {/* Second CTA Banner */}
        <div className="bg-concrete-dark rounded-lg p-8 mb-12 animate-fade-in opacity-0 [animation-delay:500ms]">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0 text-center md:text-left">
              Call us today for your free estimate
            </h3>
            <Button 
              onClick={handleCallClick} 
              className="bg-accent-blue hover:bg-accent-blue/90 text-white"
            >
              <Phone className="mr-2 h-4 w-4" /> Call us now: {phoneNumber}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <h3 className="text-2xl font-bold mb-4 text-concrete-dark animate-fade-in opacity-0 [animation-delay:200ms]">
              Concrete Services in Peoria
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              Bricks are priced by the yard. We work hard to give you a lot of choices when it comes to stamped concrete. We know how to work with beautiful concrete and do our best to keep it in good shape through skilled repair. We are ready to take on both big and small jobs at Peoria Concrete Co. and we have what it takes!
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We know that every home is different here at Peoria Concrete Co. Different people don't like the same kinds of decorated concrete. That's why we try to be the most adaptable concrete company we can be so that we can meet your needs and standards.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/558e0f4d-4fc0-44be-ac14-5e735cc4772c.png" 
              alt="Elegant stamped concrete pathway with curved design and lighting" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Google Map Section */}
        <div className="my-12 animate-fade-in opacity-0 [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-6 text-concrete-dark text-center">Our Service Area</h3>
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

export default StampedConcrete;
