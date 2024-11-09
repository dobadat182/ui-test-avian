import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layouts/Header";
const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <div className="h-full w-full bg-[#282c35] px-6 py-8">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default LayoutDashboard;
