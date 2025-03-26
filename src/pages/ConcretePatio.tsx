import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight } from "lucide-react";

const ConcretePatio = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Peoria, IL Concrete Patio & Concrete Walkway</title>
        <meta
          name="description"
          content="Enhance your outdoor space with a beautiful concrete patio in Peoria. Our expert concrete contractors provide high-quality installation and design. Call 309-245-7421 for a free quote today!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png"
            alt="Beautiful concrete patio with decorative patterns in a Peoria backyard"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Concrete Patio in Peoria
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transform your outdoor living space with our expert <Link to="/" className="text-primary hover:underline">concrete company</Link> solutions.
            </p>
            <Button 
              size="lg" 
              className="cta-button group opacity-0 animate-fade-in flex items-center"
              style={{ animationDelay: "0.4s" }}
              onClick={() => window.location.href = "tel:309-245-7421"}
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us Now: 309-245-7421
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* First CTA Banner */}
      <section className="bg-accent text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Call us today for your free estimate</h3>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-accent hover:bg-gray-100 border-white"
            onClick={() => window.location.href = "tel:309-245-7421"}
          >
            <Phone className="mr-2 h-5 w-5" /> 309-245-7421
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              A lot of houses in Peoria are made of concrete. Concrete is a cheap and good material for building and gardening because it can be used in many ways and can be decorated. It's easy for our workers to pour concrete to fill in cracks in <Link to="/concrete-driveway-peoria-il" className="text-accent hover:underline">driveways</Link> and sidewalks. We have put down a huge number of concrete blocks. One thing we do really well is building concrete patios. <Link to="/" className="text-accent hover:underline">Peoria Concrete Co.</Link> can help you with the cost and <Link to="/concrete-crack-repair-peoria-il" className="text-accent hover:underline">repair</Link> of your concrete driveway. Call us at 309-245-7421 right now to find out if we do the concrete work you need.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png" 
              alt="Professional concrete patio installation by Peoria Concrete Co. workers" 
              className="w-full h-auto image-glow"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
            How to Pick the Best Peoria Concrete Contractor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
                alt="Stamped concrete patio with decorative finish showing quality craftsmanship" 
                className="w-full h-auto rounded-lg shadow-lg image-glow"
              />
            </div>
            <div className="order-1 md:order-2 prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                You should think about a few things as a homeowner when you need to find a <Link to="/" className="text-accent hover:underline">concrete builder</Link> near you. We do our best to provide all the concrete services you may require! We fix <Link to="/concrete-driveway-peoria-il" className="text-accent hover:underline">concrete driveways</Link> all the time. Our workers have been doing this for years, and we're happy to offer a lot of different <Link to="/stamped-concrete-peoria-il" className="text-accent hover:underline">stamped concrete</Link> driveway choices. We are the best at putting together concrete patio ideas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            How Can I Get Stamped Concrete? What Are My Choices?
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Before you choose a concrete service for your home or yard, you should make sure you have all the facts. You can stamp a lot of different designs into artistic concrete from Peoria Concrete Co. Now more than ever, it's easy to make your cement work look brand new. Give us a call at 309-245-7421 right now, and we'll tell you more about the following:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg">
            <li className="mb-2">Patterns stamped into concrete</li>
            <li className="mb-2">How much stamped concrete costs on average</li>
          </ul>
          <p className="text-lg leading-relaxed mb-6">
            There are easier ways to make your concrete path look like it's brand new. Getting your driveway and steps to match the structure of your Peoria home doesn't have to cost a lot of money. We're happy to offer all of them! Call 309-245-7421 right now to find out if you can afford stamped concrete by the yard.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
            Experts in Concrete Patios in Peoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We all know that people in Peoria spend their summer nights on the concrete porch! This is why our service for concrete patios is better than anyone else's in terms of both quality and price. We promise that you will be happy working with Peoria Concrete Co., whether you need stamped concrete patio service or want to look at our colored choices. While you're looking for the best concrete company near me, we want you to find us on our front porch and have us work on your back yard. We've been in this business for years. For our patio cost, we're both happy with how much it costs by the yard. Do you need to stain your deck? You might be looking for builders to help you give your concrete patio a whole new look. We want to do a good job for you because we know you will spend a lot of time out there. For the best home concrete work, call us at 309-245-7421 right away.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/8f3657fc-e104-4597-ab35-96266deb2d76.png" 
                alt="Finished concrete patio with outdoor furniture showing beautiful living space" 
                className="w-full h-auto rounded-lg shadow-lg image-glow"
              />
            </div>
          </div>
        </div>

        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/concrete-contractor/champaign-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Champaign, IL</Link>
            <Link to="/concrete-contractor/Bloomington-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Bloomington, IL</Link>
            <Link to="/concrete-contractor/normal-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Normal, IL</Link>
            <Link to="/concrete-contractor/eureka-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Eureka, IL</Link>
            <Link to="/concrete-contractor/canton-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Canton, IL</Link>
          </div>
        </div>
      </section>

      {/* Second CTA Banner */}
      <section className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Call us today for your free estimate</h3>
          <Button 
            size="lg" 
            className="bg-accent text-white hover:bg-accent/90"
            onClick={() => window.location.href = "tel:309-245-7421"}
          >
            <Phone className="mr-2 h-5 w-5" /> 309-245-7421
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center">
            <MapPin className="mr-2 h-6 w-6 text-accent" /> 
            Our Service Area in Peoria
          </h2>
          <p className="text-lg text-gray-600">
            We provide concrete patio services throughout the Peoria, IL area
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl w-full">
          <div className="w-full h-[450px] max-w-[100%] mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193448.45115159842!2d-89.78745021896188!3d40.74812128718294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a595c535879ad%3A0xcafbf4326b7d80db!2sPeoria%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1742983631421!5m2!1sen!2sma" 
              width="100%" 
              height="450"
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peoria, IL Map - Service Area for Concrete Patios"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-8 text-center">
        <Link to="/" className="text-accent hover:underline inline-flex items-center">
          <ArrowRight className="mr-2 h-5 w-5 rotate-180" /> Back to Home
        </Link>
      </section>
    </div>
  );
};

export default ConcretePatio;
