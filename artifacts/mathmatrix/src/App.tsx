import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessibilityProvider } from "@/contexts/accessibility-context";
import NotFound from "@/pages/not-found";
import { MainLayout } from "@/components/layout/main-layout";
import { MarketingLayout } from "@/components/layout/marketing-layout";
import { Landing } from "@/pages/landing";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";
import { Home } from "@/pages/home";
import { Videos } from "@/pages/videos";
import { Tutoring } from "@/pages/tutoring";
import { Quizzes } from "@/pages/quizzes";
import { Notes } from "@/pages/notes";
import { Flashcards } from "@/pages/flashcards";
import { StudyGroups } from "@/pages/study-groups";
import { Progress } from "@/pages/progress";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <MarketingLayout><Landing /></MarketingLayout>} />
      <Route path="/login" component={() => <Login />} />
      <Route path="/signup" component={() => <Signup />} />
      <Route path="/dashboard" component={() => <MainLayout><Home /></MainLayout>} />
      <Route path="/videos" component={() => <MainLayout><Videos /></MainLayout>} />
      <Route path="/quizzes" component={() => <MainLayout><Quizzes /></MainLayout>} />
      <Route path="/tutoring" component={() => <MainLayout><Tutoring /></MainLayout>} />
      <Route path="/notes" component={() => <MainLayout><Notes /></MainLayout>} />
      <Route path="/flashcards" component={() => <MainLayout><Flashcards /></MainLayout>} />
      <Route path="/study-groups" component={() => <MainLayout><StudyGroups /></MainLayout>} />
      <Route path="/progress" component={() => <MainLayout><Progress /></MainLayout>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <AccessibilityProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </AccessibilityProvider>
  );
}

export default App;
