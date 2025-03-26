import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const NormalIL = () => {
  const phoneNumber = "309-245-7421";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Contractors | Concrete Company | Normal | IL</title>
        <meta
          name="description"
          content="Your trusted concrete company in Normal! Our skilled concrete contractors specialize in driveways, patios, and repairs. Call 309-245-7421 for a quote!"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-concrete-dark py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-hero-pattern opacity-70"
          style={{ 
            backgroundImage: `url('/lovable-uploads/24d24778-fa3e-4225-9fd6-a06c5ce8605d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Concrete Company and Contractors in Normal, IL
            </h1>
            <p className="text-lg text-white mb-8">
              In Normal, we provide a variety of <Link to="/concrete-driveway-peoria-il" className="text-white hover:underline">concrete driveway</Link> and <Link to="/concrete-patio-peoria-il" className="text-white hover:underline">concrete patio</Link> contracting services for your residence and its surroundings.
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
              If you like to incorporate additional concrete into your residence, you have arrived at the appropriate location! Numerous outstanding concrete firms exist in Normal. <Link to="/" className="text-accent-blue hover:underline">Peoria Concrete Co.</Link>, your local concrete provider, is committed to managing any projects you choose to do at your residence.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Whether you want a small-scale concrete contractor or a commercial concrete firm capable of fulfilling substantial orders, we assert that we are the ideal pouring business for your needs.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:600ms]">
            <img 
              src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
              alt="Professional concrete contractors working on a smooth concrete surface installation in Normal, IL" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          When examining a deck, patio, or driveway
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png" 
              alt="Beautifully finished stamped concrete patio with outdoor furniture in Normal, Illinois" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              It is essential to identify the most reputable <Link to="/" className="text-accent-blue hover:underline">concrete firm</Link> in your vicinity to address your requirements. Given the inability to assess the superiority of one organization over another without personal interaction, we advise obtaining many definitive estimates prior to making any judgments.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Contact <Link to="/" className="text-accent-blue hover:underline">Peoria Concrete Co.</Link> immediately to resolve your <Link to="/concrete-crack-repair-peoria-il" className="text-accent-blue hover:underline">concrete issues</Link> with our skilled professionals! We will provide you with a dependable cost estimate and promptly finalize any specific tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden animate-fade-in opacity-0 [animation-delay:500ms] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/3dd72073-e4b2-4a83-a8ed-76f04815747a.png" 
                alt="Freshly poured concrete driveway with smooth finish in a Normal, IL residential area" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-concrete-dark">
                <Link to="/concrete-driveway-peoria-il" className="hover:text-accent-blue">Concrete Driveways</Link>
              </h3>
              <p className="text-gray-700">
                Your choice of concrete design is facilitated by our competitive pricing and prompt, high-quality service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden animate-fade-in opacity-0 [animation-delay:600ms] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/8f3657fc-e104-4597-ab35-96266deb2d76.png" 
                alt="Elegant stamped concrete patio with decorative pattern and outdoor fireplace in Normal" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-concrete-dark">
                <Link to="/concrete-patio-peoria-il" className="hover:text-accent-blue">Concrete Patios</Link>
              </h3>
              <p className="text-gray-700">
                Our team of seasoned concrete builders is pleased to install new concrete driveways or patios.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden animate-fade-in opacity-0 [animation-delay:700ms] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png" 
                alt="Commercial concrete flatwork with precise finish for a business property in Normal, IL" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-concrete-dark">Commercial Concrete</h3>
              <p className="text-gray-700">
                We provide a comprehensive range of concrete services for both residential and commercial structures.
              </p>
            </CardContent>
          </Card>
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

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          At Peoria Concrete Co., we are dedicated to providing the residents of Normal, Illinois
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:300ms]">
            <p className="text-lg mb-6 text-gray-700">
              And neighboring areas with superior concrete contracting services. Our team of local concrete contractors is available for all your home and commercial concrete projects. We provide a variety of improvements, including concrete flatwork, walkways, and roadways. It is essential for us to fulfill your vision for your property and to surpass your expectations for all projects at Peoria Concrete Co.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We guarantee fair pricing for each of our services by presenting transparent and upfront fees. We acknowledge that each property possesses distinct requirements and specifications; thus, we assess and tailor our services to meet your specific demands. At Peoria Concrete Co., we highly value the significance of aesthetically pleasing and functional living environments.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            <img 
              src="/lovable-uploads/20580a80-2664-4e8a-aada-daa8dafb6d41.png" 
              alt="Concrete contractors working on a residential foundation project in Normal, Illinois" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Determining the Necessity of Repairs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:300ms]">
            <img 
              src="/lovable-uploads/f3755294-0c69-4c8e-a07b-1770275194b8.png" 
              alt="Concrete repair specialists fixing cracks in a damaged concrete surface in Normal" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              A concrete contractor will assess your foundation. We add the cost of any services that should be incorporated, such as concrete stamping or painting, during the evaluation. The price of any additional goods we offer will be specified. While it is essential to maintain concrete slabs, new alterations might be implemented.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Most jobs entail abrading the slab's surface, then applying a layer of concrete for coverage, and assuring its durability. This is often performed on a driveway or patio. The concrete will be coated for an extended period to prevent costly repair in the future, mostly for aesthetic purposes. Peoria Concrete Co. is committed to providing you with the finest concrete services.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-concrete-dark animate-fade-in opacity-0 [animation-delay:200ms]">
          Peoria Concrete Co. is the premier concrete firm
        </h3>

        <div className="mb-12">
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:300ms]">
            That simplifies your choice for constructing a new highway or seeking guidance on rehabilitating your current driveway. To prevent potential issues or injuries in the future, it is essential to assign the designated task to a professional. Flatwork concrete refers to the capacity of concrete to be applied on a level surface. Our specialists simplify concrete design to match any solid surface suitable for patios, walkways, and ground entryways.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:400ms]">
            Constructing a concrete patio is a sophisticated endeavor that needs the expertise of competent specialists. The proficiency of our concrete builders in constructing your patio to prevent future complications or mishaps is really gratifying. We focus on ensuring you receive optimal concrete services and maintenance, as weather conditions and daily usage of your concrete surfaces can lead to issues such as cracking or damage.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:500ms]">
            Exceptional manufacturing and proficiently trained artisans are crucial for the integrity of concrete structures and services. Cracking concrete can lead to several complications. The issue may stem from inadequate execution in the initial design or alterations in the substrate underneath the concrete. For a concrete contractor, addressing cracks is a straightforward task, provided there are no underlying issues.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg mb-12 animate-fade-in opacity-0 [animation-delay:600ms]">
          <h3 className="text-2xl font-bold mb-4 text-concrete-dark">
            Concrete Services in Normal, Illinois
          </h3>
          <p className="text-lg mb-4 text-gray-700">
            We provide a variety of services, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 space-y-2">
            <li>Concrete Placement</li>
            <li>Slab Concrete Placement</li>
            <li>Driveway Placement</li>
          </ul>
          <p className="text-lg text-gray-700">
            While we promote our concrete services, we are also very skilled deck and patio contractors. We also provide commercial concrete services. Regardless of the service required, you can rely on us to do the task proficiently.
          </p>
          <div className="mt-6">
            <Button 
              onClick={handleCallClick} 
              className="bg-accent-blue hover:bg-accent-blue/90 text-white"
            >
              <Phone className="mr-2 h-4 w-4" /> Contact us: {phoneNumber}
            </Button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Concrete Patios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:300ms]">
            <p className="text-lg mb-6 text-gray-700">
              Concrete is an exceptional choice for constructing a patio in your backyard. Numerous alternatives are available for a concrete patio. These encompass:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
              <li>Stained Concrete</li>
              <li>Imprinted Concrete</li>
              <li>Pigmented Concrete</li>
            </ul>
            <p className="text-lg mb-6 text-gray-700">
              Concrete flatwork represents an alternative for your patio development. This type of minor concrete work is suitable for patios, sidewalks, and driveways. The term "flatwork" derives from the ability of concrete to create a flat, horizontal surface.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            <img 
              src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png" 
              alt="Decorative stamped concrete patio with seating area and landscaping in Normal, IL" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Ornamental Concrete
        </h2>

        <div className="mb-12">
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:300ms]">
            Various forms of ornamental concrete may be put in your home, sidewalk, patio, or driveway. We provide three distinct options: stamped concrete, tinted concrete, and the details are enumerated below.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-concrete-dark animate-fade-in opacity-0 [animation-delay:200ms]">
          Concrete for Driveways
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:300ms]">
            <p className="text-lg mb-6 text-gray-700">
              If you possess an existing concrete driveway and wish to enhance its aesthetic appeal, consider the following treatments:
            </p>
            <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
              <li>Concrete Finishing</li>
              <li>Concrete Coating</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg animate-fade-in opacity-0 [animation-delay:400ms]">
            <img 
              src="/lovable-uploads/558e0f4d-4fc0-44be-ac14-5e735cc4772c.png" 
              alt="Elegant paved concrete pathway with landscape lighting in a Normal residential property" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-concrete-dark border-b pb-2 animate-fade-in opacity-0 [animation-delay:200ms]">
          Stamped and Stamped Concrete
        </h2>

        <div className="mb-12">
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:300ms]">
            Stamped concrete is a decorative kind of concrete featuring an imprinted motif. Areas such as your patio, driveway, or veranda may be imprinted with any type of cement. We can imprint any design on the surface of your property, regardless of the color you desire.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:400ms]">
            Sealing alternatives are also accessible.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:500ms]">
            For inquiries regarding patio costs or any other questions, please complete our rapid concrete estimate form.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:600ms]">
            If you like to alter the color of your concrete, staining may be an excellent choice. Any slab of concrete that you wish to alter in color can be stained.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:700ms]">
            Various types of decorative concrete can be used to enhance the aesthetic appeal of different locations around your house. Installing durable concrete on floors, sidewalks, countertops, or driveways is an effective method to protect your house from damage caused by excessive traffic.
          </p>
          <p className="text-lg mb-6 text-gray-700 animate-fade-in opacity-0 [animation-delay:800ms]">
            Peoria Concrete Co. is prepared to address any inquiries regarding concrete by the yard or other sections of your house. Contact us today at {phoneNumber}!
          </p>
        </div>

        {/* Other Locations We Serve */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6 text-concrete-dark">Other Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/concrete-contractor/champaign-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Champaign, IL</Link>
            <Link to="/concrete-contractor/Bloomington-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Bloomington, IL</Link>
            <Link to="/concrete-contractor/eureka-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Eureka, IL</Link>
            <Link to="/concrete-contractor/morton-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Morton, IL</Link>
            <Link to="/concrete-contractor/canton-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Canton, IL</Link>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="my-12 animate-fade-in opacity-0 [animation-delay:900ms]">
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
        </div>
      </div>
    </div>
  );
};

export default NormalIL;
