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
    return `${active ? "bg-sidebar-accent text-sidebar-primary font-medium" : "hover:bg-sidebar-accent/50 text-sidebar-foreground"} transition-colors`;
  };

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-sidebar-primary">
            <Building2 className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-sidebar-foreground">FINTRIO</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={getNavClass(item.url)}>
                    <NavLink to={item.url} end={item.url === "/"}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen={isConfigOpen} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="hover:bg-sidebar-accent/50 text-sidebar-foreground">
                      <Settings className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span>Configuration</span>
                          <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {configItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild className={getNavClass(item.url)}>
                              <NavLink to={item.url}>
                                <item.icon className="h-4 w-4" />
                                <span>{item.title}</span>
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
      </SidebarContent>
    </Sidebar>
  );
}