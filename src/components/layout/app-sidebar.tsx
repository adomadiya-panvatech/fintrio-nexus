import {
  Building2,
  LayoutDashboard,
  FileText,
  Users,
  ArrowUpDown,
  TrendingUp,
  FileBarChart,
  Settings,
  FormInput,
  Library,
  FileSignature,
  CreditCard,
  Mail,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Offer", url: "/offers", icon: Building2 },
  { title: "Account", url: "/accounts", icon: Users },
  { title: "Transaction", url: "/transactions", icon: ArrowUpDown },
  { title: "Distribution", url: "/distributions", icon: TrendingUp },
  { title: "Redemption", url: "/redemptions", icon: FileText },
  { title: "Reports", url: "/reports", icon: FileBarChart },
];

const configItems = [
  { title: "Form Category", url: "/settings/form-category", icon: FormInput },
  { title: "Form Type", url: "/settings/form-type", icon: FormInput },
  { title: "Form Library", url: "/settings/form-library", icon: Library },
  { title: "Esign Document", url: "/settings/esign", icon: FileSignature },
  { title: "Payment Details", url: "/settings/payment-details", icon: CreditCard },
  { title: "Email Template", url: "/settings/email-template", icon: Mail },
  { title: "SMS Template", url: "/settings/sms-template", icon: MessageSquare },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };
  
  const isConfigOpen = configItems.some((item) => isActive(item.url));

  const getNavClass = (path: string) => {
    const active = isActive(path);
    if (active) {
      return "bg-gradient-to-r from-sidebar-primary/20 to-sidebar-primary/10 text-sidebar-primary border-r-2 border-sidebar-primary shadow-lg shadow-sidebar-primary/20 font-semibold";
    }
    return "text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent/60 hover:to-sidebar-accent/30 hover:shadow-md";
  };

  const getSubNavClass = (path: string) => {
    const active = isActive(path);
    if (active) {
      return "bg-gradient-to-r from-sidebar-primary/15 to-transparent text-sidebar-primary border-l-2 border-sidebar-primary font-medium";
    }
    return "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent/40 hover:to-transparent hover:border-l-2 hover:border-sidebar-primary/50";
  };

  return (
    <Sidebar className="border-r border-sidebar-border overflow-hidden" style={{ background: 'var(--sidebar-gradient)' }}>
      {/* Beautiful Header with Gradient */}
      <SidebarHeader className="border-b border-sidebar-border/50 p-6 bg-gradient-to-br from-sidebar-primary/10 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sidebar-primary to-sidebar-primary/80 shadow-lg shadow-sidebar-primary/30">
            <Building2 className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-sidebar-foreground to-sidebar-foreground/80 bg-clip-text text-transparent">
                FINTRIO
              </span>
              <span className="text-xs text-sidebar-foreground/60 font-medium">
                Investment Platform
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs font-semibold uppercase tracking-wider mb-2 px-3">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${getNavClass(item.url)} transition-all duration-200 rounded-lg mx-1 h-11 px-3 group relative overflow-hidden`}
                  >
                    <NavLink to={item.url} end={item.url === "/"}>
                      <div className="flex items-center gap-3 relative z-10">
                        <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                        {!isCollapsed && (
                          <span className="font-medium tracking-wide">{item.title}</span>
                        )}
                      </div>
                      {/* Subtle glow effect for active items */}
                      {isActive(item.url) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-sidebar-primary/5 to-transparent rounded-lg" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Configuration Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen={isConfigOpen} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-gradient-to-r hover:from-sidebar-accent/60 hover:to-sidebar-accent/30 transition-all duration-200 rounded-lg mx-1 h-11 px-3 group">
                      <div className="flex items-center gap-3">
                        <div className="p-1 rounded-md bg-sidebar-primary/20">
                          <Settings className="h-4 w-4 text-sidebar-primary" />
                        </div>
                        {!isCollapsed && (
                          <>
                            <span className="font-medium">Configuration</span>
                            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="mt-2 ml-4 space-y-1">
                        {configItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton 
                              asChild 
                              className={`${getSubNavClass(item.url)} transition-all duration-200 rounded-md h-9 px-3 group relative`}
                            >
                              <NavLink to={item.url}>
                                <div className="flex items-center gap-3">
                                  <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                                  <span className="text-sm tracking-wide">{item.title}</span>
                                </div>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="mt-auto pt-4 border-t border-sidebar-border/30">
            <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5 border border-sidebar-primary/20">
              <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
                <div className="w-2 h-2 rounded-full bg-sidebar-primary animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}