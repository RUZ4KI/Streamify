import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "./components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import { DataTable } from "./components/Table/data-table";
import { columns } from "./components/Table/columns";
import UserCard from "./components/user-card";
import { PieChart } from "./components/charts/pie-chart";
import { LineChart } from "./components/charts/line-chart";
import { BarChart } from "./components/charts/bar-chart";
import useZustandStore from "@/store/useStore";
import TopArtistCard from "./components/top-artist-card";
import topArtistProfile from "@/assets/taylor swift.webp";

function App() {
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

export default App;
