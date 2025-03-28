
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Index from "./pages/Index";
import PhysiqueSon from "./pages/PhysiqueSon";
import CultureMusicale from "./pages/CultureMusicale";
import AspectsTechniques from "./pages/AspectsTechniques";
import FonctionsSociales from "./pages/FonctionsSociales";
import NotFound from "./pages/NotFound";
import Changelog from "./components/Changelog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/physique-son" element={<PhysiqueSon />} />
            <Route path="/culture" element={<CultureMusicale />} />
            <Route path="/technique" element={<AspectsTechniques />} />
            <Route path="/societe" element={<FonctionsSociales />} />
            <Route path="/changelog" element={<Changelog />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
