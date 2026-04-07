import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { MainLayout } from "@/components/layout/main-layout";
import { Home } from "@/pages/home";
import { Videos } from "@/pages/videos";
import { Tutoring } from "@/pages/tutoring";

const queryClient = new QueryClient();

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/tutoring" component={Tutoring} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  // Enforce dark mode by default for this cinematic aesthetic
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
