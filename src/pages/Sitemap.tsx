
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Sitemap = () => {
  // Site structure organized by categories
  const siteLinks = {
    main: [
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Sitemap", path: "/sitemap" },
    ],
    services: [
      { name: "Concrete Driveways", path: "/concrete-driveway-peoria-il" },
      { name: "Concrete Patios", path: "/concrete-patio-peoria-il" },
      { name: "Concrete Crack Repair", path: "/concrete-crack-repair-peoria-il" },
      { name: "Stamped Concrete", path: "/stamped-concrete-peoria-il" },
    ],
    locations: [
      { name: "Peoria, IL", path: "/" },
      { name: "Champaign, IL", path: "/concrete-contractor/champaign-il" },
      { name: "Bloomington, IL", path: "/concrete-contractor/Bloomington-il" },
      { name: "Normal, IL", path: "/concrete-contractor/normal-il" },
      { name: "Morton, IL", path: "/concrete-contractor/morton-il" },
      { name: "Canton, IL", path: "/concrete-contractor/canton-il" },
      { name: "Eureka, IL", path: "/concrete-contractor/eureka-il" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | Peoria Concrete Contractors</title>
        <meta
          name="description"
          content="Browse our sitemap to easily navigate all pages on peoriaconcreteco.com. Find concrete services in Peoria and surrounding areas."
        />
        <link rel="canonical" href="https://peoriaconcreteco.com/sitemap" />
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
              <BreadcrumbPage>Sitemap</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Sitemap</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Browse all pages on peoriaconcreteco.com to find information about our concrete services in Peoria, IL and surrounding areas.
          </p>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-4">Main Pages</h2>
              <ul className="space-y-3">
                {siteLinks.main.map((link) => (
                  <li key={link.path} className="hover:text-primary transition-colors">
                    <Link to={link.path} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-4">Our Services</h2>
              <ul className="space-y-3">
                {siteLinks.services.map((link) => (
                  <li key={link.path} className="hover:text-primary transition-colors">
                    <Link to={link.path} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary border-b pb-2 mb-4">Service Locations</h2>
              <ul className="space-y-3">
                {siteLinks.locations.map((link) => (
                  <li key={link.path} className="hover:text-primary transition-colors">
                    <Link to={link.path} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* XML Sitemap Note */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">XML Sitemap for Search Engines</h3>
          <p className="mb-3">
            For search engine crawlers, our XML sitemap is available at:
          </p>
          <code className="block bg-gray-200 p-3 rounded">
            https://peoriaconcreteco.com/sitemap.xml
          </code>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
