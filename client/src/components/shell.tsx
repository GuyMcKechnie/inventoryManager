import React, { JSX } from "react";
import Header from "./header";
import Sidebar from "./side-bar";
import { Toaster } from "@/components/ui/sonner";

interface ShellProps {
  content: React.ReactNode;
}

function Shell({ content }: ShellProps): JSX.Element {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex w-full flex-col">
        <Header />
        <div className="flex w-full justify-between">
          <Sidebar />
          <div className="h-[94vh] w-full overflow-y-scroll" id="content">
            {content}
          </div>
        </div>
        <Toaster richColors />
      </div>
    </main>
  );
}

export default Shell;
