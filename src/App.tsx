
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* These routes will be created in future iterations */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/services/london-experience" element={<NotFound />} />
          <Route path="/services/visa-services" element={<NotFound />} />
          <Route path="/services/accommodation" element={<NotFound />} />
          <Route path="/services/day-trips" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/blog/:id" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/privacy-policy" element={<NotFound />} />
          <Route path="/terms-conditions" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
