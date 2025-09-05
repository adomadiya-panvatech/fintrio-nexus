import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Breadcrumbs } from "./breadcrumbs";
import { UserNav } from "./user-nav";
import { ThemeToggle } from "./theme-toggle";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-4">
              <SidebarTrigger className="-ml-1" />
              
              <div className="flex-1 flex items-center gap-4">
                <Breadcrumbs />
                
                <div className="ml-auto flex items-center gap-4">
                  {/* Global Search */}
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search accounts, offers..."
                      className="w-[300px] pl-8"
                    />
                  </div>
                  
                  <ThemeToggle />
                  <UserNav />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}