
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ArrowRight, Wrench, Construction } from "lucide-react";

const ConcreteRepair = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Concrete Repair | Crack & Surface Restoration | Peoria, IL</title>
        <meta
          name="description"
          content="Are cracks damaging your concrete surfaces? Our skilled concrete contractors in Peoria provide reliable crack repair services. Call 309-245-7421 today to schedule a free assessment!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png"
            alt="Professional concrete crack repair service in Peoria showing a worker fixing a damaged concrete surface"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              How to Fix Cracks in Concrete in Peoria
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Professional concrete repair services for residential and commercial properties
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
        <div className="prose max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-8">
            A company called <Link to="/" className="text-accent hover:underline">Peoria Concrete Co.</Link> does everything that has to do with concrete. Large projects are what we do as a business <Link to="/" className="text-accent hover:underline">concrete contractor</Link>, but we're also happy to help you with smaller jobs. We work hard to give great service at a price we can both agree on. There's no need for you to take our word for it. Check out the reviews of our concrete company written by real, happy customers. Give us a call at 309-245-7421 right now to get a free price and ask any questions you have. We're here to help you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Fixing Cracks in Concrete
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Peoria Concrete Co. will completely rebuild and fix any chips, cracks, or broken pieces of concrete in your road, path, <Link to="/concrete-patio-peoria-il" className="text-accent hover:underline">patio</Link>, or pool deck. This will make sure that your newly fixed concrete lasts longer. On the other hand, crack fixes in concrete should be much more than just restoring the concrete. A colorful concrete overlay covering that was custom made for your home or business will definitely be useful after the job is done.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/3dd72073-e4b2-4a83-a8ed-76f04815747a.png" 
              alt="Close-up of concrete crack repair work showing restoration of damaged concrete surface" 
              className="w-full h-auto image-glow"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Concrete Crack Repair Services in Peoria
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Do the concrete floors in your home or workplace have cracks, chips, stains, or other problems that make them look bad or even dangerous? <Link to="/" className="text-accent hover:underline">Peoria Concrete Co.</Link> can help you with that. Concrete is one of the most durable and inexpensive building products you can use. However, even this cloth will show signs of wear over time. Peoria's big changes in temperature are terrible for outside concrete. Over time, freeze-thaw cycles wear down concrete in weak spots, making the surface look bad and sometimes even dangerous.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Your home may lose worth if your <Link to="/concrete-driveway-peoria-il" className="text-accent hover:underline">driveway</Link>, pool deck, or <Link to="/concrete-patio-peoria-il" className="text-accent hover:underline">patio</Link> is cracked or broken. It can also cause problems with the base. There are different ways to fix cracks based on their size and depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/24d24778-fa3e-4225-9fd6-a06c5ce8605d.png" 
              alt="Before and after comparison of concrete crack repair showing significant improvement" 
              className="w-full h-auto rounded-lg shadow-lg image-glow"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg leading-relaxed mb-6">
              You've come to the right place if you need a skilled professional in Peoria to fix a crack in your concrete. To make the whole project as easy as possible for you, we put you in touch with experienced professionals who can fix cracks in concrete and do a wide range of other home improvement jobs for both homes and businesses.
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg">
              <li className="mb-2">Concrete crack repair services you can trust—Get a price, an estimate, and more details.</li>
              <li className="mb-2">Get in touch with a qualified, reliable, and skilled <Link to="/" className="text-accent hover:underline">concrete contractor</Link> in your area.</li>
              <li className="mb-2">Our services include fixing cracks in concrete for both businesses and homes.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Let us know about your crack repair project, and we'll put you in touch with a professional in Peoria. After that, we'll get in touch with you to tell you about the next steps, how much they will cost, and the whole schedule.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Service to Fix Concrete in Peoria
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            If the pavement around your house or office is broken or not level, it can be a big problem. Some people might feel unsafe around it, and the value of your home might go down. When this happens, it's time to get help from a professional. We at <Link to="/" className="text-accent hover:underline">Peoria Concrete Co.</Link> use the most up-to-date tools and methods to level, raise, seal, and protect the concrete in your home or business. In order to fix concrete, we offer the following services:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg">
            <li className="mb-2">Concrete with cracks</li>
            <li className="mb-2">Moving concrete</li>
            <li className="mb-2"><Link to="/stamped-concrete-peoria-il" className="text-accent hover:underline">Decorative Concrete Coating</Link></li>
          </ul>
          <p className="text-lg leading-relaxed mb-6">
            Set up repair services for concrete that are both affordable and easy for you to get to. To find out more about how to work with Peoria Concrete Co., call 309-245-7421 and talk to one of our concrete workers.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800">
            Concrete Lifting in Peoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                The best way to escape the risks and structural problems that come with settling concrete is to lift it. In Peoria, the dirt is especially likely to settle, which makes concrete floors have high and low spots. Residents have had to deal with these problems for years or pay a lot of money to repair the trouble places. This problem can be fixed by a professional leveling of the concrete, which will leave your steps, roads, porches, <Link to="/concrete-patio-peoria-il" className="text-accent hover:underline">patios</Link>, and even basement floors level for a lot less money than replacing them.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our main job in Peoria is lifting concrete. Our polyurethane expansion foam that comes in two parts is also good for the earth. It can be used to raise concrete blocks that are falling into holes in the ground. Our method straight away levels out uneven concrete, filling in gaps below the surface and keeping loose dirt in place.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/20580a80-2664-4e8a-aada-daa8dafb6d41.png" 
                alt="Concrete lifting process showing specialized equipment raising sunken concrete" 
                className="w-full h-auto rounded-lg shadow-lg image-glow"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/f3755294-0c69-4c8e-a07b-1770275194b8.png" 
              alt="Workers performing concrete lifting on a damaged driveway in Peoria" 
              className="w-full h-auto rounded-lg shadow-lg image-glow"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              Is it possible to move my concrete?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              When we get to your home, business, or other location, the first thing we'll look for is concrete that is touching. It is not possible to raise a slab that has sunk below the edge of a nearby slab or step. The block must first be brought back into place. In this case, the concrete will need to be broken up, taken away, and put down again.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              There are other, less common situations where lifting concrete is not a good idea, but these are the most common ones, and they only make up a small part of the jobs we get called for. We can get you back on steady ground quickly if your concrete isn't level or is sinking into the ground. Call us at 309-245-7421 right now!
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
            Concrete Lifting You Can Trust in Peoria
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Want to hire a reliable, honest, and reasonably priced Peoria <Link to="/" className="text-accent hover:underline">concrete builder</Link> who can lift and level any type of concrete? No matter if it's your <Link to="/concrete-driveway-peoria-il" className="text-accent hover:underline">driveway</Link>, <Link to="/concrete-patio-peoria-il" className="text-accent hover:underline">patio</Link>, steps, stairs, path, fence, or something else, we can either lift and level the concrete or fix and replace it. To lift and level concrete in Peoria, no one does it better than us!
          </p>
        </div>

        {/* Areas We Serve Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-concrete-dark text-center">Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/concrete-contractor/champaign-il" className="bg-white hover:bg-gray-100 p-3 rounded text-center transition-colors shadow-sm">Champaign, IL</Link>
            <Link to="/concrete-contractor/Bloomington-il" className="bg-white hover:bg-gray-100 p-3 rounded text-center transition-colors shadow-sm">Bloomington, IL</Link>
            <Link to="/concrete-contractor/normal-il" className="bg-white hover:bg-gray-100 p-3 rounded text-center transition-colors shadow-sm">Normal, IL</Link>
            <Link to="/concrete-contractor/morton-il" className="bg-white hover:bg-gray-100 p-3 rounded text-center transition-colors shadow-sm">Morton, IL</Link>
            <Link to="/concrete-contractor/eureka-il" className="bg-white hover:bg-gray-100 p-3 rounded text-center transition-colors shadow-sm">Eureka, IL</Link>
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
            We provide concrete repair services throughout the Peoria, IL area
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
              title="Peoria, IL Map - Service Area for Concrete Repair"
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

export default ConcreteRepair;
