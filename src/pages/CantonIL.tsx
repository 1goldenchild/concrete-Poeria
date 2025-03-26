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

const CantonIL = () => {
  const handleCallNow = () => {
    window.location.href = "tel:3092457421";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Concrete Contractors - Stamped Company - Canton, IL</title>
        <meta 
          name="description" 
          content="Expert concrete contractors in Canton! From decorative patios to durable driveways, our concrete company does it all. Call 309-245-7421 today!" 
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
              <BreadcrumbPage>Canton, IL</BreadcrumbPage>
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
                <Link to="/" className="hover:text-primary/90">Concrete Contractors</Link> and Concrete Company in Canton, IL
              </h1>
              <p className="text-lg mb-8">
                From right here in Canton, we provide a number of various concrete contracting services including <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">decorative options</Link>, <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveways</Link>, and <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">patio installations</Link>.
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
                src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png" 
                alt="Professional concrete contractors working on a residential project in Canton, IL" 
                className="rounded-xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="bg-primary/90 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Call us today for your free estimate</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Get started on your concrete project with a no-obligation quote from our expert team
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={handleCallNow}
          >
            Call Us Now: 309-245-7421
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-lg mb-6">
                Many great <Link to="/" className="text-primary hover:underline">concrete businesses</Link> exist right now in Canton. Peoria Concrete Co., your neighborhood concrete business, is committed to handling any of the work you would want done around your house.
              </p>
              <p className="text-lg mb-6">
                We think we are the ideal pouring business for you whether your needs are for a tiny project concrete company or a commercial concrete company with a big order to complete.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">When considering a deck, patio, or driveway</h2>
              <p className="text-lg mb-6">
                You wish to ensure that the finest concrete business close by will assist you with your requirements! We advise you obtain many concrete quotes before you make any choices as knowing how good one firm is over the other without meeting them in person is impossible. Indeed, we would want you to compare stores. We believe in our goods and our great service and want you to discover what your alternatives are.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png" 
                  alt="Freshly poured and finished concrete driveway in Canton by our expert team" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg">
                  Call Peoria Concrete Co. now to handle any concrete issues requiring completion by our concrete professionals! A dependable cost estimate can help you quickly plan out any concrete task. With years of real concrete expertise, our staff of concrete specialists can handle everything.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Peoria Concrete Co.</h2>
              <p className="text-lg mb-6">
                We are dedicated to providing all Canton, Illinois' residents and neighboring towns with the best quality concrete contracting services. Our team of concrete contractors is locally located for all your commercial and residential concrete projects. We provide a spectrum of various projects from concrete flatwork to roads and pathways.
              </p>
              <p className="text-lg mb-6">
                We must meet the vision you have for your property and beyond your criteria for every job here at Peoria Concrete Co. By providing upfront and clear charges for all of our services, we guarantee fair pricing for each of our offerings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">To determine if a repair is required</h3>
                  <p>
                    One of our concrete contractors will visit and inspect your foundation. Our evaluation includes the cost of any services that have to be included, such concrete stamping or painting. Any additional goods we offer will be priced.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Peoria Concrete Co. is the primary concrete firm</h3>
                  <p>
                    If you want to build a new road or need guidance on restoring your current driveway, Peoria Concrete Co. is the primary concrete firm that will simplify your choice.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Canton, Illinois Concrete Services</h3>
              <p className="text-lg mb-6">Our many offerings include:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">Concrete Driveways</Link></li>
                <li><Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">Concrete Patios</Link></li>
                <li><Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">Stamped Concrete</Link></li>
                <li><Link to="/concrete-crack-repair-peoria-il" className="text-primary hover:underline">Concrete Repair</Link></li>
              </ul>
              <p className="text-lg mb-6">
                Though we promote our concrete services, we are also quite seasoned patio contractors & deck builders. We also create concrete for businesses. Whatever service you want, you can rely on us to complete the task correctly!
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Patios Made of Concrete</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg mb-4">
                    When building a patio for your backyard, concrete is a fantastic choice. A concrete patio offers you many different choices. Amongst them are:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Concrete with stains</li>
                    <li>Concrete stamped</li>
                    <li>Colored Cement</li>
                  </ul>
                  <p className="text-lg">
                    Another choice for building your patio is concrete flatwork. Not just patios but even sidewalks or driveways may benefit from this sort of little work concrete.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
                    alt="Beautiful stamped concrete patio with decorative patterns installed in Canton" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Ornamental Concrete</h2>
              <p className="text-lg mb-6">
                You might have many various kinds of ornamental concrete put into your driveway, patio, sidewalk, or house. We provide three distinct choices: stamped, stained concrete, all of which are detailed below.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Concrete for Driveways</h3>
              <p className="text-lg mb-4">
                You could think about the following treatments if your concrete driveway is already in place but you want to give your house some flair or curb appeal:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Finishing Concrete</li>
                <li>Coating Concrete</li>
              </ul>
              
              <p className="text-lg mb-6">
                Whether your needs are commercial or residential, various concrete services in Canton, IL will determine what you require. Regardless of the sort, we can do it as quickly as feasible.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Stamped & Stamped Cement</h2>
              <p className="text-lg mb-6">
                A kind of ornamental concrete called stamped concrete has a pattern stamped onto the concrete. Any sort of cement may be stamped, including spots like your patio, driveway, or porch. We can stamp any sort of pattern you wish on any hue around your house.
              </p>
              <p className="text-lg mb-4">There are also sealing choices.</p>
              <p className="text-lg mb-6">
                Fill out our rapid concrete quote form for patio pricing or any other inquiries you may have.
              </p>
              <p className="text-lg mb-6">
                Staining might be a wonderful choice for you if you wish to alter the hue of your concrete. Any slab of concrete you choose to have altered in color may be stained.
              </p>
              <p className="text-lg mb-6">
                All the various sorts of ornamental concrete might liven up the several places around your house. One of the greatest methods for you to maintain your house secure from high-traffic damage is installing anything as strong as concrete on the flooring, walkways, countertops, or driveways.
              </p>
              <p className="text-lg font-medium">
                Peoria Concrete Co. is prepared to respond to any queries you may have for any concrete by the yard or other locations around the house. Call us now at 309-245-7421!
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="shadow-lg overflow-hidden">
                <div className="bg-primary text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Contact Us</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">309-245-7421</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium">Canton, IL Service Area</span>
                    </div>
                    <Button className="w-full mt-4" onClick={handleCallNow}>
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg overflow-hidden">
                <div className="bg-primary text-white py-4 px-6">
                  <h3 className="text-xl font-bold">Our Services</h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Concrete Driveways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Stamped Concrete</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Concrete Patios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Concrete Repair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Commercial Concrete</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png" 
                  alt="Professional concrete contractors pouring a decorative concrete patio in Canton, Illinois" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Quality Concrete Work</h3>
                  <p className="mb-4">
                    Our experienced team ensures every project meets the highest standards of quality and durability.
                  </p>
                  <Button variant="outline" className="w-full" onClick={handleCallNow}>
                    Get a Free Quote
                  </Button>
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
                      <Link to="/concrete-contractor/normal-il" className="hover:text-primary">Normal, IL</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <Link to="/concrete-contractor/morton-il" className="hover:text-primary">Morton, IL</Link>
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

      {/* CTA Banner 2 */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Call us today for your free estimate</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our concrete experts are ready to help with your project in Canton, IL
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={handleCallNow}
          >
            Call Us Now: 309-245-7421
          </Button>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Service Area in Canton, IL</h2>
        <div className="w-full rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96988.65412353975!2d-90.18367123765151!3d40.56598617959334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e02a2f30382fcd%3A0x943021d12ea8a059!2sCanton%2C%20IL%2061520%2C%20USA!5e0!3m2!1sen!2sma!4v1743013738065!5m2!1sen!2sma" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Canton IL Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default CantonIL;
