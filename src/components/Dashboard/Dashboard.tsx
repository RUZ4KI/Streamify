import useZustandStore from "@/store/useStore";
import topArtistProfile from "@/assets/taylor swift.webp";
import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { Separator } from "../ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import UserCard from "../user-card";
import TopArtistCard from "../top-artist-card";
import { LineChart } from "../Charts/line-chart";
import { PieChart } from "../Charts/pie-chart";
import { BarChart } from "../Charts/bar-chart";
import { columns } from "../Table/columns";
import { DataTable } from "../Table/data-table";

function Dashboard() {
  const dashboardData = useZustandStore.use.dashboardData();
  const totalRevenue = useZustandStore.use.totalRevenue();
  const activeUsers = useZustandStore.use.activeUsers();
  const totalStreams = useZustandStore.use.totalStreams();
  const topArtist = {
    name: "Taylor Swift",
    streams: 1234567,
    imageUrl: topArtistProfile,
    genre: "Pop",
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-6 p-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-xl bg-muted/50">
                <UserCard
                  title="Total Revenue"
                  description={totalRevenue}
                  isProgress
                />
              </div>
              <div className="rounded-xl bg-muted/50">
                <UserCard
                  title="Active Users"
                  description={activeUsers}
                  isProgress={false}
                />
              </div>
              <div className="rounded-xl bg-muted/50">
                <UserCard
                  title="Total Streams"
                  description={totalStreams}
                  isProgress
                />
              </div>
              <div className="rounded-xl bg-muted/50">
                <TopArtistCard {...topArtist} />
              </div>
            </div>
            <div className="flex rounded-xl">
              <div className="w-full">
                <LineChart />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl">
                <div className="aspect-square">
                  <PieChart />
                </div>
              </div>
              <div className="rounded-xl">
                <div className="aspect-square">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-muted/50 p-4">
              <DataTable columns={columns} data={dashboardData} />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;
