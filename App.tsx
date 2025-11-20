import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import CustomerHomepage from "@/components/customer-homepage";
import ServicesPage from "@/pages/services";
import TrackPage from "@/pages/track";
import InfoPage from "@/pages/info";
import ProfilePage from "@/pages/profile";
import PhoneTest from "@/pages/phone-test";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import AdminSection from "@/components/admin-section";
import StaffSection from "@/components/staff-section";
import BoardSection from "@/components/board-section";

function Router() {
  return (
    <Switch>
      {/* Customer App Routes */}
      <Route path="/" component={CustomerHomepage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/track" component={TrackPage} />
      <Route path="/info" component={InfoPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/test" component={PhoneTest} />
      
      {/* Admin/Staff/Board Routes (Unchanged) */}
      <Route path="/portal" component={Home} />
      <Route path="/staff" component={StaffSection} />
      <Route path="/admin" component={AdminSection} />
      <Route path="/board" component={BoardSection} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
