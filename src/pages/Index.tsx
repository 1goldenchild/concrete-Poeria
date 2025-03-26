import React, { useEffect, useRef } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
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
      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        ref={(el) => addToRefs(el, 0)}
      >
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png" 
            alt="Modern residential driveway with smooth concrete finish by Peoria Concrete Co, showcasing our professional installation and durability" 
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
              Peoria Concrete Co. and Concrete Contractors
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-400">
              Quality concrete services for residential and commercial projects in Peoria, Illinois
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

      {/* Introduction Section */}
      <section className="section bg-white py-16 md:py-20" ref={(el) => addToRefs(el, 1)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 opacity-0 animate-fade-in">
              As a concrete contractor in Peoria, we can do a number of different jobs in and around your home. You've come to the right place if you want to add more concrete to your home. In Peoria, there are a lot of great concrete businesses. Any work you want done around your house can be done by the concrete company in your area.
            </p>
            <p className="text-lg mb-6 opacity-0 animate-fade-in animate-delay-100">
              We think that we are the best concrete pouring company for you, whether you need a small job done or a business company with a big order to fill.
            </p>

            <div className="mt-8 opacity-0 animate-fade-in animate-delay-300">
              <button 
                onClick={handleCallClick}
                className="cta-button group flex items-center gap-2"
              >
                <Phone size={18} />
                <span>Call Us: 309-245-7421</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-concrete-light py-16 md:py-20" ref={(el) => addToRefs(el, 2)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-concrete-dark opacity-0 animate-fade-in">
              Why Should You Pick Peoria Concrete Co.
            </h2>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
              <p className="text-lg">
                You need to find the best concrete company near you if you want to build a deck, patio, or driveway. You can't tell which company is better without meeting them, so get a few quotes before you decide. That's right, we want you to look around. We are sure you will be happy with our goods and service, and we want you to know what other choices you have.
              </p>
              
              <p className="text-lg">
                Call Peoria Concrete Co. right now to deal with your concrete issues that need to be fixed by our concrete workers! We'll help you get a good idea of how much it will cost and get to work right away on some concrete work. Our team of concrete pros has years of real-world knowledge and can do it all. For many people, concrete is a great addition to their home. Our low prices and quick, high-quality service will help you choose a concrete style. We can help you whether you need a small team of concrete workers or a large team for a business project. Our crew of skilled concrete builders loves putting in new driveways and decks made of concrete.
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-fade-in animate-delay-300">
              <img 
                src="/lovable-uploads/f3755294-0c69-4c8e-a07b-1770275194b8.png" 
                alt="Professional concrete foundation installation by Peoria Concrete Co., showcasing our expert team's precision and quality workmanship" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="relative py-16 bg-accent-blue text-white overflow-hidden" ref={(el) => addToRefs(el, 3)}>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png" 
            alt="Expertly installed stamped concrete patio by Peoria Concrete Co., demonstrating decorative concrete options available to homeowners" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            Call Us Today For Your Free Estimate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Let our concrete experts help you plan your next project with a no-obligation consultation
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
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-concrete-dark opacity-0 animate-fade-in">
              The Concrete Work We Do
            </h3>
            
            <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
              <p className="text-lg">
                At Peoria Concrete Co., we do simple things like concrete driveways, flatwork, patios, walks, and pathways. Through the use of strong and modern materials, we offer a wide range of skilled concrete services that are made to last and need little care. Our concrete services cover all kinds of buildings, from homes to businesses. For patios and walking surfaces in Peoria and the surrounding area, please don't hesitate to call one of our concrete workers at 309-245-7421 if you need to fix up old concrete or get new concrete flatwork.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <img 
                  src="/lovable-uploads/8f3657fc-e104-4597-ab35-96266deb2d76.png" 
                  alt="Professional concrete flatwork in progress by Peoria Concrete technician, showing the precision and care that goes into every project" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="flex flex-col justify-between">
                  <img 
                    src="/lovable-uploads/20580a80-2664-4e8a-aada-daa8dafb6d41.png" 
                    alt="Beautiful neighborhood with quality concrete driveways installed by Peoria Concrete Co., demonstrating our residential concrete services" 
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                  <Link 
                    to="/concrete-driveway-peoria-il" 
                    className="text-accent-blue font-medium hover:underline flex items-center gap-1"
                  >
                    Learn more about our concrete driveway services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              
              <p className="text-lg">
                As a company, Peoria Concrete Co. is dedicated to providing the best concrete building services to the people of Peoria, Illinois, and the nearby towns. Our team of concrete workers in your local store can help you with all of your home and business concrete plans. We build a lot of different things, from concrete flatwork to walks and roads. For all of your jobs here at Peoria Concrete Co., it's important that we meet your needs and go above and beyond what you expect. For each of our services, we make sure that our prices are fair by giving you clear and open prices for all of them.
              </p>
              
              <p className="text-lg">
                In addition, we know that every property has its own needs and requirements. That's why we carefully consider and study your specific needs and tailor each service to meet them. The people here at Peoria Concrete Co. really understand how important it is to have well-designed and attractive living areas. Not only is concrete a great choice for its architectural and aesthetic value, it is also an adaptable and long-lasting material that only needs basic care. Concrete decks and floors are great for living areas because they can handle a lot of foot traffic and the weather without losing their nice look. We keep up-to-date tools and highly skilled workers to make sure that every concrete patio and surface is built properly, safely, and without any problems. As a real estate company in Peoria, we offer a variety of concrete services. You can have us fix up your sidewalk, patio, shed, or anywhere else you want new, better concrete. Our concrete builders can build with concrete because they are allowed to do so.
              </p>
              
              <p className="text-lg">
                A member of our concrete team will come look at your base to see if it needs to be fixed. When we do an inspection, we include the price of any services that should be included, like painting or stamping on concrete. We will also list the price of any other products we offer. We need to take care of the concrete slabs, but we can also make changes. For most jobs, the slab's surface needs to be worn down and then a layer of concrete is added to cover it and make it last longer. People often do this on a patio or driveway. The pavement will also be sealed for longer so that it doesn't need more expensive repairs in the future. This is just for looks. The Peoria Concrete Co. is always trying to give you the best concrete service.
              </p>
              
              <p className="text-lg">
                There is only one concrete company in Peoria, and they will help you make an easy choice whether you want to build a new road or fix up your old driveway. Giving the job to a professional is the best way to make sure you don't have any problems or injuries in the future. People use the term "flatwork concrete" to describe concrete that can be put down on a flat area. Our professionals can make the design of the concrete as easy as any other solid surface you have for the walk, porch, or ground entrance. Making a concrete patio can be hard work that should only be done by trained professionals. It's great that our concrete builders can make sure that your patio is made correctly to avoid problems or accidents. It's important to us that you get the best concrete service and upkeep because problems like cracking and breaking can happen because of the weather and how often people use your concrete area. Concrete buildings and services need to be made with great care and by workers who are well-trained and skilled. Cracks in concrete can lead to a number of problems. It could be because the original plan wasn't clear enough or because the ground has moved under the concrete. Cracks aren't too hard for a concrete worker to fix if there aren't any bigger problems.
              </p>
              
              <p className="text-lg">
                No matter if they are building, repairing, or reconstructing, our expert builders can do a full inspection to make sure that no damage can happen. Our business has a reputation for being on time and handling the job well, keeping track of goods, time limits, and changes in costs. We can promise you ease and safety based on what we've done for other clients in the past. Our professional workers are chosen based on how flexible they are, how well they run their businesses, and how well they treat customers. That's why we can offer these concrete construction and repair services with ease. Give us a call right now and let our skilled concrete builders do a job you'll be happy with! We're working hard to give you a good service at a price that everyone is happy with. Read what real, happy customers have said about our business. We can help you with any questions you have. Call us at 309-245-7421 right now to get a price. We're always happy to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section bg-concrete-light py-16 md:py-20" ref={(el) => addToRefs(el, 5)}>
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-concrete-dark opacity-0 animate-fade-in">
              Concrete Work in Peoria, Illinois
            </h2>
            
            <p className="text-lg mb-6 opacity-0 animate-fade-in animate-delay-100">
              We provide a range of services, such as:
              Pouring concrete on a slab or adding concrete to a driveway
            </p>
            
            <p className="text-lg mb-6 opacity-0 animate-fade-in animate-delay-200">
              Although we claim that we do concrete work, we are also very good at building decks and patios. We also do concrete for businesses. We'll do a great job no matter what service you need! Call us at (309) 245-7421 or look around our site to learn more about the concrete choices we have to offer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 opacity-0 animate-fade-in animate-delay-300">
              <div>
                <h3 className="text-xl font-bold mb-4 text-concrete-dark">Patios made of concrete</h3>
                <p className="mb-4">
                  If you want to build a patio in your backyard, concrete is a great choice. When you have a concrete patio, you can do a number of different things. Some of those are:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Concrete with Stains</li>
                  <li>Made with stamps</li>
                  <li>Colored pavement</li>
                </ul>
                <p>
                  Flatwork made of concrete is another choice you can use to build your patio. For small jobs, this type of concrete can be used for more than just patios. It can also be used for steps and roads. "Flatwork" is the name for this type of concrete because it can always be shaped into a flat plate.
                </p>
                <p className="mt-4">
                  All of these choices for flatwork are great for patios, even artistic concrete. You can be sure that your patio will look great no matter what you decide. You can call us today to find out more about the price and other payment choices.
                </p>
                
                <div className="mt-6">
                  <img 
                    src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png" 
                    alt="Beautiful stamped concrete patio with outdoor furniture, showing the aesthetic appeal and functionality of our decorative concrete solutions" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-concrete-dark">Concrete for Decoration</h3>
                <p className="mb-4">
                  You could have different kinds of artistic concrete put down on your driveway, sidewalk, patio, or home that you choose. What we offer are three different types of concrete: plain concrete, stamped concrete, and dyed concrete.
                </p>
                
                <h3 className="text-xl font-bold mb-4 mt-8 text-concrete-dark">Concrete for driveway</h3>
                <p className="mb-4">
                  If you have a concrete driveway already but want to make your home look a little more interesting from the street, you can try the following:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>How to Finish Concrete</li>
                  <li>Coating for Concrete</li>
                </ul>
                <p className="mt-4">
                  No matter what kind of concrete services you need in Peoria, IL, we can take care of them right away, whether they are for a business or a home. Anywhere we are, our team can answer any other questions you may have about the price of concrete or other choices.
                </p>
                
                <div className="mt-6">
                  <img 
                    src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png" 
                    alt="Smooth, perfectly finished concrete driveway enhancing a residential property, demonstrating our quality workmanship" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-12 opacity-0 animate-fade-in animate-delay-400">
              <h3 className="text-xl font-bold mb-4 text-concrete-dark">How to Stamp and Stain Concrete</h3>
              <p className="mb-4">
                The pattern is pressed into stamped concrete, which is a type of artistic concrete. Stamping can be done on any type of cement, like on your sidewalk, walkway, or porch. We can stamp any pattern you want on any color of wall around your house.
              </p>
              <p className="mb-4">
                There are also choices for sealing.
              </p>
              <p className="mb-4">
                Fill out our quick concrete price form to find out how much a patio will cost or to ask any other question you may have.
              </p>
              <p className="mb-4">
                If you want to change the color of your concrete, painting could be a good choice. Anyone who wants to change the color of a piece of concrete can stain it.
              </p>
              <p className="mb-4">
                Many types of artistic concrete can be used to make different parts of your home look better. One of the best ways to protect your home from damage from heavy foot traffic is to put down something strong like concrete on the floors, steps, counters, or walkways.
              </p>
              <p className="mb-4">
                If you need concrete in your yard or somewhere else around your house, Peoria Concrete Co. is ready to answer any questions you may have. Call us right now!
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-fade-in animate-delay-500">
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
      <section className="relative py-16 bg-concrete-dark text-white overflow-hidden" ref={(el) => addToRefs(el, 6)}>
        <div className="container px-6 mx-auto relative z-10 text-center">
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
      <section className="section py-16" ref={(el) => addToRefs(el, 7)}>
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

export default Index;
