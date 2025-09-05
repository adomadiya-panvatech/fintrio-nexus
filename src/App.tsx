import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import Index from "./pages/Index";
import OffersPage from "./pages/offers";
import AccountsPage from "./pages/accounts";
import TransactionsPage from "./pages/transactions";
import DistributionsPage from "./pages/distributions";
import RedemptionsPage from "./pages/redemptions";
import ReportsPage from "./pages/reports";
import FormCategoryPage from "./pages/settings/form-category";
import EmailTemplatePage from "./pages/settings/email-template";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="offers" element={<OffersPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="distributions" element={<DistributionsPage />} />
            <Route path="redemptions" element={<RedemptionsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings/form-category" element={<FormCategoryPage />} />
            <Route path="settings/form-type" element={<FormCategoryPage />} />
            <Route path="settings/form-library" element={<FormCategoryPage />} />
            <Route path="settings/esign" element={<FormCategoryPage />} />
            <Route path="settings/payment-details" element={<FormCategoryPage />} />
            <Route path="settings/email-template" element={<EmailTemplatePage />} />
            <Route path="settings/sms-template" element={<EmailTemplatePage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
