
import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

const Index = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:309-245-7421';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        ref={(el) => addToRefs(el, 0)}
      >
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/photo-1487958449943-2429e8be8625" 
            alt="Beautiful concrete structure with modern architectural design showcasing durability and craftsmanship" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center">
          <div className="glass-card px-8 py-10 max-w-4xl mx-auto opacity-0 animate-fade-in">
            <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in animate-delay-200">
              PROFESSIONAL CONCRETE CONTRACTORS
            </span>
            <h1 className="text-white mb-6 font-bold opacity-0 animate-fade-in animate-delay-300">
              Premium Concrete Solutions in Peoria, Illinois
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-400">
              Quality craftsmanship, durable results, and exceptional service for all your concrete needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-500">
              <button 
                onClick={handleCallClick}
                className="cta-button group flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                <span>Call Us Now: 309-245-7421</span>
              </button>
              
              <button className="bg-white text-concrete-dark font-medium py-3 px-6 rounded-md transition-all duration-300 
                               hover:bg-opacity-90 hover:translate-y-[-2px] hover:shadow-lg
                               active:translate-y-0 active:shadow-md flex items-center justify-center gap-2">
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

      {/* About Section */}
      <section className="section bg-concrete-light py-20" ref={(el) => addToRefs(el, 1)}>
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in animate-delay-200">
                ABOUT OUR COMPANY
              </span>
              <h2 className="text-concrete-dark mb-6 opacity-0 animate-fade-in animate-delay-300">
                Expert Concrete Solutions for Over 15 Years
              </h2>
              <div className="space-y-4 opacity-0 animate-fade-in animate-delay-400">
                <p>
                  Peoria Concrete Contractors is a locally owned and operated business serving Peoria, Illinois, and surrounding areas. Our focus on quality, durability, and customer satisfaction has made us the leading concrete company in the region.
                </p>
                <p>
                  We specialize in all types of concrete work, including driveways, patios, foundations, and decorative concrete. Our team of skilled professionals brings years of experience to every project, ensuring exceptional results that stand the test of time.
                </p>
                <p>
                  Whether you're a homeowner looking to enhance your property's value with a new concrete driveway or a business owner in need of commercial concrete solutions, our team has the expertise to deliver outstanding results on time and within budget.
                </p>
              </div>
              <div className="mt-8 opacity-0 animate-fade-in animate-delay-500">
                <button 
                  onClick={handleCallClick}
                  className="cta-button group flex items-center gap-2"
                >
                  <Phone size={18} />
                  <span>Call Us: 309-245-7421</span>
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-300">
              <div className="relative rounded-xl overflow-hidden shadow-xl image-glow">
                <img 
                  src="/photo-1524230572899-a752b3835840" 
                  alt="Premium quality concrete work showcasing our attention to detail and craftsmanship" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white py-20" ref={(el) => addToRefs(el, 2)}>
        <div className="container px-6 mx-auto text-center">
          <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in">
            OUR SERVICES
          </span>
          <h2 className="text-concrete-dark mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Comprehensive Concrete Solutions for Residential & Commercial Projects
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            From foundations to decorative finishes, our expert team delivers quality craftsmanship for all your concrete needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Concrete Driveways",
                description: "Enhance your property's curb appeal with a durable, custom-designed concrete driveway built to withstand the Illinois climate.",
                delay: "300"
              },
              {
                title: "Patios & Walkways",
                description: "Create beautiful outdoor living spaces with our expertly crafted concrete patios and walkways, available in various finishes and designs.",
                delay: "400"
              },
              {
                title: "Foundations",
                description: "Build on a solid base with our precision-engineered concrete foundations for residential and commercial buildings.",
                delay: "500"
              },
              {
                title: "Decorative Concrete",
                description: "Elevate your space with stamped, stained, or polished concrete options that combine beauty with unmatched durability.",
                delay: "600"
              },
              {
                title: "Commercial Concrete",
                description: "From parking lots to loading docks, we provide commercial-grade concrete solutions built to handle heavy use and harsh conditions.",
                delay: "700"
              },
              {
                title: "Concrete Repair",
                description: "Restore and extend the life of your existing concrete structures with our professional repair and maintenance services.",
                delay: "800"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 opacity-0 animate-fade-in animate-delay-${service.delay}`}
              >
                <h3 className="text-xl font-semibold text-concrete-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  onClick={handleCallClick}
                  className="text-accent-blue hover:text-accent-blue/90 font-medium flex items-center gap-1 mx-auto"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="relative py-16 bg-accent-blue text-white overflow-hidden" ref={(el) => addToRefs(el, 3)}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/photo-1433086966358-54859d0ed716" 
            alt="Abstract concrete texture background showcasing the beauty and versatility of concrete" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Call Us Today For Your Free Estimate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Let our concrete experts help you plan your next project with a no-obligation consultation and detailed estimate
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

      {/* Why Choose Us Section */}
      <section className="section bg-concrete-light py-20" ref={(el) => addToRefs(el, 4)}>
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent-blue font-semibold mb-2 opacity-0 animate-fade-in">
              WHY CHOOSE US
            </span>
            <h2 className="text-concrete-dark mb-4 opacity-0 animate-fade-in animate-delay-100">
              The Peoria Concrete Advantage
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-200">
              Discover why homeowners and businesses throughout Peoria trust us for all their concrete needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Materials",
                description: "We use only premium-grade materials that meet rigorous industry standards, ensuring your concrete will last for decades.",
                delay: "300"
              },
              {
                title: "Expert Craftsmanship",
                description: "Our team of skilled professionals brings years of experience and technical expertise to every project we undertake.",
                delay: "400"
              },
              {
                title: "On-Time Completion",
                description: "We respect your schedule and deliver projects on time without sacrificing quality or cutting corners.",
                delay: "500"
              },
              {
                title: "Custom Solutions",
                description: "Every project is unique, and we work closely with you to create custom concrete solutions that meet your specific needs.",
                delay: "600"
              },
              {
                title: "Transparent Pricing",
                description: "Our detailed estimates outline all costs upfront, so you'll never face unexpected charges or hidden fees.",
                delay: "700"
              },
              {
                title: "Local Expertise",
                description: "As a Peoria-based contractor, we understand the local climate and soil conditions that affect concrete performance.",
                delay: "800"
              }
            ].map((advantage, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 text-center opacity-0 animate-fade-in animate-delay-${advantage.delay}`}
              >
                <h3 className="text-xl font-semibold text-concrete-dark mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner 2 */}
      <section className="relative py-16 bg-concrete-dark text-white overflow-hidden" ref={(el) => addToRefs(el, 5)}>
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Call Us Today For Your Free Estimate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Ready to start your concrete project? Contact us now for expert advice and a detailed quote
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96579.62176465932!2d-89.68374155!3d40.719374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a341d3aaad2df%3A0x4029d3b9fbf3077f!2sPeoria%2C%20IL!5e0!3m2!1sen!2sus!4v1653043573903!5m2!1sen!2sus"
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

export default Index;
