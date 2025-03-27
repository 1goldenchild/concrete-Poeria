
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Index from "./pages/Index";
import ConcreteDriveway from "./pages/ConcreteDriveway";
import ConcretePatio from "./pages/ConcretePatio";
import ConcreteRepair from "./pages/ConcreteRepair";
import StampedConcrete from "./pages/StampedConcrete";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ChampaignIL from "./pages/ChampaignIL";
import BloomingtonIL from "./pages/BloomingtonIL";
import NormalIL from "./pages/NormalIL";
import MortonIL from "./pages/MortonIL";
import CantonIL from "./pages/CantonIL";
import EurekaIL from "./pages/EurekaIL";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/concrete-driveway-peoria-il" element={<ConcreteDriveway />} />
            <Route path="/concrete-patio-peoria-il" element={<ConcretePatio />} />
            <Route path="/concrete-crack-repair-peoria-il" element={<ConcreteRepair />} />
            <Route path="/stamped-concrete-peoria-il" element={<StampedConcrete />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/concrete-contractor/champaign-il" element={<ChampaignIL />} />
            <Route path="/concrete-contractor/Bloomington-il" element={<BloomingtonIL />} />
            <Route path="/concrete-contractor/normal-il" element={<NormalIL />} />
            <Route path="/concrete-contractor/morton-il" element={<MortonIL />} />
            <Route path="/concrete-contractor/canton-il" element={<CantonIL />} />
            <Route path="/concrete-contractor/eureka-il" element={<EurekaIL />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
