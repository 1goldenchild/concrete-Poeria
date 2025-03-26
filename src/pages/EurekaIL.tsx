import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
              From our location in Eureka, we provide a variety of <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">concrete driveway</Link> and <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">concrete patio</Link> contracting services that may be executed in or around your residence.
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
              If you like to augment the quantity of concrete in your residence, you are in the right place! Numerous exemplary concrete enterprises now operate in Eureka. <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link>, your local concrete enterprise, is dedicated to managing any tasks you want for your residence.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We believe we are the optimal <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">concrete service provider</Link> for your requirements, whether for a small-scale project or a large commercial order.
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
              You want to guarantee that the premier <Link to="/" className="text-primary hover:underline">concrete company</Link> in your vicinity will fulfill your needs. We recommend acquiring many concrete estimates prior to making any decisions, as it is hard to assess the superiority of one business over another without an in-person encounter.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Contact <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link> immediately to address any <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">concrete concerns</Link> that necessitate resolution by our skilled technicians! A reliable cost estimate facilitates the efficient planning of any real work.
            </p>
          </div>
        </div>

        {/* Other Areas We Serve Section */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6">Other Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/concrete-contractor/champaign-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Champaign, IL</Link>
            <Link to="/concrete-contractor/Bloomington-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Bloomington, IL</Link>
            <Link to="/concrete-contractor/normal-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Normal, IL</Link>
            <Link to="/concrete-contractor/morton-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Morton, IL</Link>
            <Link to="/concrete-contractor/canton-il" className="bg-gray-100 hover:bg-gray-200 p-3 rounded text-center transition-colors">Canton, IL</Link>
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

        <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
          Peoria Concrete Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              We are committed to delivering superior <Link to="/" className="text-primary hover:underline">concrete contracting services</Link> to the citizens of Eureka, Illinois, and surrounding communities. Our team of <Link to="/" className="text-primary hover:underline">concrete contractors</Link> is situated locally to address all your business and residential concrete needs. We provide a range of projects, including concrete flatwork, roadways, and paths.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              We must fulfill your vision for your property and exceed your standards for every project at <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link> We ensure equitable pricing for all our services by presenting transparent and explicit rates in advance. We recognize that each property possesses unique requirements and specifications; thus, we assess and analyze your particular demands and tailor every service accordingly.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              At <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link>, we highly recognize the importance of aesthetically pleasing and functional living environments. Concrete is an excellent option for both architectural and aesthetic appeal; it is also a versatile, durable material that needs low maintenance and care. <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">Concrete surfaces and patios</Link> are optimal environments for withstanding natural elements and heavy foot traffic while preserving a pristine visual appeal.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              All <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">concrete patios</Link> and surfaces are constructed precisely, securely, and without incidents utilizing advanced tools and highly skilled professionals. As a regional <Link to="/" className="text-primary hover:underline">concrete contractor</Link> in Eureka, we provide a variety of concrete services. Your <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">concrete driveway</Link>, patio, garage, or any designated area will be repaired with enhanced concrete. Our licensed concrete contractors are capable of constructing concrete structures.
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
              A <Link to="/" className="text-primary hover:underline">concrete contractor</Link> will assess your foundation. Our assessment encompasses the expenses associated with necessary services, such as <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">concrete stamping</Link> or painting. All supplementary things we provide will be charged accordingly. While we must maintain concrete slabs, new modifications are feasible. Most tasks need the abrasion of the slab surface, followed by the application of a concrete layer to ensure durability. This is often conducted on a <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link> or <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link>. This serves an aesthetic purpose; the concrete will furthermore be protected for an extended period to avert more expensive <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">repairs</Link> in the future. <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link> consistently strives to inform you of the best concrete services available.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              For the construction of a new road or assistance in restoring your existing <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link>, <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link> is the foremost <Link to="/" className="text-primary hover:underline">concrete company</Link> that will facilitate your decision. Engaging an expert for the specified work is crucial to ensure the prevention of potential complications or injuries in the future. Flatwork concrete refers to the ability of concrete to be placed on a horizontal plane. Our experts streamline the concrete design to correspond with whatever durable surface you possess for the entrance, walkway, and <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link>. Only proficient professionals can execute the challenging process of constructing a concrete patio.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              It is quite satisfying to see how proficiently our <Link to="/" className="text-primary hover:underline">concrete builders</Link> ensure that your patio is meticulously made to avert mishaps or issues. Considering the weather conditions and the continuous utilization of your concrete area, which may result in issues such as cracking or fracturing, we prioritize providing you with optimal concrete services and maintenance. The integrity of concrete structures and services relies on high productivity and skilled, knowledgeable artisans. Concrete fissures can result in several complications. The issue may arise from improper adherence to the original design or alterations in the substrate underneath the concrete.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              For a <Link to="/" className="text-primary hover:underline">concrete contractor</Link>, assuming no other complications arise, cracks are quite straightforward to <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">repair</Link>. Our skilled experts can do a comprehensive inspection—be it construction, repair, or reconstruction—to ensure that any potential damage is mitigated. Our organization is reliable in adhering to deadlines, efficiently handling tasks as time dictates, while balancing time limits, pricing variations, and product availability. Our previous engagements with other clients furnish us with a roster that ensures both simplicity and safety.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our proficient contractors are selected based on their versatility, efficacy, performance, and client service. Consequently, we are pleased to provide these installation and <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">concrete repair services</Link>. Contact us immediately at {phoneNumber} and permit our skilled <Link to="/" className="text-primary hover:underline">concrete professionals</Link> to execute a work that will satisfy you! We aim to provide satisfactory service at an agreed-upon price that satisfies all parties. Examine the genuine testimonials from our satisfied clients regarding our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Concrete Patios</h3>
                <p className="text-gray-600">
                  Concrete is an excellent option for constructing a <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link> in your backyard. Options include stained concrete, <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">stamped concrete</Link>, and cement with color additives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Decorative Concrete</h3>
                <p className="text-gray-600">
                  Numerous types of decorative concrete may be installed in your <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link>, <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link>, sidewalk, or residence with three separate options available.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Stamped Cement</h3>
                <p className="text-gray-600">
                  <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">Stamped concrete</Link> features patterns imprinted into its surface, suitable for patios, driveways, or porches in any color throughout your residence.
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
              <li><Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">Concrete Placement</Link></li>
              <li>Slab Concrete Placement</li>
              <li><Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">Driveway Placement</Link></li>
            </ul>
            <p className="text-lg mb-6 text-gray-700">
              While we advocate for our concrete services, we are also experienced <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio contractors</Link> and deck builders. We also manufacture concrete for enterprises. You can depend on us to do the assignment accurately, regardless of the service required. Contact us at {phoneNumber} for further details on our concrete options, or visit our <Link to="/" className="text-primary hover:underline">website</Link> for extra information.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
            Concrete Patios
          </h2>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              Concrete is an excellent option for constructing a <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link> in your backyard. A concrete patio provides several options. Included among them are:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-700">
              <li>Stained concrete</li>
              <li><Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">Stamped concrete</Link></li>
              <li>Cement with Color Additives</li>
            </ul>
            <p className="text-lg mb-6 text-gray-700">
              An alternative option for constructing your patio is concrete flatwork. Not just patios, but even sidewalks and <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveways</Link> may benefit from this type of minor concrete <Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">repair</Link>. The term "flatwork" derives from the ability of concrete to consistently provide a flat horizontal surface.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Ornamental concrete and other flatwork options are all commendable selections for patios. Your selection of patio will provide a refined and polished aesthetic, irrespective of other factors. You may now contact us for further information on pricing and additional options.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
            Decorative Concrete
          </h2>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              Numerous types of decorative concrete may be installed in your <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link>, <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link>, sidewalk, or residence. We provide three separate options: <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">stamped concrete</Link>, tinted concrete, and more details are provided below.
            </p>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Concrete for Vehicular Access</h4>
            <p className="text-lg mb-6 text-gray-700">
              If your concrete <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link> is already installed and you wish to enhance your home's aesthetic appeal, consider the following treatments:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-700">
              <li>Concrete Finishing</li>
              <li>Concrete Coating</li>
            </ul>
            <p className="text-lg mb-6 text-gray-700">
              Various concrete services in Eureka, IL can assess your requirements, whether they are commercial or domestic. Irrespective of the type, we can do it as swiftly as possible. Our personnel at any of our locations may respond to any more queries you may have concerning concrete price or alternative options.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 animate-fade-in opacity-0 [animation-delay:200ms]">
            Stamped and Stamped Cement
          </h2>
          <div className="animate-fade-in opacity-0 [animation-delay:400ms]">
            <p className="text-lg mb-6 text-gray-700">
              <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">Stamped concrete</Link> is a type of decorative concrete that features a pattern imprinted into its surface. All types of cement can be stamped, including areas such as patios, driveways, or porches. We can imprint any desired design in any color throughout your residence.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              There are more sealing options.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Complete our expedited concrete quotation form for <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio</Link> pricing or any further queries you may possess.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Staining may be an excellent option if you desire to change the color of your concrete. Any concrete slab selected for color modification may be tinted.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Diverse types of decorative concrete may enhance various areas of your home. One of the most effective strategies to protect your home from wear due to excessive traffic is to put durable materials such as concrete on floors, pathways, worktops, or <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveways</Link>.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              <Link to="/" className="text-primary hover:underline">Peoria Concrete Co.</Link> is ready to address any inquiries regarding concrete by the yard or other residential areas. Contact us immediately at {phoneNumber}!
            </p>
          </div>
        </div>

        {/* Our Services Section - Limited to most important services */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6">Our Concrete Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/concrete-driveway-peoria-il" className="bg-gray-100 hover:bg-gray-200 p-4 rounded text-center transition-colors">
              <h4 className="font-semibold">Concrete Driveways</h4>
            </Link>
            <Link to="/concrete-patio-peoria-il" className="bg-gray-100 hover:bg-gray-200 p-4 rounded text-center transition-colors">
              <h4 className="font-semibold">Concrete Patios</h4>
            </Link>
            <Link to="/stamped-concrete-peoria-il" className="bg-gray-100 hover:bg-gray-200 p-4 rounded text-center transition-colors">
              <h4 className="font-semibold">Stamped Concrete</h4>
            </Link>
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
