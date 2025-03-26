
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConcreteDriveway from "./pages/ConcreteDriveway";
import ConcretePatio from "./pages/ConcretePatio";
import ConcreteRepair from "./pages/ConcreteRepair";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/concrete-driveway-peoria-il" element={<ConcreteDriveway />} />
          <Route path="/concrete-patio-peoria-il" element={<ConcretePatio />} />
          <Route path="/concrete-crack-repair-peoria-il" element={<ConcreteRepair />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
