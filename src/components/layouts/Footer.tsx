
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Site links for services, locations, and legal pages
  const serviceLinks = [
    { name: "Concrete Driveways", path: "/concrete-driveway-peoria-il" },
    { name: "Concrete Patios", path: "/concrete-patio-peoria-il" },
    { name: "Concrete Repair", path: "/concrete-crack-repair-peoria-il" },
    { name: "Stamped Concrete", path: "/stamped-concrete-peoria-il" },
  ];

  const locationLinks = [
    { name: "Peoria, IL", path: "/" },
    { name: "Champaign, IL", path: "/concrete-contractor/champaign-il" },
    { name: "Bloomington, IL", path: "/concrete-contractor/Bloomington-il" },
    { name: "Normal, IL", path: "/concrete-contractor/normal-il" },
    { name: "Morton, IL", path: "/concrete-contractor/morton-il" },
    { name: "Canton, IL", path: "/concrete-contractor/canton-il" },
    { name: "Eureka, IL", path: "/concrete-contractor/eureka-il" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: <Facebook className="w-5 h-5" />, 
      url: "https://www.facebook.com/concretepeoriacotexas" 
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="w-5 h-5" />, 
      url: "https://www.youtube.com/@Peoriaconcreteco" 
    },
    { 
      name: "Pinterest", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest"><path d="M9 20.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V13H9Z"/><path d="M9 9V4.5A.5.5 0 0 1 9.5 4h5a.5.5 0 0 1 .5.5V9"/><path d="M14.5 4.5A4.5 4.5 0 1 0 9 9v12c0 .28.22.5.5.5h5c.28 0 .5-.22.5-.5V9"/></svg>, 
      url: "https://www.pinterest.com/Peoriaconcretecoo/" 
    },
  ];

  const companyInfo = {
    name: "Peoria Concrete Co",
    phone: "309-245-7421",
    email: "support@peoriaconcreteco.com",
    address: "418 east avenue Peoria, IL 61603",
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Company</h3>
            
            {/* Logo */}
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-primary">
                Peoria Concrete Co
              </div>
            </Link>
            
            {/* Legal Links */}
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
              <a 
                href={`mailto:${companyInfo.email}`}
                className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{companyInfo.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-600">{companyInfo.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              
              <Button asChild className="mt-2 w-full sm:w-auto">
                <a href={`tel:${companyInfo.phone.replace(/-/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call For Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Disclaimer */}
        <div className="text-sm text-gray-500 mb-6 max-w-3xl mx-auto text-center">
          <p className="mb-2">
            This is a third-party website; we do not perform any work ourselves; we merely forward leads to expert concrete contractors.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>Copyright © {currentYear} Peoria Concrete Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
