
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const MortonIL = () => {
  const handleCallNow = () => {
    window.location.href = "tel:3092457421";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Concrete Contractors - Stamped Company - Morton, IL</title>
        <meta 
          name="description" 
          content="Reliable concrete contractors in Morton! Our concrete company specializes in foundations, sidewalks, and stamped concrete. Call 309-245-7421 for a quote!" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Concrete Company and Concrete Contractors in Morton, IL
              </h1>
              <p className="text-lg mb-8">
                We provide a variety of concrete contracting services in Morton that may be completed in or near your house. You've come to the perfect spot if you want to add additional concrete to your house!
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
                alt="Professional concrete contractors pouring a new concrete driveway in Morton, IL" 
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
                Morton is home to several top-notch concrete businesses. Peoria Concrete Co., your neighborhood concrete firm, is committed to handling whatever work you need done around your house.
              </p>
              <p className="text-lg mb-6">
                We think we are the ideal pouring business for you, regardless of whether you are searching for a small-job concrete company or a commercial concrete company with a big order to fill.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">When examining a driveway, patio, or deck</h2>
              <p className="text-lg mb-6">
                You want to be sure that the top concrete business in your area is there to assist you with your needs. We advise you to obtain a few hard estimates before making any judgments because it is impossible to determine which firm is superior than another without having a face-to-face encounter. Yes, we do want you to compare prices. We want you to examine your alternatives because we are confident in our products and our first-rate service.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png" 
                  alt="Freshly poured concrete patio with decorative finish in Morton, Illinois" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg">
                  To discuss your concrete issues that need to be resolved with our concrete professionals, give Peoria Concrete Co. a call right now! We will provide you with a trustworthy cost estimate and quickly hammer out any concrete work. With years of practical concrete knowledge, our team of concrete specialists can handle any task.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">We at Peoria Concrete Co. are dedicated</h2>
              <p className="text-lg mb-6">
                We at Peoria Concrete Co. are dedicated to providing the best concrete contracting services to the residents of Morton, Illinois, and the surrounding areas. Our team of local concrete builders can handle all of your concrete designs, whether they are for homes or businesses. From roads and walkways to concrete flatwork, we provide a variety of projects.
              </p>
              <p className="text-lg mb-6">
                At Peoria Concrete Co., it is imperative that we meet your property's vision and beyond your expectations for every project. By providing clear and upfront rates for all of our services, we make sure that we offer fair prices for each of them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">To determine if a repair is necessary</h3>
                  <p>
                    A concrete contractor from our company will visit and inspect your base. While conducting an evaluation, we add the cost of any services that ought to be covered, such painting or concrete stamping. Any other products we provide will have their prices listed.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3">Peoria Concrete Co. is the primary concrete firm</h3>
                  <p>
                    If you want to build a new road or need guidance on repairing your current driveway, Peoria Concrete Co. is the primary concrete firm that will make your choice simple. It's crucial to assign the designated task to an expert.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Morton, Illinois Concrete Services</h3>
              <p className="text-lg mb-6">Among the various services we provide are:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pouring concrete or slab concrete in a driveway</li>
              </ul>
              <p className="text-lg mb-6">
                Even though we promote our concrete services, we also have extensive expertise building patios and decks. We also provide commercial concrete services. You may rely on us to do any task you require correctly!
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Patios Made of Concrete</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg mb-4">
                    For a patio in your backyard, concrete is a great choice. There are several alternatives available to you when it comes to a concrete patio. These consist of:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Concrete that has been stained</li>
                    <li>Concrete that has been stamped</li>
                    <li>Concrete with color</li>
                  </ul>
                  <p className="text-lg">
                    For the building of your patio, concrete flatwork is an additional choice. In addition to patios, this type of small task concrete may be utilized for driveways or sidewalks.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png" 
                    alt="Beautiful stamped concrete patio design in Morton with decorative patterns" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Ornamental Concrete</h2>
              <p className="text-lg mb-6">
                You may have a variety of ornamental concrete kinds put in your driveway, patio, sidewalk, or house. Below is a list of the three alternatives we provide: stained concrete, stamped concrete, and stamped concrete.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Concrete driveway</h3>
              <p className="text-lg mb-4">
                You might consider the following treatments if you currently have a concrete driveway but would like to give your house a little flair or curb appeal:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Finishing Concrete</li>
                <li>Coating for Concrete</li>
              </ul>
              
              <p className="text-lg mb-6">
                We can take care of any type of concrete service you want in Morton, IL, whether it be for a business or a residence, as quickly as feasible.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Concrete That Has Been Stamped</h2>
              <p className="text-lg mb-6">
                One kind of ornamental concrete that has a pattern etched on it is called stamped concrete. You may stamp any type of cement, including your porch, driveway, and patio. We can stamp your property with whatever design you like, regardless of the color you choose.
              </p>
              <p className="text-lg mb-4">There are various choices for sealing.</p>
              <p className="text-lg mb-6">
                Use our rapid concrete estimate form to get a quote for a patio or any other queries you may have.
              </p>
              <p className="text-lg mb-6">
                Staining might be a fantastic choice for you if you want to alter the color of your concrete. Any concrete slab that you wish to modify in color can be stained.
              </p>
              <p className="text-lg mb-6">
                Your home's various spaces may be made more lively with a variety of decorative concrete types. One of the greatest methods to protect your property from damage from heavy traffic is to install something as durable as concrete on the driveways, sidewalks, floors, and countertops!
              </p>
              <p className="text-lg font-medium">
                Peoria Concrete Co. is prepared to respond to any inquiries you may have regarding concrete in the yard or other sections of the house. Call us at 309-245-7421 right now!
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
                      <span className="font-medium">Morton, IL Service Area</span>
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
                  alt="Concrete contractors working on a stamped concrete project in Morton, Illinois" 
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 2 */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Call us today for your free estimate</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our concrete experts are ready to help with your project in Morton, IL
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
        <h2 className="text-3xl font-bold mb-6 text-center">Our Service Area in Morton, IL</h2>
        <div className="w-full rounded-lg overflow-hidden shadow-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96924.69216388861!2d-89.5516203124934!3d40.610104270641564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880aff16eb9866d3%3A0x8ea214870676d2df!2sMorton%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1743013543155!5m2!1sen!2sma" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Morton IL Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default MortonIL;
