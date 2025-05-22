import React, { JSX } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

interface ShellProps {
  content: React.ReactNode;
}

function Shell({ content }: ShellProps): JSX.Element {
  return (
    <div className="flex justify-between bg-red-500">
      <SidebarProvider className="w-full">
        <AppSidebar />
        <main className="w-full" id="content">
          {content}
        </main>
      </SidebarProvider>
      <Toaster richColors />
    </div>
  );
}

export default Shell;
