
import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  const companyName = "Peoria Concrete Co";
  const emailAddress = "support@peoriaconcreteco.com";
  const phoneNumber = "309-245-7421";
  const address = "418 east avenue Peoria, IL 61603";
  const domain = "peoriaconcreteco.com";
  const lastUpdated = "July 28, 2023";

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | {companyName} | Expert Concrete Services</title>
        <meta
          name="description"
          content={`${companyName} privacy policy. Learn how we collect, use, and protect your personal information.`}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-concrete-dark py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-hero-pattern opacity-70"
          style={{ 
            backgroundImage: `url('/lovable-uploads/4f6c741d-8d1f-46e9-9553-168897cb7516.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in opacity-0 [animation-delay:200ms]">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <Card className="mb-10 shadow-md animate-fade-in opacity-0 [animation-delay:300ms]">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-concrete-dark mb-6">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">{companyName}</p>
                    <p className="text-sm text-muted-foreground">{domain}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Email</p>
                    <p className="text-sm text-muted-foreground">{emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Phone</p>
                    <p className="text-sm text-muted-foreground">{phoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent-blue p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-concrete-dark">Address</p>
                    <p className="text-sm text-muted-foreground">{address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Content */}
          <div className="space-y-8 animate-fade-in opacity-0 [animation-delay:400ms]">
            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Introduction</h2>
              <p className="mb-4">
                {companyName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by {companyName}.
              </p>
              <p>
                This Privacy Policy applies to our website, {domain}, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Information We Collect</h2>
              <p className="mb-4">
                We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or contact us.
              </p>
              <h3 className="text-xl font-semibold text-concrete-dark mb-2">Personal Information</h3>
              <p className="mb-4">
                When you visit our website, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the website, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the website, and information about how you interact with the website.
              </p>
              <h3 className="text-xl font-semibold text-concrete-dark mb-2">Contact Form Information</h3>
              <p>
                When you contact us using our contact form, we collect your name, email address, phone number, and any message content you provide. This information is used solely to respond to your inquiries and provide you with the requested services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Cookie Policy</h2>
              <p className="mb-4">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p>
                You can choose to disable cookies through your individual browser options. To learn more detailed information about cookie management with specific web browsers, please visit the browsers' respective websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
              <p>
                These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Security</h2>
              <p>
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-concrete-dark mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">By email:</span> {emailAddress}
                </p>
                <p>
                  <span className="font-medium">By phone:</span> {phoneNumber}
                </p>
                <p>
                  <span className="font-medium">By mail:</span> {address}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
