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

const ChampaignIL = () => {
  const handleCallNow = () => {
    window.location.href = "tel:3092457421";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Concrete Contractors - Stamped Company - Champaign, IL</title>
        <meta 
          name="description" 
          content="Premier concrete contractors in Champaign! Our concrete company specializes in driveways, patios, and stamped concrete. Call 309-245-7421 for a quote!" 
        />
      </Helmet>

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
              <BreadcrumbPage>Champaign, IL</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <Link to="/" className="hover:text-primary/90">Concrete Company</Link> and Concrete Contractors in Champaign, IL
              </h1>
              <p className="text-lg mb-8">
                From stamped patterns to colored finishes, our <Link to="/stamped-concrete-peoria-il" className="text-primary hover:underline">stamped concrete</Link> services transform ordinary surfaces into extraordinary statements. We provide a range of <Link to="/concrete-patio-peoria-il" className="text-primary hover:underline">concrete patio</Link> and <Link to="/concrete-driveway-peoria-il" className="text-primary hover:underline">driveway</Link> solutions for homes and businesses throughout Champaign.
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
                src="/lovable-uploads/1d86b716-543a-4dcf-8c85-1ae9dbf0b7ac.png"
                alt="Professional concrete workers from Peoria Concrete Co. completing a high-quality concrete installation in Champaign, IL"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Today, many outstanding <Link to="/" className="text-primary hover:underline">concrete contractors</Link> are operating in Champaign. Your neighborhood concrete firm, Peoria Concrete Co., is dedicated to completing any task you need done around your house.
            </p>
            <p className="text-lg mb-6">
              We believe we are the ideal concrete company for you, whether you need a small project finished or have a large commercial order to complete.
            </p>
          </div>

          <Card className="bg-accent text-white border-none shadow-lg">
            <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0">Call us today for your free estimate</h3>
              <Button 
                onClick={handleCallNow} 
                variant="outline" 
                className="bg-white text-accent hover:bg-gray-100"
              >
                Call Us Now
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mt-10 mb-6">When you look out of a carport, patio, deck, or window</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img 
              src="/lovable-uploads/8f3657fc-e104-4597-ab35-96266deb2d76.png" 
              alt="Newly completed concrete patio installation by Peoria Concrete Co. in Champaign, showing smooth finish and expert craftsmanship"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="prose max-w-none">
              <p>
                You need to find the best concrete company near you to help you. You can't tell which company is better without meeting them, so get a few quotes before you decide. That's right, we want you to look around. We are sure you will be happy with our goods and service, and we want you to know what other choices you have.
              </p>
              <p>
                Call Peoria Concrete Co. right now to deal with your concrete issues that need to be fixed by our concrete workers! We'll help you get a good idea of how much it will cost and get to work right away on some concrete work. Our team of concrete pros has years of real-world knowledge and can do it all.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              For many people, concrete is a great addition to their home. Our low prices and quick, high-quality service will help you choose a concrete style. We can help you whether you need a small team of concrete workers or a large team for a business project. Our crew of skilled concrete builders loves putting in new driveways and decks made of concrete.
            </p>
            <p>
              At Peoria Concrete Co., we do simple things like concrete driveways, flatwork, patios, walks, and pathways. Through the use of strong and modern materials, we offer a wide range of skilled concrete services that are made to last and need little care. Our concrete services cover all kinds of buildings, from homes to businesses. Please don't hesitate to call one of our concrete workers at 309-245-7421 if you need help maintaining existing concrete or if you want to lay new concrete patios or walkways in Champaign or the surrounding area.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-6">At Peoria Concrete Co., we're dedicated to providing the best concrete contracting services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="prose max-w-none">
              <p>
                At Peoria Concrete Co., we're dedicated to providing the best concrete contracting services to the people of Champaign, Illinois, and the nearby towns. Our team of local concrete professionals can help you with all of your home and business concrete ideas. We build a lot of different things, from concrete flatwork to walks and roads.
              </p>
              <p>
                For all of your jobs here at Peoria Concrete Co., it's important that we meet your needs and go above and beyond what you expect. For each of our services, we make sure that our prices are fair by giving you clear and open prices for all of them. It's also important to us that each property has its own wants and requirements, which is why we look at yours carefully and tailor each service to your requirements.
              </p>
            </div>
            <img 
              src="/lovable-uploads/7469bd3e-c54b-4c9e-88a3-378c547c7614.png" 
              alt="Concrete contractors in Champaign IL working on a decorative concrete project showing attention to detail and precision"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p>
              The people here at Peoria Concrete Co. really understand how important it is to have well-designed and attractive living areas. Not only is concrete a great choice for its architectural and aesthetic value, it is also an adaptable and long-lasting material that only needs basic care. Concrete decks and floors are great for living areas because they can handle a lot of foot traffic and the weather without losing their nice look.
            </p>
            <p>
              We keep up-to-date tools and highly skilled workers to make sure that every concrete patio and surface is built properly, safely, and without any problems. As a Champaign concrete builder, we do a lot of different types of work with concrete. You can have us fix up your sidewalk, patio, shed, or anywhere else you want new, better concrete. Our concrete builders can build with concrete because they are allowed to do so.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">To find out if you need to fix something</h3>
          <div className="prose max-w-none">
            <p>
              A concrete worker from our company will come look at your base. The price of any services that should be included, like painting or marking concrete, is part of the review. We will say how much any other goods we offer costs. We need to take care of the concrete slabs, but we can also make changes. For most jobs, the slab's surface needs to be worn down and then a layer of concrete is added to cover it and make it last longer. People often do this on a patio or driveway. The pavement will also be sealed for longer so that it doesn't need more expensive repairs in the future. This is just for looks. The Peoria Concrete Co. is always trying to give you the best concrete service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <img 
              src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png" 
              alt="Stamped concrete patio installation by Peoria Concrete in Champaign showing decorative patterns and professional finishing"
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="prose max-w-none">
              <p>
                The main concrete business is Peoria Concrete Co. This will help you make a choice if you want to build a new road or get help fixing up your old driveway. Giving the job to a professional is the best way to make sure you don't have any problems or injuries in the future. People use the term "flatwork concrete" to describe concrete that can be put down on a flat area.
              </p>
              <p>
                Our professionals can make the design of the concrete as easy as any other solid surface you have for the walk, porch, or ground entrance. Making a concrete patio can be hard work that should only be done by trained professionals. It's great that our concrete builders can make sure that your patio is made correctly to avoid problems or accidents.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              It's important to us that you get the best concrete service and upkeep because problems like cracking and breaking can happen because of the weather and how often people use your concrete area. Concrete buildings and services need to be made with great care and by workers who are well-trained and skilled.
            </p>
            <p>
              Cracks in concrete can lead to a number of problems. It could be because the original plan wasn't clear enough or because the ground has moved under the concrete. Cracks aren't too hard for a concrete worker to fix if there aren't any bigger problems. No matter if they are building, repairing, or reconstructing, our expert builders can do a full inspection to make sure that no damage can happen.
            </p>
            <p>
              Our business has a reputation for being on time and handling the job well, keeping track of goods, time limits, and changes in costs. We can promise you ease and safety based on what we've done for other clients in the past. Our professional workers are chosen based on how flexible they are, how well they run their businesses, and how well they treat customers. That's why we can offer these concrete construction and repair services with ease.
            </p>
            <p>
              Do not wait! Call us at 309-245-7421 right now and let our skilled concrete builders do a job that you will be happy with! We're working hard to give you a good service at a price that everyone is happy with. Read what real, happy customers have said about our business.
            </p>
          </div>

          <Card className="bg-accent text-white border-none shadow-lg">
            <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0">Call us today for your free estimate</h3>
              <Button 
                onClick={handleCallNow} 
                variant="outline" 
                className="bg-white text-accent hover:bg-gray-100"
              >
                Call Us Now
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mt-10 mb-6">Help with Concrete in Champaign, Illinois</h2>
          <div className="prose max-w-none">
            <p>We provide a range of services, such as:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Pouring concrete on a slab or adding concrete to a driveway</li>
            </ul>
            <p className="mt-4">
              Although we claim that we do concrete work, we are also very good at building decks and patios. We also do concrete for businesses. We'll do a great job no matter what service you need! Call us at (309) 245-7421 or look around our site to learn more about the concrete choices we have to offer.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Patios made of concrete</h3>
          <div className="prose max-w-none">
            <p>
              If you want to build a patio in your backyard, concrete is a great choice. When you have a concrete patio, you can do a number of different things. Some of those are:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Concrete with Stains</li>
              <li>Made with stamps</li>
              <li>Colored pavement</li>
            </ul>
            <p className="mt-4">
              Flatwork made of concrete is another choice you can use to build your patio. For small jobs, this type of concrete can be used for more than just patios. It can also be used for steps and roads. "Flatwork" is the name for this type of concrete because it can always be shaped into a flat plate.
            </p>
            <p>
              All of these choices for flatwork are great for patios, even artistic concrete. You can be sure that your patio will look great no matter what you decide. You can call us today to find out more about the price and other payment choices.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-6">Concrete for Decoration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="prose max-w-none">
              <p>
                You could have different kinds of artistic concrete put down on your driveway, sidewalk, patio, or home that you choose. What we offer are three different types of concrete: plain concrete, stamped concrete, and dyed concrete.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">Concrete for driveway</h3>
              <p>
                If you have a concrete driveway already but want to make your home look a little more interesting from the street, you can try the following:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>How to Finish Concrete</li>
                <li>Coating for Concrete</li>
              </ul>
            </div>
            <img 
              src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png" 
              alt="Decorative stamped concrete driveway in Champaign showing pattern detail and professional installation by Peoria Concrete"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <p>
              No matter what kind of concrete services you need in Champaign, IL, we can take care of it right away, whether you need them for school or home. Anywhere we are, our team can answer any other questions you may have about the price of concrete or other choices.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">What Are Stamped and Stamped Concrete?</h3>
            <p>
              The pattern is pressed into stamped concrete, which is a type of artistic concrete. Stamping can be done on any type of cement, like on your sidewalk, walkway, or porch. We can stamp any pattern you want on any color of wall around your house.
            </p>
            <p>There are also choices for sealing.</p>
            <p>
              Fill out our quick concrete price form to find out how much a patio will cost or to ask any other question you may have.
            </p>
            <p>
              If you want to change the color of your concrete, painting could be a good choice. Anyone who wants to change the color of a piece of concrete can stain it.
            </p>
            <p>
              Many types of artistic concrete can be used to make different parts of your home look better. One of the best ways to protect your home from damage from heavy foot traffic is to put down something strong like concrete on the floors, steps, counters, or walkways.
            </p>
            <p>
              If you need concrete in your yard or somewhere else around your house, Peoria Concrete Co. is ready to answer any questions you may have. Call us at 309-245-7421 right now!
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png"
                  alt="Team of Peoria Concrete Co. contractors in Champaign IL working on a residential concrete project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Contact Us Today</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">309-245-7421</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">support@peoriaconcreteco.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">418 east avenue Peoria, IL 61603</p>
                    </div>
                    <Button 
                      onClick={handleCallNow} 
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Concrete Services</h3>
                <ul className="space-y-2">
                  <li className="p-2 bg-gray-50 rounded-md">Concrete Driveways</li>
                  <li className="p-2 bg-gray-50 rounded-md">Concrete Patios</li>
                  <li className="p-2 bg-gray-50 rounded-md">Stamped Concrete</li>
                  <li className="p-2 bg-gray-50 rounded-md">Concrete Repairs</li>
                  <li className="p-2 bg-gray-50 rounded-md">Decorative Concrete</li>
                  <li className="p-2 bg-gray-50 rounded-md">Commercial Concrete</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Experienced & Licensed Contractors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Quality Materials & Workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Competitive & Transparent Pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Timely Project Completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Excellent Customer Service</span>
                  </li>
                </ul>
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
                    <Link to="/concrete-contractor/canton-il" className="hover:text-primary">Canton, IL</Link>
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

      <div className="w-full mt-16 rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97642.19301374839!2d-88.3596848380927!3d40.112904353512526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd08dde97691b%3A0x30f57847b475bfcf!2sChampaign%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1742994836263!5m2!1sen!2sma" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ChampaignIL;
