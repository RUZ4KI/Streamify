import useZustandStore from "@/store/useStore";
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
import { LineChart } from "../Charts/LineChart";
import { PieChart } from "../Charts/PieChart";
import { BarChart } from "../Charts/BarChart";
import { columns } from "../Table/columns";
import { DataTable } from "../Table/data-table";

function Dashboard() {
  const dashboardData = useZustandStore.use.dashboardData();
  const totalRevenue = useZustandStore.use.totalRevenue();
  const activeUsers = useZustandStore.use.activeUsers();
  const totalStreams = useZustandStore.use.totalStreams();
  const topArtist = useZustandStore.use.topArtist();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <header className="flex h-16 md:h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-2 md:px-4">
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
          <div className="w-full flex flex-col gap-4 p-2 md:p-4 max-w-[100vw] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
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

            <div className="rounded-xl bg-muted/50">
              <div className="w-full overflow-x-auto">
                <div className="p-2 md:p-4 min-w-full">
                  <DataTable columns={columns} data={dashboardData} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;
