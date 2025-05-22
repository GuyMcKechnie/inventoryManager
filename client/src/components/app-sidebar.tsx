import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Box,
  Gauge,
  ListCollapse,
  PanelLeftIcon,
  PieChart,
  Settings,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: <Gauge />,
    path: "/",
  },
  {
    name: "Users",
    icon: <User />,
    path: "/users",
  },
  {
    name: "Inventory",
    icon: <Box />,
    path: "/inventory",
  },
  {
    name: "Sales",
    icon: <ShoppingCart />,
    path: "/sales",
  },
  {
    name: "Purchases",
    icon: <ShoppingBag />,
    path: "/purchases",
  },
  {
    name: "Reporting",
    icon: <PieChart />,
    path: "/reporting",
  },
  {
    name: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar className="bg-gray-900" collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={toggleSidebar}>
              <span>
                <PanelLeftIcon className="!size-6" />
                <span className="ml-2">Toggle Sidebar</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
