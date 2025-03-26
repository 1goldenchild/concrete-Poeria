
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top header - always visible */}
      <div className="bg-accent text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {!isMobile ? (
            <>
              <div className="flex items-center">
                <Button 
                  variant="link" 
                  className="text-white p-0 flex items-center gap-2"
                  asChild
                >
                  <a href="tel:5047321542">
                    <Phone size={18} />
                    <span className="font-medium">Call Us Today For Your Free Estimate: 504-732-1542</span>
                  </a>
                </Button>
              </div>
              <Link to="/" className="text-2xl font-bold">Peoria Concrete Co.</Link>
            </>
          ) : (
            <>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-secondary border-r border-gray-200 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-gray-200">
                      <h2 className="text-xl font-bold">Peoria Concrete Co.</h2>
                    </div>
                    <nav className="flex-1 p-4">
                      <ul className="space-y-4">
                        <li>
                          <Link 
                            to="/" 
                            className="block py-2 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Home
                          </Link>
                        </li>
                        <MobileDropdown 
                          title="Services" 
                          items={[
                            { name: "Concrete Driveways", path: "/concrete-driveway-peoria-il" },
                            { name: "Concrete Patios", path: "/concrete-patio-peoria-il" },
                            { name: "Concrete Repair", path: "/concrete-crack-repair-peoria-il" },
                            { name: "Stamped Concrete", path: "/stamped-concrete-peoria-il" },
                          ]}
                          closeMenu={() => setIsMenuOpen(false)}
                        />
                        <MobileDropdown 
                          title="Locations" 
                          items={[
                            { name: "Champaign, IL", path: "/concrete-contractor/champaign-il" },
                            { name: "Bloomington, IL", path: "/concrete-contractor/Bloomington-il" },
                            { name: "Normal, IL", path: "/concrete-contractor/normal-il" },
                            { name: "Morton, IL", path: "/concrete-contractor/morton-il" },
                            { name: "Canton, IL", path: "/concrete-contractor/canton-il" },
                            { name: "Eureka, IL", path: "/concrete-contractor/eureka-il" },
                          ]}
                          closeMenu={() => setIsMenuOpen(false)}
                        />
                        <li>
                          <Link 
                            to="/contact-us" 
                            className="block py-2 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <MobileDropdown 
                          title="Legal" 
                          items={[
                            { name: "Terms & Conditions", path: "/terms-conditions" },
                            { name: "Privacy Policy", path: "/privacy-policy" },
                          ]}
                          closeMenu={() => setIsMenuOpen(false)}
                        />
                      </ul>
                    </nav>
                    <div className="p-4 border-t border-gray-200">
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-center gap-2"
                        asChild
                      >
                        <a href="tel:5047321542">
                          <Phone size={16} />
                          <span>504-732-1542</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button 
                variant="link" 
                className="text-white p-0"
                asChild
              >
                <a href="tel:5047321542">
                  <Phone size={18} />
                  <span className="sr-only">Call Us</span>
                </a>
              </Button>
              <Link to="/" className="text-xl font-bold">Peoria Concrete Co.</Link>
            </>
          )}
        </div>
      </div>

      {/* Main navigation - desktop only */}
      {!isMobile && (
        <div 
          className={`bg-white shadow-sm transition-all ${
            isScrolled ? "fixed top-0 left-0 w-full z-50 shadow-md" : ""
          }`}
        >
          <div className="container mx-auto px-4">
            <NavigationMenu className="justify-center">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { name: "Concrete Driveways", path: "/concrete-driveway-peoria-il" },
                        { name: "Concrete Patios", path: "/concrete-patio-peoria-il" },
                        { name: "Concrete Repair", path: "/concrete-crack-repair-peoria-il" },
                        { name: "Stamped Concrete", path: "/stamped-concrete-peoria-il" },
                      ].map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { name: "Champaign, IL", path: "/concrete-contractor/champaign-il" },
                        { name: "Bloomington, IL", path: "/concrete-contractor/Bloomington-il" },
                        { name: "Normal, IL", path: "/concrete-contractor/normal-il" },
                        { name: "Morton, IL", path: "/concrete-contractor/morton-il" },
                        { name: "Canton, IL", path: "/concrete-contractor/canton-il" },
                        { name: "Eureka, IL", path: "/concrete-contractor/eureka-il" },
                      ].map((location) => (
                        <li key={location.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={location.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{location.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact-us">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Legal</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      {[
                        { name: "Terms & Conditions", path: "/terms-conditions" },
                        { name: "Privacy Policy", path: "/privacy-policy" },
                      ].map((legal) => (
                        <li key={legal.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={legal.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{legal.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </header>
  );
};

// Mobile dropdown component for the sidebar
const MobileDropdown = ({ 
  title, 
  items, 
  closeMenu 
}: { 
  title: string; 
  items: { name: string; path: string }[];
  closeMenu: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="flex items-center justify-between w-full py-2 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? "max-h-60" : "max-h-0"}`}>
        <ul className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block py-1 text-gray-600 hover:text-gray-900"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Header;
