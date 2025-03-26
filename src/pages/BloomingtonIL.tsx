
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const BloomingtonIL = () => {
  const handleCallClick = () => {
    window.location.href = "tel:309-245-7421";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Concrete Contractors | Concrete Company | Bloomington | IL</title>
        <meta
          name="description"
          content="Need a concrete company in Bloomington? Our dedicated concrete contractors provide reliable foundations, slabs, and more. Call 309-245-7421 now!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Concrete Contractors and Concrete Companies in Bloomington, Illinois
            </h1>
            <p className="text-xl mb-8">
              Expert concrete services for residential and commercial projects
            </p>
            <Button
              onClick={handleCallClick}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold"
            >
              <Phone className="mr-2" size={20} />
              Call Us Now: (309) 245-7421
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <section className="py-8 bg-accent text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Call us today for your free estimate
          </h2>
          <Button
            onClick={handleCallClick}
            variant="secondary"
            size="lg"
            className="whitespace-nowrap"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                In Bloomington, we provide a variety of concrete contracting services that can be performed in or near your residence. You have arrived at the appropriate location if you are contemplating the addition of additional concrete to your residence. Bloomington is home to numerous exceptional concrete enterprises. Peoria Concrete Co., your neighborhood concrete company, is committed to completing any project you require in the vicinity of your residence.
              </p>
              <p className="text-lg">
                Whether you are in search of a commercial concrete company with a large order to fill or a small job concrete company, we are confident that we are the ideal pouring company for you.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/1d86b716-543a-4dcf-8c85-1ae9dbf0b7ac.png"
                alt="Professional concrete contractors pouring a concrete driveway in Bloomington, IL"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">When gazing at a driveway, veranda, or deck</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/20580a80-2664-4e8a-aada-daa8dafb6d41.png"
                alt="Freshly poured concrete driveway with professional finish in Bloomington"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                You want to ensure that you have access to the most qualified concrete company in your area to assist you with your requirements. We suggest that you obtain several concrete estimates prior to making any decisions, as it is impossible to determine the superiority of one company over another without conducting an in-person meeting. Yes, that is correct; we encourage you to seek out alternative options. We are confident in the quality of our products and the exceptional service we provide, and we recommend that you explore your options.
              </p>
              <p className="text-lg mb-6">
                Contact Peoria Concrete Co. today to resolve any concrete issues that require the expertise of our concrete contractors. We will promptly execute any concrete work and provide you with a dependable cost estimate. With years of practical concrete experience, our team of concrete experts is capable of completing any task. Concrete is an excellent complement for numerous residents. Our rapid, high-quality service and minimal price facilitate your choice of concrete design. If you require concrete contractors for a modest project or a professional team for a commercial project, we are available to provide assistance. Our team of seasoned concrete contractors takes great delight in the installation of new concrete driveways or patios. Peoria Concrete Co. offers a variety of fundamental services, such as concrete driveways, flatwork, patios, walkways, and pathways. Our team provides a comprehensive selection of professional concrete services that are engineered to endure and necessitate minimal maintenance and upkeep. We employ advanced and durable materials to achieve this. We provide a wide range of concrete services for both residential and commercial structures. Please do not hesitate to reach out to one of our concrete contractors at 309-245-7421 if you are in need of new concrete flatwork for patios and pedestrian surfaces in Bloomington and the surrounding region, or if you require maintenance on existing concrete.
              </p>
              <Button
                onClick={handleCallClick}
                className="bg-accent hover:bg-accent/90 text-white font-bold"
              >
                <Phone className="mr-2" size={20} />
                Call Us Now: (309) 245-7421
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">At Peoria Concrete Co.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6">
                We are dedicated to providing the highest quality concrete contracting services to the citizens of Bloomington, Illinois and the surrounding communities. Our local team of concrete contractors is available to assist you with all of your residential and commercial concrete projects. We provide a diverse selection of developments, including concrete flatwork, walkways, and driveways. It is imperative that we adhere to your vision for your property and surpass your expectations for all of your projects at Peoria Concrete Co. We guarantee that all of our services are priced reasonably by providing forthright and transparent costs. We also acknowledge that each property has its own unique requirements and specifications. Consequently, we customize each service to meet your specific needs. Here at Peoria Concrete Co., the significance of well-designed and visually appealing living spaces is best understood. Concrete is not only an exceptional choice for architectural and aesthetic purposes, but it is also a durable and adaptable material that necessitates minimal maintenance and upkeep. Concrete patios and surfaces are the ideal living space for withstanding heavy traffic and natural elements while maintaining a clean, organized appearance. We guarantee that each concrete patio and surface is constructed accurately, securely, and without incident by employing highly competent professionals and state-of-the-art equipment. As a local concrete contractor in Bloomington, we offer a variety of concrete services. We will repair your concrete driveway, patio, garage, or any other location where you would like to have your new and improved concrete. Our concrete contractors are licensed to construct concrete.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/24d24778-fa3e-4225-9fd6-a06c5ce8605d.png"
                alt="Skilled concrete contractors working on a decorative concrete patio in Bloomington"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">To determine whether or not a repair is necessary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png"
                  alt="Concrete inspection and assessment process in Bloomington"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-base">
                  Your base will be inspected by one of our concrete contractors. During the assessment process, we include the cost of any services that should be included, such as concrete engraving or staining. The cost of any other product that we offer will be specified.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/7469bd3e-c54b-4c9e-88a3-378c547c7614.png"
                  alt="Concrete repair process showing application of fresh concrete layer in Bloomington"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-base">
                  Despite the necessity of maintaining concrete surfaces, it is possible to implement new modifications. The majority of tasks entail the degrading of the slab's surface, followed by the application of a layer of concrete to protect it and guarantee its longevity. This is a common practice on a patio or driveway.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/9929b6de-baee-49ad-874c-ae0461df86d4.png"
                  alt="Concrete sealing and finishing process for extended durability in Bloomington"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-base">
                  In order to prevent future costly maintenance, the concrete will also be covered for an extended period; however, this is purely for aesthetic purposes. At Peoria Concrete Co., we are dedicated to providing you with the highest quality concrete services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Peoria Concrete Co. is the primary concrete company.</h3>
            <p className="text-lg mb-6">
              This information will simplify the decision-making process if you are in need of assistance with the construction of a new roadway or the restoration of an existing driveway. Provide the specified task to a specialist in order to prevent any potential issues or injuries in the future. The concept of flatwork concrete is employed to describe the capacity of concrete to be set on a flat surface. Our team of experts simplifies the process of designing concrete for your patio, walkway, and ground entryway to the same extent as any other solid surface. Qualified professionals are the only individuals who can complete the intricate task of constructing a concrete patio. Our concrete contractors' ability to guarantee that your patio is constructed in a manner that prevents potential catastrophes or issues is highly rewarding. We are aware that our primary focus is on ensuring that you receive the highest quality concrete service and maintenance. This is due to the fact that the weather and the regular use of your concrete area can lead to issues such as splitting or breaking. Effectively trained and experienced craftsmen and exceptional production are critical components of the stability of concrete structures and services. A variety of complications may result from concrete fractures. It is possible that the ground has shifted beneath the concrete, or the initial design was not executed correctly. If there are no more significant issues, fissures are a relatively straightforward solution for a concrete contractor. Our professional contractors can conduct a comprehensive examination, regardless of whether it is a building, repair, or reconstruction project, to prevent any potential damage. A business that is punctual, efficiently manages the job as time dictates, and juggles time limits, cost adjustments, and products is a credible entity. We have a list of our previous experiences with other clients that can guarantee protection and simplicity. Our professional contractors are chosen based on their efficacy, customer service, operation, and versatility. This is the reason we are able to offer these concrete repair and installation services with ease. Call us today at 309-245-7421 and allow our expert concrete contractors to complete a job that will exceed your expectations. We are striving to deliver a service of exceptional quality at a price that is mutually acceptable. Read the feedback of our company from our genuine, satisfied customers.
            </p>
          </div>
        </div>
      </section>

      {/* Concrete Services */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Concrete Services in Bloomington, Illinois</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">We provide a variety of services, such as:</p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Concrete Pouring</li>
              <li>Slab Pouring</li>
              <li>Driveway Pouring</li>
            </ul>
            <p className="text-lg mb-6">
              Despite the fact that we promote our concrete services, we are also highly experienced deck and patio contractors. Additionally, we specialize in commercial concrete. No matter the service you require, you can trust us to complete it accurately. For additional details regarding our concrete options, please contact us at 309-245-7421 or explore our website.
            </p>
          </div>
        </div>
      </section>

      {/* Concrete Patios */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Patios Made of Concrete</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/558e0f4d-4fc0-44be-ac14-5e735cc4772c.png"
                alt="Beautifully designed concrete patio with decorative finish in Bloomington"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                When constructing a patio in your backyard, concrete is an exceptional choice. A concrete patio offers a variety of options. These consist of:
              </p>
              <ul className="list-disc list-inside mb-6 text-lg">
                <li>Concrete that has been stained</li>
                <li>Concrete that has been stamped</li>
                <li>Concrete that has been colored</li>
              </ul>
              <p className="text-lg mb-6">
                Concrete flatwork is an additional alternative for patio construction. This type of concrete is suitable for a variety of applications, including driveways, sidewalks, and patios. The term "flatwork" is derived from the fact that concrete will consistently be capable of establishing a horizontal surface that is flat.
              </p>
              <p className="text-lg mb-6">
                Each of these flatwork alternatives, including decorative concrete, is an excellent choice for terraces. You can be certain that your patio will have a polished, beautiful appearance, regardless of the choice you make. Contact us today to learn more about the cost and other pricing options.
              </p>
              <Button
                onClick={handleCallClick}
                className="bg-accent hover:bg-accent/90 text-white font-bold"
              >
                <Phone className="mr-2" size={20} />
                Call for Patio Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Concrete */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Decorative Concrete</h2>
          <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
            There are numerous varieties of decorative concrete that may be installed in your driveway, patio, sidewalk, or residence. The following are the three distinct options that we provide: engraved, and pigmented concrete.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/63e0b184-368a-4631-b7da-9fbe393ba3b1.png"
                  alt="Engraved decorative concrete pattern in a Bloomington driveway"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Engraved Concrete</h3>
                <p className="text-base">
                  Intricate patterns and designs engraved into concrete surfaces for a unique, custom look.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/8f3657fc-e104-4597-ab35-96266deb2d76.png"
                  alt="Stamped decorative concrete with natural stone pattern for a Bloomington patio"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Stamped Concrete</h3>
                <p className="text-base">
                  Concrete stamped with patterns to mimic other materials like stone, brick, or tile.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/df1d8003-de8b-4e41-bba7-0ed0f5bc5726.png"
                  alt="Colored concrete with rich earth tones for a Bloomington walkway"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Pigmented Concrete</h3>
                <p className="text-base">
                  Concrete with integrated color for a consistent, lasting appearance that won't fade.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Concrete Driveway</h3>
            <p className="text-lg mb-6">
              If you currently have a concrete driveway and wish to enhance the curb allure of your property, you may consider the following treatments:
            </p>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Concrete Finishing</li>
              <li>Coating for Concrete</li>
            </ul>
            <p className="text-lg">
              Regardless of whether you require commercial or residential concrete services in Bloomington, IL, we can promptly address your needs. Our team is available to address any additional inquiries you may have regarding the cost of concrete or other alternatives at any of our locations.
            </p>
          </div>
        </div>
      </section>

      {/* Stamped Concrete */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Stamped and stamped concrete</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6">
                Stamped concrete is a decorative concrete that has a design imprinted onto it. Areas such as your patio, driveway, or veranda may be imprinted with any type of cement. We can imprint any design on the surface of your property, regardless of the color you desire.
              </p>
              <p className="text-lg mb-6">
                There are also sealing options available.
              </p>
              <p className="text-lg mb-6">
                For inquiries regarding patio costs or any other inquiries, please complete our immediate concrete quote form.
              </p>
              <p className="text-lg mb-6">
                Staining may be an excellent choice for those who wish to alter the color of their concrete. Any slab of concrete that you wish to alter in color can be stained.
              </p>
              <p className="text-lg mb-6">
                Various types of decorative concrete can be used to enhance the aesthetic appeal of various areas in your home. One of the most effective methods for safeguarding your property from high-traffic damage is to install a durable material such as concrete on the floors, pavements, counters, or driveways.
              </p>
              <p className="text-lg mb-6">
                Peoria Concrete Co. is prepared to address any inquiries you may have regarding concrete in the yard or other areas of the residence. Call us today at 309-245-7421!
              </p>
              <Button
                onClick={handleCallClick}
                className="bg-accent hover:bg-accent/90 text-white font-bold"
              >
                <Phone className="mr-2" size={20} />
                Call Us: 309-245-7421
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/f3755294-0c69-4c8e-a07b-1770275194b8.png"
                alt="Expertly crafted stamped concrete with intricate pattern in Bloomington"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 2 */}
      <section className="py-8 bg-accent text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Call us today for your free estimate
          </h2>
          <Button
            onClick={handleCallClick}
            variant="secondary"
            size="lg"
            className="whitespace-nowrap"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Area in Bloomington, IL</h2>
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <div className="relative" style={{ height: '450px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356253.61712745985!2d-89.4052565293853!3d40.62333571870737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b087039089ac1%3A0x2e424aa54a23bc1e!2sBloomington%2C%20IL%2C%20USA!5e0!3m2!1sen!2sma!4v1743012662517!5m2!1sen!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bloomington, IL Map"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BloomingtonIL;
