
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
import Musicotherapie from "./pages/Musicotherapie";
import Phenomenes from "./pages/PhysiqueSon/Phenomenes";
import Instruments from "./pages/PhysiqueSon/Instruments";
import NotFound from "./pages/NotFound";
import Changelog from "./components/Changelog";
import APropos from "./pages/APropos";
import Actualite from "./pages/Actualite";
import Ressources from "./pages/Ressources";
import MusicCursor from "./components/MusicCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MusicCursor />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/physique-son" element={<PhysiqueSon />} />
            <Route path="/physique-son/phenomenes" element={<Phenomenes />} />
            <Route path="/physique-son/instruments" element={<Instruments />} />
            <Route path="/culture" element={<CultureMusicale />} />
            <Route path="/technique" element={<AspectsTechniques />} />
            <Route path="/societe" element={<FonctionsSociales />} />
            <Route path="/societe/musicotherapie" element={<Musicotherapie />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/actualite" element={<Actualite />} />
            <Route path="/ressources" element={<Ressources />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
