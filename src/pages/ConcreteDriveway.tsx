
import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ConcreteDriveway = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:309-245-7421';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Concrete Driveway | Concrete Installers | Peoria, IL</title>
        <meta name="description" content="Need a new concrete driveway in Peoria? Our experienced concrete company specializes in installing and repairing durable concrete driveways. Contact us at 309-245-7421 for a free consultation." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        ref={(el) => addToRefs(el, 0)}
      >
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/lovable-uploads/24d24778-fa3e-4225-9fd6-a06c5ce8605d.png" 
            alt="Beautiful neighborhood with well-maintained concrete driveways installed by Peoria Concrete Co., enhancing curb appeal and property value" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center">
          <div className="glass-card px-8 py-10 max-w-4xl mx-auto opacity-0 animate-fade-in">
            <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in animate-delay-200">
              PROFESSIONAL CONCRETE SERVICES
            </span>
            <h1 className="text-white mb-6 font-bold opacity-0 animate-fade-in animate-delay-300">
              Concrete Driveway in Peoria
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-400">
              Peoria Concrete Co. puts in professional walkways made of concrete for homes and businesses all over Peoria. Because they don't need as much upkeep as other materials, concrete paths are the best choice for both businesses and homeowners. Owners save more money in the long run with concrete than with dirt or asphalt, which are less expensive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-500">
              <button 
                onClick={handleCallClick}
                className="cta-button group flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Call Us Now: 309-245-7421</span>
              </button>
              
              <button 
                onClick={handleCallClick}
                className="bg-white text-concrete-dark font-medium py-3 px-6 rounded-md transition-all duration-300 
                           hover:bg-opacity-90 hover:translate-y-[-2px] hover:shadow-lg
                           active:translate-y-0 active:shadow-md flex items-center justify-center gap-2"
              >
                <span>Free Estimate</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ArrowRight size={24} className="text-white transform rotate-90" />
        </div>
      </section>

      {/* Construction Section */}
      <section className="section bg-white py-16 md:py-20" ref={(el) => addToRefs(el, 1)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-concrete-dark opacity-0 animate-fade-in">
              Concrete Driveway Construction
            </h2>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
              <p className="text-lg">
                Pavement paths are made with cement, sand, and water. When mixed and bound, the materials make a very strong substance that can stand up to pressure, bad weather, time, and damage.
              </p>
              
              <p className="text-lg">
                Most of the time, asphalt driveways cost more per square foot than concrete driveways. The price of concrete, on the other hand, depends on how big the driveway is and what kinds of decorations you want to use. You shouldn't let the price stop you from getting the driveway of your dreams. If you want to decorate your driveway but don't have a lot of money, we can also put in stamped concrete. Also, clients can tint the edge or the whole area in a number of different ways.
              </p>
              
              <p className="text-lg">
                Peoria Concrete Co. wants to make sure you get the driveway of your dreams no matter what. A concrete contractor will look at your path and tell you if it needs to be fixed or rebuilt. Once we have a good idea of what needs to be done, Peoria Concrete Co. will start working on your job. We take out and repair any concrete that is broken or cracked. The only difference is that at Peoria Concrete Co., we always fix the problem that made the concrete fall in the first place. We have a lot of rivals who just take out the old concrete and put in new concrete in the same place and way.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 opacity-0 animate-fade-in animate-delay-300">
              <img 
                src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
                alt="Elegant stamped concrete driveway with decorative patterns, showcasing Peoria Concrete's craftsmanship and attention to detail" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png" 
                alt="Professionally installed smooth concrete driveway enhancing a residential property, demonstrating our quality workmanship and durability" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peoria Weather Section */}
      <section className="section bg-concrete-light py-10 md:py-16" ref={(el) => addToRefs(el, 2)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-concrete-dark opacity-0 animate-fade-in">
              Concrete and the weather in Peoria
            </h2>
            
            <div className="opacity-0 animate-fade-in animate-delay-100">
              <p className="text-lg mb-6">
                It's hard to keep concrete in good shape in Peoria because of the bad weather. The change in temperature between summer and winter makes the water below the surface freeze and thaw. In this method, the concrete is worn down randomly and looks bad because the top layer is chipped and worn away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="relative py-16 bg-accent-blue text-white overflow-hidden" ref={(el) => addToRefs(el, 3)}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/3dd72073-e4b2-4a83-a8ed-76f04815747a.png" 
            alt="Beautiful stamped and colored concrete patio installation by Peoria Concrete, showing our decorative concrete capabilities" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Call Us Today For Your Free Estimate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Let our concrete experts help you plan your next driveway project with a no-obligation consultation
          </p>
          <button 
            onClick={handleCallClick}
            className="bg-white text-accent-blue font-medium py-3 px-8 rounded-md transition-all duration-300 
                     hover:bg-opacity-90 hover:translate-y-[-2px] hover:shadow-lg
                     active:translate-y-0 active:shadow-md flex items-center gap-2 mx-auto opacity-0 animate-fade-in animate-delay-200"
          >
            <Phone size={18} />
            <span>Call Us Now: 309-245-7421</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white py-16 md:py-20" ref={(el) => addToRefs(el, 4)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-concrete-dark opacity-0 animate-fade-in">
              Installing a Concrete Driveway in Peoria at a Low Cost
            </h3>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
              <p className="text-lg">
                Trust the pros at Peoria Concrete Co. to do a great job installing your driveway at a fair price. Our skilled workers can put in new roads and steps for your parking lot. We can also fix any walkways or roads that are already there.
              </p>
              
              <div className="mt-8 mb-8">
                <img 
                  src="/lovable-uploads/3dd72073-e4b2-4a83-a8ed-76f04815747a.png" 
                  alt="Decorative stamped concrete patio with warm tones, showcasing the versatility of our concrete installation services beyond driveways" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <p className="text-lg">
                Most of the time, concrete is used to fix cracks and holes and bring broken cement back to its original state. To keep people safe, make things look nice, and keep costs down, broken concrete needs to be fixed and kept up before it totally fails. We're proud to be able to turn any driveway into a classy and professional space that raises the value of your home and is built to last.
              </p>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-concrete-dark opacity-0 animate-fade-in animate-delay-200">
              Driveways Made of Decorative Concrete
            </h3>
            
            <p className="text-lg opacity-0 animate-fade-in animate-delay-300">
              Our reliable concrete builders also have a lot of experience doing ornamental concrete work for your outdoor space to make it look better. Give us a call right now if you need work done on your road or with concrete.
            </p>
            
            <div className="mt-8 opacity-0 animate-fade-in animate-delay-300">
              <button 
                onClick={handleCallClick}
                className="cta-button group flex items-center gap-2 mx-auto"
              >
                <Phone size={18} />
                <span>Call Us: 309-245-7421</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 2 */}
      <section className="relative py-16 bg-concrete-dark text-white overflow-hidden" ref={(el) => addToRefs(el, 5)}>
        <div className="container px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Call Us Today For Your Free Estimate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Ready to upgrade your driveway? Contact us now for expert advice and a detailed quote
          </p>
          <button 
            onClick={handleCallClick}
            className="bg-accent-blue text-white font-medium py-3 px-8 rounded-md transition-all duration-300 
                     hover:bg-opacity-90 hover:translate-y-[-2px] hover:shadow-lg
                     active:translate-y-0 active:shadow-md flex items-center gap-2 mx-auto opacity-0 animate-fade-in animate-delay-200"
          >
            <Phone size={18} />
            <span>Call Us Now: 309-245-7421</span>
          </button>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="section py-16" ref={(el) => addToRefs(el, 6)}>
        <div className="container px-6 mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in">
              OUR LOCATION
            </span>
            <h2 className="text-concrete-dark mb-4 opacity-0 animate-fade-in animate-delay-100">
              Serving Peoria and Surrounding Areas
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600 opacity-0 animate-fade-in animate-delay-200">
              <MapPin size={18} />
              <p>Peoria, Illinois</p>
            </div>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in animate-delay-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193448.45115159842!2d-89.78745021896188!3d40.74812128718294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a595c535879ad%3A0xcafbf4326b7d80db!2sPeoria%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1742983631421!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peoria Concrete Contractors Location Map"
            ></iframe>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-400">
            <button 
              onClick={handleCallClick}
              className="cta-button flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Call Us: 309-245-7421</span>
            </button>
            
            <a 
              href="https://www.google.com/maps/place/Peoria,+IL/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-concrete-dark text-white font-medium py-3 px-6 rounded-md transition-all duration-300 
                       hover:bg-opacity-90 hover:translate-y-[-2px] hover:shadow-lg
                       active:translate-y-0 active:shadow-md flex items-center gap-2"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConcreteDriveway;
