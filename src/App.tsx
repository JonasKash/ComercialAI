<<<<<<< HEAD

=======
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
=======
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AuthPage from "./components/auth/AuthPage";
import Creatives from "./pages/Creatives";
import Campaigns from "./pages/Campaigns";
import CRM from "./pages/CRM";
import Analytics from "./pages/Analytics";
import Academy from "./pages/Academy";
import Settings from "./pages/Settings";
import Plans from "./pages/Plans";
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
=======
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/creatives" element={<Creatives />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/plans" element={<Plans />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
  </QueryClientProvider>
);

export default App;
